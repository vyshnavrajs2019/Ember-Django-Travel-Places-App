from .serializer import ContributionSerializer
from .permission import IsSelfContribution
from django.contrib.auth.models import User
from rest_framework.viewsets import ViewSet
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.mixins import CreateModelMixin
from rest_framework.permissions import IsAuthenticated


class ContributionViewSet(CreateModelMixin, RetrieveUpdateDestroyAPIView, ViewSet):
	queryset = User.objects.all()
	permission_classes = [IsAuthenticated, IsSelfContribution]
	serializer_class = ContributionSerializer