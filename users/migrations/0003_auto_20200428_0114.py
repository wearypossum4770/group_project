# Generated by Django 3.0.5 on 2020-04-28 01:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('users', '0002_auto_20200428_0057'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apprentice',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, related_name='apprentice_profile', to='users.Profile'),
        ),
        migrations.AlterField(
            model_name='apprenticesupervisor',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, related_name='apprentice_supervisor_profile', to='users.Profile'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='user',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='profiles', to=settings.AUTH_USER_MODEL),
        ),
    ]
