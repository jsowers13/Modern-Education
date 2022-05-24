"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager



api = Blueprint('api', __name__)




@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()
    print(email, password)
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route('/user/active', methods=['POST'])
def get_active_user():
    body = request.get_json()
    print("//////////////////////////////", body)
    single_user = User.query.filter_by(email = body["email"]).first()
    print(single_user)

    return jsonify(single_user.serialize()), 200

@api.route('/private', methods=['POST'])
def private():
    secret_key = "aoiwdfnoainfasni"
    authentication = request.headers.get("authentication")

    if authentication == "":
        return jsonify("You are not logged in")
    elif authentication == secret_key:
        return jsonify("You are logged in")

@api.route('/user', methods=['POST'])
def create_user():
    body = request.get_json()
    email = body["email"]
    password = body["password"]
    user = User(email=email, password=password)

    db.session.add(user)
    db.session.commit()

    return(jsonify(user.serialize)), 201

@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    all_users = list(map(lambda user: user.serialize(), users))
    
    return jsonify(all_users), 200
    