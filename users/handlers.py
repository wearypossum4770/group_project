from corsheaders.signals import check_request_enabled
from users.models import Profile

def cors_allow_mysites(sender, request, **kwargs):
    return Profile.objects.filter(host=request.hosts).exists()
check_request_enabled.connect(cors_allow_mysites)


def cors_allow_api_to_everyone(sender, request, **kwargs):
    return request.path.startswith('/api/')
check_request_enabled.connect(cors_allow_api_to_everyone)