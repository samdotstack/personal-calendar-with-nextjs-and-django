from django.conf import settings
from django.db import models


def user_field(related_name):
    return models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name=related_name,
    )


class Category(models.Model):
    user = user_field("categories")
    name = models.CharField(max_length=100)
    color = models.CharField(max_length=7)

    def __str__(self):
        return self.name


class Event(models.Model):
    user = user_field("events")
    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="events",
    )
    title = models.CharField(max_length=200)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title


class Task(models.Model):
    user = user_field("tasks")
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Note(models.Model):
    user = user_field("notes")
    title = models.CharField(max_length=200)
    content = models.TextField(blank=True)

    def __str__(self):
        return self.title
