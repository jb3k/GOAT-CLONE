from .db import db
from datetime import datetime



class Apparel(db.Model):
    __tablename__= "apparels"


    id = db.Column(db.Integer, primary_key= True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    #should this be a string?
    release_date = db.Column(db.DateTime, nullable=False)
    brand = db.Column(db.String, nullable=False)
    style = db.Column(db.String, nullable=False)
    type = db.Column(db.String, nullable=False)
    colorway = db.Column(db.String, nullable=False)
    condition = db.Column(db.String, nullable=False)
    size = db.Column(db.Integer)
    #something i need to add to the listings for new shoes
    retail_price = db.Column(db.Integer, nullable=False)
    price_sold = db.Column(db.Integer, nullable=False)
    #what if there have been none sold yet...
    quantity_sold = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    #relationships
    #one-to-many... each item can have many images, an image cannot have many items
    imgs = db.relationship("Images", back_populates="apparel")
    #one-to-many... apparel can have many listings, but a listing can only be for 1 apparel.
    listing = db.relationship("Listings", back_populates="apparel")
