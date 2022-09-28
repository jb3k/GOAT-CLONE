from .db import db
from datetime import datetime



class Listings(db.Model):
    __tablename__= "listings"


    id = db.Column(db.Integer, primary_key= True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    apparel_id = db.Column(db.Integer, db.ForeignKey("apparel.id"))
    size = db.Column(db.Integer)
    price = db.Column(db.Integer)
    quantity = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    #relationships
    #one-to-many... user can have many listings, a listing can only have 1 user. 
    user = db.relationship("User", back_populates="listings")
    #one-to-many... listings 
    apparel = db.relationship("Apparel", back_populates="apparel")
