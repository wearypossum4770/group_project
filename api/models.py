from django.contrib.auth.models import User
from django.db.models import (
    Model,
    OneToOneField,
    DO_NOTHING,
)


class APIUser(Model):
    user = OneToOneField(User, related_name="apiusers", on_delete=DO_NOTHING)
