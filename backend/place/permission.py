from rest_framework.permissions import SAFE_METHODS, BasePermission

class IsContributor(BasePermission):
	def has_permission(self, request, view):
		return True
		
	def has_object_permission(self, request, view, obj):
		if request.method in SAFE_METHODS:
			return True
		return request.user == obj.contributor