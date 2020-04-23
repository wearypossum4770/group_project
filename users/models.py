from PIL import Image
from django.db.models import (
    Model,
    OneToOneField,
    CASCADE,
    ImageField,
    CharField,
    #TextChoices,
    ForeignKey,

)
from django.contrib.auth.models import User
#from rest_framework_api_key.models import AbstractAPIKey
#from rest_framework_api_key.crypto import KeyGenerator
#from rest_framework_role_filters.role_filters import RoleFilter
# SIGNAL IMPORTS
from django.db.models.signals import post_save
from django.dispatch import receiver


class Profile(Model):
    """Creates a profile for a registered user.
    The user's profile is linked to thier profile using a foreign key,
    with a one-to-one relationship."""
    user = OneToOneField(User, on_delete=CASCADE)
    image = ImageField(default='default.jpg', upload_to='profile')
    mailing_street1 = CharField(max_length=50)
    mailing_street2 = CharField(max_length=50, blank=True, null=True)
    mailing_city = CharField(max_length=50)
    mailing_state = CharField(max_length=50)
    professional_license_number = CharField(max_length=10, null=True)
    practitioner_dba = CharField(max_length=50, null=True)
    # class ProfileOccupation(TextChoices):
    #     pass
    # occupation = CharField(max_length=50)

    def __str__(self):
        """Overrides default string representation"""
        return self.user.username+" Profile"
    
    def save(self):
        """Overrides default image save method to resize image.
        It returns the image to its original place and completely replaces the original file."""
        super().save()
        img_to_resize = Image.open(self.image.path)
        if img_to_resize.height > 300 or img_to_resize.width>300:
            output_size= (300,300)
            img_to_resize.thumbnail(output_size)
            img_to_resize.save(self.image.path)

# class OrganizationAPIKeyManager(BaseAPIKeyManager):
#     key_generator = KeyGenerator(prefix_length=8, secret_key_length=32)

# class ProfileAPIKey(AbstractAPIKey):
#     profile = ForeignKey(Profile, on_delete = CASCADE, related_name='api_keys')
