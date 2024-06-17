from rest_framework.routers import DefaultRouter
from django.urls import include, path

from . import views

router = DefaultRouter()
router.register(r'applicants', views.ApplicantViewSet, basename='applicants')

urlpatterns = [
    path('', include(router.urls)),
    path('applicant/get/<str:applicantId>', views.getApplicant, name='getApplicant'),
]