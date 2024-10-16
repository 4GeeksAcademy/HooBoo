import os
from flask import request, jsonify, Blueprint
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
from flask_mail import Message
from api.models import db, User, Book, Rating


api = Blueprint('api', __name__)
# CORS(api, resources={r"/api/*": {"origins": "https://scaling-adventure-9769qq4xgrp92xrww-3000.app.github.dev"}})
CORS(api, resources={r"/api/*": {"origins": "*"}})

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@api.route('/reset-password', methods=['POST'])
def reset_password_request():
    from app import mail
    data = request.get_json()
    email = data.get('email')

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"msg": "No existe un usuario con ese correo"}), 404

    reset_url = f"https://probable-capybara-4jq7gg9rpxqrhv56-3000.app.github.dev/reset-password/{user.id}"
    
    msg = Message(subject="Restablecer contraseña", sender="hooboo4geeks@gmail.com", recipients=[user.email])
    msg.body = f"Hola, {user.email}. Para restablecer tu contraseña, haz clic en el siguiente enlace:{reset_url}\nEste enlace expirará en 15 minutos."
    mail.send(msg)

    return jsonify({"msg": "Correo de recuperación enviado. Revisa tu bandeja de entrada."}), 200

@api.route('/reset-password/<int:user_id>', methods=['POST'])
def reset_password_user_id(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    data = request.get_json()
    new_password = data.get('new_password')

    if not new_password:
        return jsonify({"msg": "Nueva contraseña requerida"}), 400

    hashed_password = generate_password_hash(new_password)
    user.password = hashed_password

    try:
        db.session.commit()
        return jsonify({"msg": "Contraseña actualizada con éxito"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"msg": "Error al actualizar la contraseña", "error": str(e)}), 500

@api.route('/Registro', methods=['POST'])
def Registro():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    username = data.get('username')

    if not email or not password or not username:
        return jsonify({"msg": "Email, nombre de usuario y contraseña son requeridos"}), 400

    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"msg": "El usuario ya está registrado"}), 400
    
    user_by_username = User.query.filter_by(username=username).first()
    if user_by_username:
        return jsonify({"msg": "El nombre de usuario ya está en uso"}), 400

    hashed_password = generate_password_hash(password)

    try:
        new_user = User(email=email, password=hashed_password, username=username, is_active=True)
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

    # Si el email no existe en la base de datos
    if not user:
        return jsonify({"msg": "Usuario no registrado"}), 404

    # Si la contraseña es incorrecta
    if not check_password_hash(user.password, password):
        return jsonify({"msg": "Email o contraseña incorrecta"}), 401

    access_token = create_access_token(identity={"email": user.email})
    return jsonify({"access_token": access_token}), 200

@api.route('/Home', methods=['GET'])
@jwt_required()
def Home():
    current_user = get_jwt_identity()
    return jsonify({"msg": f"Bienvenido {current_user['email']}, estás en una página privada"}), 200

@api.route('/perfil', methods=['GET'])
@jwt_required()
def get_user_profile():
    current_user_identity = get_jwt_identity()
    user = User.query.filter_by(email=current_user_identity["email"]).first()

    if user:
        user_data = {
            "username": user.username,
            "email": user.email,
            "profile_pic": user.profile_pic  # Asegúrate de que este campo sea el que almacena la URL del avatar
        }
        return jsonify(user_data), 200
    else:
        return jsonify({"msg": "Usuario no encontrado"}), 404

@api.route('/perfil', methods=['PUT'])
@jwt_required()
def update_user_profile():
    current_user_identity = get_jwt_identity()
    user = User.query.filter_by(email=current_user_identity["email"]).first()

    if not user:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    # Actualizar los datos de texto del formulario
    user.username = request.form.get('username', user.username)
    user.email = request.form.get('email', user.email)
    user.profile_pic = request.form.get('profile_pic', user.profile_pic)

    if 'password' in request.form and request.form['password']:
        hashed_password = generate_password_hash(request.form['password'])
        user.password = hashed_password

    try:
        db.session.commit()
        return jsonify({"msg": "Perfil actualizado con éxito"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"msg": "Error al actualizar el perfil", "error": str(e)}), 500

@api.route('/books', methods=['GET'])
def get_books():
    try:
        books = Book.query.all()
        print(books)
        books_list = [book.serialize() for book in books]
        return jsonify(books_list), 200
    except Exception as e:
        return jsonify({"msg": "Error al obtener los libros", "error": str(e)}), 500

@api.route('/ratings', methods=['POST'])
@jwt_required()
def submit_rating():
    current_user = get_jwt_identity()
    user_email = current_user['email']
    user = User.query.filter_by(email=user_email).first()
    if not user:
        return jsonify({"error": "User not found"}), 404

    user_id = user.id
    data = request.get_json()
    rating_value = data.get('rating')

    if rating_value not in [1, 2, 3, 4, 5]:
        return jsonify({"error": "Rating must be between 1 and 5"}), 400

    existing_rating = Rating.query.filter_by(user_id=user_id).first()
    if existing_rating: 
        existing_rating.rating = rating_value 
        existing_rating.email = user_email
    else: 
        new_rating = Rating(user_id=user_id, rating=rating_value, email=user_email) 
        db.session.add(new_rating)

    try:
        db.session.commit() 
    except Exception as e:
        db.session.rollback()
        return jsonify({"msg": "Error saving rating", "error": str(e)}), 500

    all_ratings = Rating.query.all()
    serialized_ratings = [rating.serialize() for rating in all_ratings]

    return jsonify(serialized_ratings), 200