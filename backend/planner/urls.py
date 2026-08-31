from rest_framework.routers import DefaultRouter

from .views import (
    CategoryViewSet,
    EventViewSet,
    TaskViewSet,
    NoteViewSet,
)

router = DefaultRouter()

router.register("categories", CategoryViewSet, basename="category")
router.register("events", EventViewSet, basename="event")
router.register("tasks", TaskViewSet, basename="task")
router.register("notes", NoteViewSet, basename="note")

urlpatterns = router.urls
