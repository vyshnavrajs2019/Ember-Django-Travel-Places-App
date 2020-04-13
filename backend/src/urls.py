from user.views import SignInView, SignUpView
from place.views import PlaceViewSet
from contrib.views import ContributionViewSet
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter(trailing_slash=False)
router.register('places', PlaceViewSet)
router.register('contributions', ContributionViewSet, basename='contrib')

urlpatterns = [
    path('admin/', admin.site.urls),
	# API
	path('api/auth/signup/', SignUpView.as_view(), name='signup'),
	path('api/auth/signin/', SignInView.as_view(), name='signin'),
	path('api/', include(router.urls)),
]
