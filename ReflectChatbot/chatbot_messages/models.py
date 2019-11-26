from django.db import models

# Create your models here.
class chatbot_message(models.Model):
    sender = models.CharField(max_length=100)
    receiver = models.CharField(max_length=100)
    message = models.CharField(max_length=1000)