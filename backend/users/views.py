# Django REST Framework
from rest_framework import status, viewsets
from rest_framework.decorators import action, api_view
from rest_framework.response import Response


# Serializers
from users.serializers import UserLoginSerializer, UserModelSerializer, UserSignUpSerializer

# Models
from django.contrib.auth.models import User


class UserViewSet(viewsets.GenericViewSet):

    queryset = User.objects.filter(is_active=True)
    serializer_class = UserModelSerializer

    @action(detail=False, methods=['post'])
    def login(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user, token = serializer.save()
        user = UserModelSerializer(user).data
        del user['password']
        data = {
            'user': user,
            'access_token': token
        }
        return Response(data, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def signup(self, request):
        print(request.data)

        serializer = UserSignUpSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        data = UserModelSerializer(user).data
        return Response(data, status=status.HTTP_201_CREATED)
    
    @action(detail=False, methods=['put'])
    def updateUser(self, request):
        user = User.objects.get(username=request.data['username'])
        oldData = UserModelSerializer(user).data
        request.data['password'] = oldData['password']
        request.data['is_staff'] = oldData['is_staff']
        serializer = UserModelSerializer(user, data=request.data, partial=True)

        if serializer.is_valid():
            user = serializer.save()
            return Response({
                'username': request.data['username'],
                'first_name': request.data['first_name'],
                'last_name': request.data['last_name'],
                'email': request.data['email']
            },status=status.HTTP_200_OK)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getFullName(request, username):
    modelUser = User.objects.get(username=username)
    user = UserModelSerializer(modelUser).data
    userData = {
        'firstName': user['first_name'],
        'lastName': user['last_name']
    }
    return Response(user, status=status.HTTP_200_OK)


@api_view(['GET'])
def getFullName(request, userId):
    modelUser = User.objects.get(id=userId)
    user = UserModelSerializer(modelUser).data
    userData = {
        'firstName': user['first_name'],
        'lastName': user['last_name']
    }
    return Response(user, status=status.HTTP_200_OK)
