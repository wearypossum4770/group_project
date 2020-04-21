from django.contrib.contenttypes.models import ContentType
from django.contrib.auth import get_user_model 
from rest_framework.serializers import (
    ModelSerializer,
    HyperlinkedIdentityField,
    SerializerMethodField,
    ValidationError,
)
from ..models import Profile
User = get_user_model()



class UserCreateSerializer(ModelSerializer):
    class Meta:
        model=User
        fields = '__all__'
class ProfileSerializer(ModelSerializer):
    class Meta:
        model=Profile
        fields = ['image','mailing_street1','mailing_street2',
        'mailing_city','mailing_state','professional_license_number',
        'practitioner_dba']
