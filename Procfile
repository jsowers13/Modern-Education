release: pipenv run upgrade
web: gunicorn wsgi --chdir ./src/
release: flask db upgrade
release: flask db stamp head

web: gunicorn app:app
