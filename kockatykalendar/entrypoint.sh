#!/bin/bash

env="${1:-prod}"

if [ "$env" = "worker" ]; then
  exec python manage.py rqworker default
elif [ "$env" = "dev" ]; then
  python manage.py wait_for_database
fi

python manage.py migrate

if [ "$env" = "dev" ]; then
  exec python manage.py runserver 0.0.0.0:8000
else
  python manage.py collectstatic --no-input
  exec uvicorn --workers 1 --host 0.0.0.0 --port 8000 kockatykalendar.asgi:application
fi
