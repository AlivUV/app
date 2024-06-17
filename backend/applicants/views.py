"""Views for the projects app"""
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from rest_framework import status, viewsets

from .models import Applicant
from .serializers import ApplicantModelSerializer


class ApplicantViewSet(viewsets.GenericViewSet):
    serializer_class = ApplicantModelSerializer

    @action(detail=False, methods=['post'])
    def register(self, request):
        """Tries to create a row in the database and returns the result"""
        serializer = ApplicantModelSerializer(data=request.data)

        if serializer.is_valid():
            applicant = serializer.save()
            data = ApplicantModelSerializer(applicant).data.copy()
            del data['id']
            del data['user_id']
            return Response(serializer.data,status=status.HTTP_201_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getApplicant(request, applicantId):
    modelApplicant = Applicant.objects.get(id=applicantId)
    applicant = ApplicantModelSerializer(modelApplicant).data.copy()
    del applicant['id']
    del applicant['user_id']
    return Response(applicant, status=status.HTTP_200_OK)