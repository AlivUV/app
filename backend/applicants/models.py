from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

class Applicant(models.Model):
    user_id = models.ForeignKey(
        User, null=True, blank=True, on_delete=models.DO_NOTHING, db_column='username')
    period = models.TextField()
    registrationType = models.TextField()
    program = models.TextField()
    address = models.TextField()
    phone = models.TextField()
    highSchool = models.TextField()
    globalScore = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(500)])
    readingScore = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])
    mathScore = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])
    socialScore = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])
    scienceScore = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])
    englishScore = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])

    def __str__(self) -> str:
        return self

    class Meta:
        db_table: 'applicants'