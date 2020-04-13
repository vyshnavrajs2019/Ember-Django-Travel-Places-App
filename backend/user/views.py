from .serializer import UserRegisterSerializer
from django.contrib.auth.models import User
from rest_framework.generics import CreateAPIView
from rest_framework import status
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.authtoken.models import Token


class SignInView(ObtainAuthToken):
	def post(self, request, *args, **kwargs):
		serializer = self.serializer_class(data=request.data, context={'request': request})
		serializer.is_valid(raise_exception=True)
		user = serializer.validated_data['user']
		token, created = Token.objects.get_or_create(user=user)
		return Response({ 'token': token.key, 'id': user.id })

class SignUpView(CreateAPIView):
	queryset = User.objects.all()
	serializer_class = UserRegisterSerializer

	def create(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		token, created = Token.objects.get_or_create(user=user)
		return Response({ 'token': token.key, 'id': user.id }, status=status.HTTP_201_CREATED, headers=headers)

	def perform_create(self, serializer):
		return serializer.save()