from PIL import Image
from django.db.models import (
    Model, BooleanField, OneToOneField,
    ManyToManyField, SET, PROTECT,DO_NOTHING,
    CASCADE, ImageField, CharField,
    DateTimeField, TextChoices, ForeignKey,
)
from django.contrib.auth.models import (
    User, AbstractUser,
)

# SIGNAL IMPORTS
from django.db.models.signals import post_save
from django.dispatch import receiver

# def deactivate_user():
#     return get_user_model().objects.get_or_create(is_profile_active =False)

class Profile(Model):
    """Creates a profile for a registered user.
    The user's profile is linked to thier profile using a foreign key,
    with a one-to-one relationship."""
    user = OneToOneField(User, null=True, related_name= 'profiles', on_delete=DO_NOTHING)
    is_apprentice = BooleanField(null=True)
    is_supervisor = BooleanField(null=True)
    is_profile_active = BooleanField(default=True)
    email_validated = BooleanField(default=False)
    mobile_validated = BooleanField(default=False)
    mailing_address_validated = BooleanField(default=False)
    created_at = DateTimeField(auto_now_add=True, null=True)
    mailing_street1 = CharField(max_length=50)
    mailing_street2 = CharField(max_length=50, blank=True, null=True)
    mailing_city = CharField(max_length=50)
    mailing_state = CharField(max_length=50)
    signature = ImageField(default="signature_default.png", upload_to='signatures')
    practitioner_dba = CharField(max_length=50, null=True)
    profile_image = ImageField(default='default.jpg', upload_to='profile_pics')
    has_discipline = BooleanField(default=False)
    establishment_number = CharField(max_length=20, null=True)
    professional_license_number = CharField(max_length=10, null=True)
    
    def __str__(self):
        """Overrides default string representation"""
        return f"{self.user.username}  Profile"

    def save(self):
        """Overrides default image save method to resize image.
        It returns the image to its original place and completely replaces the original file."""
        super().save()
        img_to_resize = Image.open(self.image.path)
        if img_to_resize.height > 300 or img_to_resize.width>300:
            output_size= (300,300)
            img_to_resize.thumbnail(output_size)
            img_to_resize.save(self.image.path)

class Apprentice(Model):
    user=OneToOneField(Profile, related_name="apprentice_profile", on_delete=DO_NOTHING)

class ApprenticeSupervisor(Model):
    user=OneToOneField(Profile, related_name="apprentice_supervisor_profile", on_delete=DO_NOTHING)
    # pre_number = CharField(max_length=20, null=True, default="Not Entered")
    professional_license_number = CharField(max_length=10, null=True)