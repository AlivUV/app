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
    """
    ViewSet for managing applicants
    """
    serializer_class = ApplicantModelSerializer


    @action(detail=False, methods=['post'])
    def addApplicant(self, request):
        """
        Tries to create a row in the database and returns the result.

        Args:
            request (Request): Request object containing applicant data

        Returns:
            Response: Created applicant data with 201 status code on success, 400 on failure
        """
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
        """
        Tries to create a row in the database and returns the result.

        Args:
            request (Request): Request object containing applicant and user data

        Returns:
            Response: Created applicant and user data with 201 status code on success, 400 on failure
        """
        if request.data['password'] != request.data['password_confirmation']:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        userSerializer = UserModelSerializer(data=request.data)

        try:
            with transaction.atomic():
                if not userSerializer.is_valid():
                    raise Exception('User not valid')

                user = userSerializer.save()
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


    @action(detail=False, methods=['put'])
    def updateApplicantUser(self, request):
        """
        Tries to update an existing user and applicant in the database and returns the result.

        Args:
            request (Request): Request object containing applicant and user data

        Returns:
            Response: Updated applicant and user data with 201 status code on success, 400 on failure
        """
        user = User.objects.get(id=request.data['user_id'])
        applicant = Applicant.objects.get(id=request.data['applicant_id'])
        
        try:
            with transaction.atomic():
                userSerializer = UserModelSerializer(user, data=request.data, partial=True)
                if not userSerializer.is_valid():
                    raise Exception('User not valid')

                user = userSerializer.save()
                data = UserModelSerializer(user).data.copy()

                applicantSerializer = ApplicantModelSerializer(applicant, data=request.data, partial=True)

                if not applicantSerializer.is_valid():
                    raise Exception('Applicant not valid')
                
                applicant = applicantSerializer.save()
                data = {**data, **ApplicantModelSerializer(applicant).data.copy()}
                del data['id']
                del data['user_id']
                del data['password']
                return Response(data,status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)
        

@api_view(['GET'])
def getApplicant(request, applicantId):
    """
    Retrieve an applicant by ID

    Args:
        request (Request): Request object
        applicantId (int): ID of the applicant to retrieve

    Returns:
        Response: Applicant data with 200 status code on success, 404 on failure
    """
    modelApplicant = Applicant.objects.get(id=applicantId)
    applicant = ApplicantModelSerializer(modelApplicant).data.copy()
    del applicant['id']
    applicant['user_id']
    return Response(applicant, status=status.HTTP_200_OK)


@api_view(['GET'])
def getAllApplicants(request):
    """
    Retrieve all applicants

    Args:
        request (Request): Request object

    Returns:
        Response: List of applicant data with 200 status code on success
    """
    applicantModelList = Applicant.objects.all().select_related('user_id')
    allApplicants = []

    for applicant in applicantModelList:
        userData = User.objects.get(id=ApplicantModelSerializer(applicant).data['user_id'])
        userData = {**UserModelSerializer(userData).data, **ApplicantModelSerializer(applicant).data}
        userData['applicant_id'] = userData['id']
        del userData['password']
        del userData['id']

        allApplicants.append(userData)
    return Response(allApplicants, status=status.HTTP_200_OK)