from rest_framework import routers
from .api import ChatbotMessageViewSet

router = routers.DefaultRouter()
router.register('api/chatbot_messages', ChatbotMessageViewSet, 'chatbot_messages')

urlpatterns = router.urls