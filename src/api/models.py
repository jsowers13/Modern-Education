from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

favorites = db.Table('favorites',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('school_id', db.Integer, db.ForeignKey('school.school_id'), primary_key=True)
)
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    favorites = db.relationship('School', secondary=favorites, lazy='subquery', backref=db.backref('users'))

    
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "favorites": [f.serialize() for f in self.favorites]
            # do not serialize the password, its a security breach
        }

class School(db.Model):
    school_id = db.Column(db.Integer, primary_key=True)
    logo = db.Column(db.String(500), unique=True, nullable=False)
    name= db.Column(db.String(120), unique=True, nullable=False)
    description= db.Column(db.String(2000), unique=False, nullable=True)
    website = db.Column(db.String(120), unique=False, nullable=False)
    phone_number = db.Column(db.String(120), unique=False, nullable=True)
    school_email = db.Column(db.String(120), unique=False, nullable=True)
    mailing_address = db.Column(db.String(120), unique=False, nullable=True)
    career_options = db.Column(db.String(120), unique=False, nullable=True)
    housing_available = db.Column(db.Boolean(120), unique=False, nullable=True)
    job_placement_available = db.Column(db.Boolean(120), unique=False, nullable=True)
    job_placement_guarantee = db.Column(db.Boolean(120), unique=False, nullable=True)
    accept_GI_Bill = db.Column(db.Boolean(120), unique=False, nullable=True)
    length_in_weeks = db.Column(db.Integer, unique=False, nullable=False)
    tuition = db.Column(db.Integer, unique=False, nullable=False)
    minimum_skill_level= db.Column(db.String, unique=False, nullable=True)
    scholarships_available = db.Column(db.Boolean, unique=False, nullable=True)

    def serialize(self):
        return {
            "school_id": self.school_id,
            "logo": self.logo,
            "name": self.name,
            "description": self.description,
            "website": self.website,
            "phone_number": self.phone_number,
            "school_email": self.school_email,
            "mailing_address": self.mailing_address,
            "career_options": self.career_options,
            "housing_available": self.housing_available,
            "job_placement_available": self.job_placement_available,
            "job_placement_guarantee": self.job_placement_guarantee,
            "accept_GI_Bill": self.accept_GI_Bill,
            "length_in_weeks": self.length_in_weeks,
            "tuition": self.tuition,
            "minimum_skill_level": self.minimum_skill_level,
            "scholarships_available": self.scholarships_available
        }
