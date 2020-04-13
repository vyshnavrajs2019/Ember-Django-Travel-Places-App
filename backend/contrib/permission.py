from rest_framework.permissions import BasePermission

class IsSelfContribution(BasePermission):
	def has_permission(self, request, view):
		pk = view.kwargs.get('pk', None)
		if pk == None:
			return False
		return request.user.id == int(pk)