from .db import db
from datetime import datetime

user_listing = Table(
    "user_listing",
    db.Model.metdata,
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('listing_id', db.Integer, db.ForeignKey('listings.id'), primary_key=True)

)



class Listings(db.Model):
    __tablename__= "listings"


    id = db.Column(db.Integer, primary_key= True)
    # user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    apparel_id = db.Column(db.Integer, db.ForeignKey("apparel.id"))
    size = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)
    #need retail price for new listings
    retail_price = db.Column(db.Integer, nullable=False)

    #relationships
    #one-to-many... user can have many listings, a listing can only have 1 user. 
    user = db.relationship("User", secondary=user_listing, back_populates="listing")
    #one-to-many... listing 
    apparel = db.relationship("Apparel", back_populates="listing")

    purchased = db.relationship("Purchases", back_populates="listing")
