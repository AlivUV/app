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
    """
    Get an environment variable from the .env file or os.environ.

    Args:
        key (str): The key of the environment variable.
        default: The default value to return if the key is not found.

    Returns:
        str: The value of the environment variable.
    """
    try:
        return env(key)
    except ImproperlyConfigured:
        return os.environ.get(key, default)


@api_view(['POST'])
def geminiImage(request):
    """
    Process an image or PDF file and generate a response using the Gemini API.

    Args:
        request (Request): The HTTP request object.

    Returns:
        Response: A JSON response with the generated data.
    """
    body = json.loads(request.body.decode('utf-8'))

    body['file'] = base64.b64decode(body['file'])

    prompt = [body['prompt']]

    if (body['fileType'] == 'image'):
        body['file'] = Image.open(io.BytesIO(body['file']))

        prompt.append(body['file'])
    else:
        print('pdf')
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

        prompt.extend(body['file'])

    genai.configure(api_key = get_env("GEMINI_API_KEY"))

    model = genai.GenerativeModel('gemini-pro-vision')

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

