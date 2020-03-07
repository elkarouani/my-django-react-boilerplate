from django.urls import path

# from .views import ArticleDetailView, ArticleListView, ArticleCreateView, ArticleUpdateView, ArticleDeleteView
from .views import ArticleViewSet

from rest_framework.routers import DefaultRouter

# urlpatterns = [
#     path('', ArticleListView.as_view()),
#     path('<pk>', ArticleDetailView.as_view()),
#     path('create/', ArticleCreateView.as_view()),
#     path('<pk>/update/', ArticleUpdateView.as_view()),
#     path('<pk>/delete', ArticleDeleteView.as_view())
# ]

router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='article')
urlpatterns = router.urls