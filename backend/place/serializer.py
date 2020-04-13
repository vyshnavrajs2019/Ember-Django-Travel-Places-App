from .models import Place
from rest_framework import serializers


class PlaceSerializer(serializers.ModelSerializer):
	class Meta:
		model = Place
		fields = ['name', 'district', 'state', 'about', 'history', 'best_time']