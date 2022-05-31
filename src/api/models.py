from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
class School(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    school = db.Column(db.String(120), unique=True, nullable=False)
    state = db.Column(db.String(120), unique=False, nullable=False)
    tuition = db.Column(db.String(120), unique=False, nullable=False)
    time_to_complete = db.Column(db.String(120), unique=False, nullable=False)
    student_body = db.Column(db.String(120), unique=False, nullable=True)
    type_of_certificate = db.Column(db.String(120), unique=False, nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "school": self.school,
            "state": self.state,
            "tuition": self.tuition,
            "time_to_complete": self.time_to_complete,
            "student_body": self.student_body,
            "type_of_certificate": self.type_of_certificate
        }