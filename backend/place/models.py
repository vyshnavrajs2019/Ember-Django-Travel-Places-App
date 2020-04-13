from django.db import models
from django.contrib.auth.models import User

class Place(models.Model):
	name = models.CharField(max_length=255, unique=True, primary_key=True)
	district = models.CharField(max_length=255)
	state = models.CharField(max_length=255)
	about = models.TextField(null=True, blank=True)
	history = models.TextField(null=True, blank=True)
	best_time = models.TextField(null=True, blank=True)
	contributor = models.ForeignKey(User, on_delete=models.SET_NULL, related_name='contributions', null=True)

	def __str__(self):
		return self.name + " " + self.district