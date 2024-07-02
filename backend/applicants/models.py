from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

class Applicant(models.Model):
    """
    Represents an applicant for a program.

    Attributes:
        user_id (ForeignKey): The associated user ID.
        period (TextField): The period of application.
        registrationType (TextField): The type of registration.
        program (TextField): The program applied for.
        address (TextField): The applicant's address.
        phone (TextField): The applicant's phone number.
        highSchool (TextField): The applicant's high school.
        globalScore (IntegerField): The applicant's global score (between 0 and 500).
        readingScore (IntegerField): The applicant's reading score (between 0 and 100).
        mathScore (IntegerField): The applicant's math score (between 0 and 100).
        socialScore (IntegerField): The applicant's social score (between 0 and 100).
        scienceScore (IntegerField): The applicant's science score (between 0 and 100).
        englishScore (IntegerField): The applicant's English score (between 0 and 100).

    Example:
        >>> applicant = Applicant(
       ...     user_id=User.objects.get(id=1),
       ...     period="Fall 2023",
       ...     registrationType="Regular",
       ...     program="Computer Science",
       ...     address="123 Main St",
       ...     phone="555-1234",
       ...     highSchool="Lincoln High",
       ...     globalScore=400,
       ...     readingScore=80,
       ...     mathScore=90,
       ...     socialScore=70,
       ...     scienceScore=85,
       ...     englishScore=95
       ... )
    """
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