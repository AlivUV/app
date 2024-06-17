from rest_framework import serializers
from .models import Applicant

class ApplicantModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Applicant
        fields = ['id', 'user_id', 'registrationType', 'period', 'program', 'address', 'phone', 'highSchool', 'globalScore', 'readingScore', 'mathScore', 'socialScore', 'scienceScore', 'englishScore']