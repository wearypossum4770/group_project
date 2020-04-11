from django.db.models import (
    Model,
    CharField,
    TextField,
    DateTimeField,
    ForeignKey,
    CASCADE,
)
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth.models import User
# Create your models here.


class Post(Model):
    title = CharField(max_length=50)
    content = TextField()
    date_posted = DateTimeField(default=timezone.now)
    author = ForeignKey(User, on_delete=CASCADE)

    def __str__(self):
        return f"Title: {self.title}"

    def get_absolute_url(self):
        return reverse('post-detail', kwargs={'pk': self.pk})
