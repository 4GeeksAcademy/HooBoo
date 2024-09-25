  
import os
from flask_admin import Admin
from .models import db, User, Favorites, Book, Saga, Universe, Author, BookAuthor, SpinOff
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Favorites, db.session))
    admin.add_view(ModelView(Book, db.session))
    admin.add_view(ModelView(Saga, db.session))
    admin.add_view(ModelView(Universe, db.session))
    admin.add_view(ModelView(Author, db.session))
    admin.add_view(ModelView(BookAuthor, db.session))
    admin.add_view(ModelView(SpinOff, db.session))
    

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))