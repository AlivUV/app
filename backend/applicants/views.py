"""Views for the projects app"""
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from rest_framework import status, viewsets
from django.db import transaction

# Models
from .models import Applicant
from django.contrib.auth.models import User

# Serializers
from .serializers import ApplicantModelSerializer
from users.serializers import UserModelSerializer


class ApplicantViewSet(viewsets.GenericViewSet):
    serializer_class = ApplicantModelSerializer

    @action(detail=False, methods=['post'])
    def addApplicant(self, request):
        """Tries to create a row in the database and returns the result"""
        serializer = ApplicantModelSerializer(data=request.data)

        print(request.data)

        if serializer.is_valid():
            applicant = serializer.save()
            data = ApplicantModelSerializer(applicant).data.copy()
            del data['id']
            del data['user_id']
            return Response(data,status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['post'])
    def createApplicantUser(self, request):
        """Tries to create a row in the database and returns the result"""
        if request.data['password'] != request.data['password_confirmation']:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        userSerializer = UserModelSerializer(data=request.data)

        try:
            with transaction.atomic():
                if not userSerializer.is_valid():
                    raise Exception('User not valid')

                user = userSerializer.save()
                print('User Created')
                data = UserModelSerializer(user).data.copy()

                request.data['user_id'] = data['id']
                applicantSerializer = ApplicantModelSerializer(data=request.data)

                if not applicantSerializer.is_valid():
                    raise Exception('Applicant not valid')
                
                applicant = applicantSerializer.save()
                data = {**data, **ApplicantModelSerializer(applicant).data.copy()}
                del data['id']
                del data['user_id']
                del data['password']
                return Response(data,status=status.HTTP_201_CREATED)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)
        

        


@api_view(['GET'])
def getApplicant(request, applicantId):
    modelApplicant = Applicant.objects.get(id=applicantId)
    applicant = ApplicantModelSerializer(modelApplicant).data.copy()
    del applicant['id']
    applicant['user_id']
    return Response(applicant, status=status.HTTP_200_OK)


@api_view(['GET'])
def getAllApplicants(request):
    applicantModelList = Applicant.objects.all().select_related('user_id')
    allApplicants = []

    for applicant in applicantModelList:
        userData = User.objects.get(id=ApplicantModelSerializer(applicant).data['user_id'])
        userData = {**ApplicantModelSerializer(applicant).data, **UserModelSerializer(userData).data}
        del userData['password']
        del userData['user_id']
        del userData['id']

        allApplicants.append(userData)
    return Response(allApplicants, status=status.HTTP_200_OK)