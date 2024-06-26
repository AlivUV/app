import os
import io
import json
import base64
import environ
from PIL import Image
import pypdfium2 as pdfium
from rest_framework import status
import google.generativeai as genai
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.exceptions import ImproperlyConfigured


env = environ.Env()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

environ.Env.read_env(os.path.join(BASE_DIR, '.env'))

env.read_env()

def get_env(key, default=None):
    try:
        return env(key)
    except ImproperlyConfigured:
        return os.environ.get(key, default)


@api_view(['POST'])
def geminiImage(request):
    body = json.loads(request.body.decode('utf-8'))

    body['file'] = base64.b64decode(body['file'])

    if (body['fileType'] == 'image'):
        body['file'] = Image.open(io.BytesIO(body['file']))
    else:
        pdf = pdfium.PdfDocument(body['file'])
        
        pages = []

        for i in range(len(pdf)):

            page = pdf.get_page(i)

            page = page.render(
                scale=1,
                rotation=0
            )
            page = page.to_pil()
            page.save(f"image.png")

            pages.append(page)
        
        body['file'] = pages

    genai.configure(api_key = get_env("GEMINI_API_KEY"))

    model = genai.GenerativeModel('gemini-pro-vision')

    prompt = [body['prompt']]
    prompt.extend(body['file'])


    response = model.generate_content(prompt, stream=True)
    response.resolve()

    responseData = response.text.split('```')

    if (len(responseData) > 1) :
        responseData = responseData[1]
    else:
        responseData = response.text

    if (responseData[0] != '{' and responseData[0] != '\n'):
        responseData = responseData[5:]

    data = {
        'data': responseData
    }

    return Response(data, status = status.HTTP_200_OK)

