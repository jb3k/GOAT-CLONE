from .db import db
from datetime import datetime



class Purchase(db.Model):
    __tablename__= "purchases"


    id = db.Column(db.Integer, primary_key= True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    listing_id = db.Column(db.Integer, db.ForeignKey("listings.id"))
    address = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    country = db.Column(db.String, nullable=False)
    zipcode = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    #relationships
    #one-to-many... user can have many listings, a listing can only have 1 user. 
    user = db.relationship("User", back_populates="purchased")
    #one-to-many... user can only purchase many listings, but a listing can only have 1 purchaser (like user) 
    listing = db.relationship("Listing", back_populates="purchased")


    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "listingId": self.listing_id,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "country": self.country,
            "zipcode": self.zipcode,
            "createdAt": self.created_at,
            'listingInfo': self.listing.to_dict(),
            "listingImg":self.listing.apparel.image_url,
            "apparelName": self.listing.apparel.name,
            "apparelColorway": self.listing.apparel.colorway,
            "listingSize": self.listing.size,
            "listingPrice": self.listing.price,
            "apparelId": self.listing.apparel.id,
            "apparelRetail": self.listing.apparel.retail_price,

        }


    def to_dict_update(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "listingId": self.listing_id,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "country": self.country,
            "zipcode": self.zipcode,
        }
