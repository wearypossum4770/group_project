from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import (
    IsAdminUser,
    AllowAny,
    IsAuthenticated, 
    IsAuthenticatedOrReadOnly,
)
from .serializers import ProfileSerializer
from ..models import Profile


class ProfileAPIViewSet(ModelViewSet):
    queryset = Profile.objects.all()
    permission_classes = [AllowAny]
    serializer_class = ProfileSerializer

