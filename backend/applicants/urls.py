from rest_framework.routers import DefaultRouter
from django.urls import include, path

from . import views

router = DefaultRouter()
router.register(r'applicants', views.ApplicantViewSet, basename='applicants')

urlpatterns = [
    path('', include(router.urls)),
    path('applicants/get/allApplicants', views.getAllApplicants, name='getAllApplicants'),
    path('applicant/get/applicantById/<str:applicantId>', views.getApplicant, name='getApplicant')
]