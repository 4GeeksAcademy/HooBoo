from flask import Flask, request, jsonify, url_for, Blueprint
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, decode_token
from werkzeug.security import generate_password_hash, check_password_hash
from flask_mail import Mail, Message  # Importar Flask-Mail para enviar correos
from datetime import timedelta

from api.models import db, User, Book
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)
CORS(api)

# Configuración de Flask-Mail
mail = Mail()

def configure_mail(app):
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USERNAME'] = 'tucorreo@gmail.com'  # Cambia esto por tu correo
    app.config['MAIL_PASSWORD'] = 'tucontraseña'  # Cambia esto por la contraseña de tu correo
    mail.init_app(app)

# Endpoint para solicitar recuperación de contraseña
@api.route('/reset-password', methods=['POST'])
def reset_password_request():
    data = request.get_json()
    email = data.get('email')

    # Verificar si el email está registrado
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"msg": "No existe un usuario con ese correo"}), 404

    # Generar un token de recuperación
    reset_token = create_access_token(identity={"email": user.email}, expires_delta=timedelta(minutes=15))

    # Construir el enlace de recuperación
    reset_url = url_for('api.reset_password_token', token=reset_token, _external=True)

    # Enviar el correo con el enlace de recuperación
    msg = Message("Restablecer contraseña", sender="tucorreo@gmail.com", recipients=[user.email])
    msg.body = f"Hola, {user.email}. Para restablecer tu contraseña, haz clic en el siguiente enlace: {reset_url}\nEste enlace expirará en 15 minutos."
    mail.send(msg)

    return jsonify({"msg": "Correo de recuperación enviado. Revisa tu bandeja de entrada."}), 200

# Endpoint para cambiar la contraseña usando el token de recuperación
@api.route('/reset-password/<token>', methods=['POST'])
def reset_password_token(token):
    try:
        # Decodificar el token
        decoded_token = decode_token(token)
        email = decoded_token['identity']['email']
    except:
        return jsonify({"msg": "Token inválido o expirado"}), 400

    data = request.get_json()
    new_password = data.get('new_password')

    if not new_password:
        return jsonify({"msg": "Nueva contraseña requerida"}), 400

    # Buscar al usuario y cambiar la contraseña
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    hashed_password = generate_password_hash(new_password)
    user.password = hashed_password

    # Guardar cambios en la base de datos
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
