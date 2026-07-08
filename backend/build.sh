#!/usr/bin/env bash
# exit on error
set -o errexit

# install python dependencies
pip install -r requirements.txt

# run database migrations
python manage.py migrate

# collect static files
python manage.py collectstatic --noinput
