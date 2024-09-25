from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    
    favorites = db.relationship('Favorites', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
        }
    
class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    synopsis = db.Column(db.Text, nullable=False)
    publication_date = db.Column(db.Date, nullable=False)

    favorites = db.relationship('Favorites', backref='book', lazy=True)

    types_books_id = db.Column(db.Integer, db.ForeignKey('types_books.id'), nullable=False)
    saga_id = db.Column(db.Integer, db.ForeignKey('saga.id'), nullable=True)
    universe_id = db.Column(db.Integer, db.ForeignKey('universe.id'), nullable=False)
    
    authors = db.relationship('Author', secondary='book_author', lazy='subquery', backref=db.backref('books', lazy=True))
    spin_offs = db.relationship('SpinOff', foreign_keys='SpinOff.original_book_id', backref='origin_book', lazy=True)

    def __repr__(self):
        return f'<Book {self.title}>'
    
    def serialize(self):
        return{
            "id": self.id,
            "title": self.title,
            "synopsis": self.synopsis,
            "publication_date": self.publication_date,
            "types_books_id": self.types_books_id,
            "saga_id": self.saga_id,
            "universe_id":self.universe_id, 
        }
    
    
class UserBook(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey('book.id'), nullable=False)

    def __repr__(self):
        return f'<UserBook {self.id}>'
    
    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.id,
            "book_id": self.id
        }


class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey('book.id'), nullable=False)
    
    def __repr__(self):
        return f'<Favorites {self.id}>'
    def serialize(self):
        return{
            "id": self.id,
            "book_id": self.book_id,
            "user_id":self.user_id
        }

class UserFavorites(db.Model):
    id =  id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    favorites_id = db.Column(db.Integer, db.ForeignKey('favorites.id'), nullable=False)

    def __repr__(self):
        return f'<UserFavorites {self.id}>'
    
    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.id,
            "favorites_id": self.id
        }


class TypesBooks(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, primary_key=True)
    
    books = db.relationship('Book', backref='types_books', lazy=True)

    def __repr__(self):
        return f'<TypesBooks {self.id}>'
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name
        }


class SpinOff(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    original_book_id = db.Column(db.Integer, db.ForeignKey('book.id'), nullable=False)
    spin_off_book_id = db.Column(db.Integer, db.ForeignKey('book.id'), nullable=False, unique=True)

    original_book = db.relationship('Book', foreign_keys=[original_book_id], backref=db.backref('spin_offs_from', lazy=True))
    spin_off_book = db.relationship('Book', foreign_keys=[spin_off_book_id], backref=db.backref('spin_off_books', lazy=True))

    def __repr__(self):
        return f'<SpinOff {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "original_book_id": self.original_book_id,
            "spin_off_book_id": self.spin_off_book_id
        }

class Saga(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(180), nullable=False)

    books = db.relationship('Book', backref='saga', lazy=True)

    def __repr__(self):
        return f'<Saga {self.name}>'
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "description": self.description
        }
    
class Author(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<Author {self.name}>'
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
        }

class Universe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(180), nullable=False)

    books = db.relationship('Book', backref='universe', lazy=True)

    def __repr__(self):
        return f'<Universe {self.name}>'
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "description": self.description
        }

class BookAuthor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey('book.id'), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('author.id'), nullable=False)

    def __repr__(self):
        return f'<BookAuthor {self.id}>'
    
    def serialize(self):
        return{
            "id": self.id,
            "book_id": self.id,
            "author_id": self.id
        }
