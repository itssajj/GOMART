#!/usr/bin/env python
import os
import sys

def main():
    # Activate the virtual environment (replace '/path/to/your/venv' with your actual virtual environment path)
    activate_script = '/path/to/your/venv/bin/activate'
    if os.path.exists(activate_script):
        os.system(f"source {activate_script}")

    # Set the DJANGO_SETTINGS_MODULE
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'gomartnow.settings')

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc

    # Run the Django management command (replace '<your_command_here>' with your desired command)
    execute_from_command_line(['manage.py', '<your_command_here>'])

if __name__ == '__main__':
    main()
