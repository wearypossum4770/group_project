from django.db.models import (
    Model,
    ForeignKey,
    CharField,
    DateField,
    ImageField,
    PROTECT,
)
from django.contrib.auth.models import User


STATE_CHOICES = [
    ('AL', 'Alabama'), ('AK', 'Alaska'), ('APO', 'Army/Air Force Post Office'),
    ('AS', 'America Samoa'), ('AZ', 'Arizona'), ('AR', 'Arkansas'),
    ('CA', 'California'), ('CO', 'Colorado'), ('CT', 'Connecticut'),
    ('DE', 'Delaware'), ('DPO', 'Diplomatic Post Office'), ('FPO', 'Fleet Post Office'),
    ('FL', 'Florida'), ('GA', 'Georgia'), ('GU', 'Guam'),
    ('HI', 'Hawaii'), ('ID', 'Idaho'), ('IL', 'Illinois'),
    ('IN', 'Indiana'), ('IA', 'Iowa'), ('KS', 'Kansas'),
    ('KY', 'Kentucky'), ('LA', 'Louisiana'), ('ME', 'Maine'),
    ('MD', 'Maryland'), ('MA', 'Massachusetts'), ('MI', 'Michigan'),
    ('MN', 'Minnesota'), ('MS', 'Mississippi'), ('MO', 'Missouri'),
    ('MT', 'Montana'), ('NE', 'Nebraska'), ('NV', 'Nevada'),
    ('NH', 'New Hampshire'), ('NJ', 'New Jersey'), ('NM', 'New Mexico'),
    ('NY', 'New York'), ('NC', 'North Carolina'), ('ND', 'North Dakota'),
    ('MP', 'Northern Mariana Island'), ('OH', 'Ohio'), ('OK', 'Oklahoma'),
    ('OR', 'Oregon'), ('PA', 'Pennsylvania'), ('PR', 'Puerto Rico'),
    ('RI', 'Rhode Island'), ('SC', 'South Carolina'), ('SD', 'South Dakota'),
    ('TN', 'Tennessee'), ('TX', 'Texas'), ('UT', 'Utah'),
    ('VT', 'Vermont'), ('VI', 'U.S. Virgin Islands'), ('VA', 'Virginia'),
    ('WA', 'Washington'), ('WV', 'West Virginia'), ('WI', 'Wisconsin'),
    ('WY', 'Wyoming'),
]


class Account(Model):
    owner = ForeignKey(User, related_name='accounts', on_delete=PROTECT)
    first_name = CharField(max_length=50)
    middle_name = CharField(max_length=50, blank=True)
    last_name = CharField(max_length=50)
    mailing_street1 = CharField(max_length=50)
    mailing_street2 = CharField(max_length=50, blank=True)
    mailing_city = CharField(max_length=50)
    mailing_state = CharField(
        max_length=2,  choices=STATE_CHOICES, default="MO")
    mailing_zipcode = CharField(max_length=10)
    profile_picture = ImageField(upload_to ='profile_pics', blank=True)
