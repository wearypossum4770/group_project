from django.contrib.contenttypes.models import ContentType
from django.contrib.auth.models import Group
from rest_framework.serializers import (
    Serializer, ListSerializer,
    ModelSerializer, HyperlinkedIdentityField, SerializerMethodField,
    ValidationError, EmailField, CharField,
    DateTimeField, ImageField, PrimaryKeyRelatedField,
)
from .models import APIUser
from blog.models import Post
from users.models import (
    Profile,
    Apprentice, 
    ApprenticeSupervisor,
)

class ApprenticeSerializer(ModelSerializer):
    class Meta:
        model = Apprentice
        fields= "__all__"

class ApprenticeSupervisorSerializer(ModelSerializer):
    class Meta:
        model = ApprenticeSupervisor
        fields="__all__"

class ProfileSerializer (ModelSerializer):
    class Meta:
        model = Profile
        field="__all__"
        
class APIUserSerializer(ModelSerializer):
    class Meta:
        model = APIUser
        fields = '__all__'
