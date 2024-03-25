FROM python:3.12-slim-bookworm
WORKDIR /app
RUN useradd --create-home appuser

ENV PYTHONUNBUFFERED 1
ENV PYTHONFAULTHANDLER 1
ENV POETRY_VIRTUALENVS_CREATE 0

RUN export DEBIAN_FRONTEND=noninteractive \
    && apt update \
    && apt -y upgrade \
    && apt -y install curl \
    && apt -y clean \
    && rm -rf /var/lib/apt/lists/*

ENV POETRY_HOME=/tmp/poetry
RUN curl -sSL https://install.python-poetry.org | python3 -
ENV PATH=$POETRY_HOME/bin:$PATH
RUN python -m venv /venv

COPY pyproject.toml poetry.lock ./
RUN poetry install --no-root --no-interaction
RUN chown appuser:appuser /app/

USER appuser

COPY --chown=appuser:appuser ./kockatykalendar /app/
CMD ["/app/entrypoint.sh"]
