from .models import Place
from .serializer import PlaceSerializer
from .permission import IsContributor
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import filters

class PlaceViewSet(ModelViewSet):
	queryset = Place.objects.all()
	serializer_class = PlaceSerializer
	permission_classes = [IsAuthenticatedOrReadOnly, IsContributor]
	lookup_field = 'name'
	filter_backends = [filters.SearchFilter]
	search_fields = ['name', 'district', 'state']
	SEARCH_PARAM = 'q'

	def perform_create(self, serializer):
		serializer.save(contributor=self.request.user)