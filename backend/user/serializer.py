from django.contrib.auth.models import User
from rest_framework import serializers


class UserRegisterSerializer(serializers.ModelSerializer):
	password2 = serializers.CharField(write_only=True, style={'input_type': 'password'})

	class Meta:
		model = User
		fields = ['username', 'password', 'password2']
		extra_kwargs = {
			'password': { 'write_only': True, 'style': { 'input_type': 'password' } }
		}

	def save(self):
		user = User(
			username=self.validated_data.get('username')
		)
		password = self.validated_data.get('password')
		password2 = self.validated_data.get('password2')
		if password != password2:
			raise serializers.ValidationError({ 'password': "Passwords do not match" })
		user.set_password(password)
		user.save()
		return user