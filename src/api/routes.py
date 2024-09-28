from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Book
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)
CORS(api)

@api.route('/Registro', methods=['POST'])
def Registro():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"msg": "Email y contraseña son requeridos"}), 400

    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"msg": "El usuario ya está registrado"}), 400

    hashed_password = generate_password_hash(password)
    try:
        new_user = User(email=email, password=hashed_password, is_active=True)
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"msg": "Ocurrió un error al registrar el usuario", "error": str(e)}), 500

    return jsonify({"msg": "Usuario registrado con éxito"}), 200

@api.route('/Login', methods=['POST'])
def Login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()

    if not user or not check_password_hash(user.password, password):
        return jsonify({"msg": "Email o contraseña incorrecta"}), 401

    access_token = create_access_token(identity={"email": user.email})
    return jsonify({"access_token": access_token}), 200

@api.route('/Home', methods=['GET'])
@jwt_required()
def Home():
    current_user = get_jwt_identity()
    return jsonify({"msg": f"Bienvenido {current_user['email']}, estás en una página privada"}), 200

@api.route('/books', methods=['GET'])
def get_books():
    try:
        books = Book.query.all()
        print(books)
        books_list = [book.serialize() for book in books]
        return jsonify(books_list), 200
    except Exception as e:
        return jsonify({"msg": "Error al obtener los libros", "error": str(e)}), 500
