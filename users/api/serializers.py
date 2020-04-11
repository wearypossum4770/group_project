from rest_framework.serializers import ModelSerializer
from users.models import Profile


class RegistrationSerializer(ModelSerializer):
    class Meta:
        model= Profile
        fields = ['image', 'mailing_street1','mailing_street2','mailing_city','mailing_state','practitioner_dba']
        exclude=['id','user']

