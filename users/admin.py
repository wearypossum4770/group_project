from django.contrib import admin
from .models import (
    Profile,
    Apprentice, 
    ApprenticeSupervisor
)

admin.site.register(Profile)
admin.site.register(Apprentice)
admin.site.register(ApprenticeSupervisor)