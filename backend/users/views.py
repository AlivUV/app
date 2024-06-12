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
        serializer = UserSignUpSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        data = UserModelSerializer(user).data
        return Response(data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def getFullName(request, username):
    modelUser = User.objects.get(id=username)
    user = UserModelSerializer(modelUser).data
    userData = {
        'firstName': user['first_name'],
        'lastName': user['last_name']
    }
    return Response(user, status=status.HTTP_200_OK)
