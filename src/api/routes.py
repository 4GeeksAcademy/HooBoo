"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


# @api.route('/user', methods=['POST'])
# def add_user():
#     data=request.get_json()
#     name=data.get('name')
#     email=data.get('email')
#     password=data.get('password')
#     newuser=User(email=email, password=password, name=name)
#     db.session.add(newuser)
#     db.session.commit()
#     return jsonify({'msg': 'Usuario registrado con éxito'}), 200 

# @api.route('/users', methods=['GET'])
# def get_all_user():
#         users = User.query.all()
#         usuarios = [user.serialize() for user in users]    

#         return jsonify(usuarios), 200
