from rest_framework.routers import DefaultRouter
from .api import ProfileAPIViewSet

router = DefaultRouter()
router.register('api-user', ProfileAPIViewSet, 'profile')

urlpatterns = router.urls