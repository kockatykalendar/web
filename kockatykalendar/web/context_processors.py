from django.http import HttpRequest

from kockatykalendar import VERSION


def version_context(request: HttpRequest) -> dict[str, str]:  # noqa: ARG001
    return {
        "version": VERSION,
    }
