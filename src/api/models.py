from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
        }

class Book(db.Model):
    __tablename__="book"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    typebook = db.Column(db.String(120), unique=True, nullable=False)
    picture_url = db.Column(db.String(120), unique=True, nullable=False)
    synopsis = db.Column(db.String(120), unique=True, nullable=False)
    author = db.Column(db.String(120), unique=True, nullable=False)
    # isbn = db.Column(db.String(120), unique=True, nullable=False)
    
    def _repr_(self):
        return f'<Book {self.title}>'
    
    def serialize(self):
        return{
            "id": self.id,
            "title": self.title,
            "typebook": self.typebook,
            "picture_url":self.picture_url,
            "synopsis":self.synopsis,
            "author":self.author,
            # "isbn":self.isbn
        }