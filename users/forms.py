from django.forms import (
    EmailField,
    ModelForm,
)
from django.core.files.uploadedfile import SimpleUploadedFile
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile

class UserRegisterForm(UserCreationForm):
    email_address = EmailField
    class Meta:
        model = User
        fields = ['first_name', 'last_name','username', 'email', 'password1', 'password2', ]

class UserUpdateForm(ModelForm):
    """A class which allows a user to autonomously update their information related to the
    Django's default User model. All items listed in field will be available for them to update
    at their leasiure, ADMIN can still update this information plus more mannually"""
    email_address = EmailField
    class Meta:
        model = User
        fields = [ 'email']
        exclude=['first_name','last_name','username']


class ProfileUpdateForm(ModelForm):
    """A class which allows a user to autonomosly update their information related to the
    custom Profile model. All items listed in field will be available for them to update
    at their leasiure, ADMIN can still update this information plus more mannually. """
    class Meta:
        model = Profile
        field = ['image','mailing_street1','mailing_street2','mailing_city', 'mailing_state','practitioner_dba']
        exclude=['user','professional_license_number']


# data = {'subject':'hello', 'message':'Hi there', 'sender':'example@example.com', 'cc_myself': True}
# fil_data = {'mugshot': SimpleUploadedFile('face.jpg', <file data>)}
# f = ContactFormWithMugshot(data, file_data)}
# f = ContactFormWithMugshot(request.POST, request.FILES)

####  <form enctype="multipart/form-data" method="post" action="/foo/">