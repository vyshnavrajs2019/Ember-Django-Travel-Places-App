from place.serializer import PlaceSerializer
from django.contrib.auth.models import User
from rest_framework import serializers

class ContributionSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ['id', 'username','contributions']