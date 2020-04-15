from rest_framework.serializers import (
    ModelSerializer, 
    ListSerializer,
    HyperlinkedIdentityField,
    HyperlinkedRelatedField,
)
from ..models import Profile


class RegistrationListSerializer(ListSerializer):
    # profile_listing = HyperlinkedIdentityField (view_name='profile-listing')
    # user_listing = HyperlinkedRelatedField(view_name='user-listing', read_only=True)
    class Meta:
        model= Profile
        fields = ['mailing_city','mailing_state','practitioner_dba']

class RegistrationCreateSerailizer(ModelSerializer):
    class Meta:
        model= Profile
        fields = [
            'image', 'mailing_street1','mailing_street2',
            'mailing_city','mailing_state','practitioner_dba']

class RegistrationDetailSerializer(ModelSerializer):
    class Meta:
        model=Profile
        fields = [
            'image', 'mailing_street1','mailing_street2',
            'mailing_city','mailing_state','practitioner_dba']

class RegistrationUpdateSerializer(ModelSerializer):
    class Meta:
        model= Profile
        fields = [
            'image', 'mailing_street1','mailing_street2',
            'mailing_city','mailing_state','practitioner_dba']

class RegistrationDeleteSerializer(ModelSerializer):
    class Meta:
        model=Profile
        fields = [
            'image', 'mailing_street1','mailing_street2',
            'mailing_city','mailing_state','practitioner_dba']
