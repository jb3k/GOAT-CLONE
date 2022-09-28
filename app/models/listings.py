from .db import db
from datetime import datetime



class Listings(db.Model):
    __tablename__= "listings"


    id = db.Column(db.Integer, primary_key= True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    apparel_id = db.Column(db.Integer, db.ForeignKey("apparels.id"))
    size = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    #relationships
    #one-to-many... user can have many listings, a listing can only have 1 user. 
    user = db.relationship("User", back_populates="listing")
    #one-to-many... apparel can have many listings, but a listing can only be for 1 apparel.
    apparel = db.relationship("Apparel", back_populates="listing")
    #one-to-many... user can only purchase many listings, but a listing can only have 1 purchaser (like user) 
    purchased = db.relationship("Purchases", back_populates="listing")
