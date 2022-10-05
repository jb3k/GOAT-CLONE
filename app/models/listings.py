from .db import db
from datetime import datetime



class Listing(db.Model):
    __tablename__= "listings"


    id = db.Column(db.Integer, primary_key= True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    apparel_id = db.Column(db.Integer, db.ForeignKey("apparels.id"))
    size = db.Column(db.Integer)
    price = db.Column(db.Integer)
    quantity = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow)

    #relationships
    #one-to-many... user can have many listings, a listing can only have 1 user. 
    user = db.relationship("User", back_populates="listing")
    #one-to-many... listings 
    apparel = db.relationship("Apparel", back_populates="listing")
    #one-to-many... purchases
    purchased = db.relationship("Purchase", back_populates="listing")


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'apparelId': self.apparel_id,
            "size": self.size,
            "price": self.price,
            'quantity': self.quantity,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
            "apparelImg": self.apparel.image_url,
            "apparelName": self.apparel.name,
            "apparelColorway": self.apparel.colorway,
            "apparelBrand": self.apparel.brand
            # "apparelInfo": self.convert_apparel_to_dict(),
            # "sortedSizes": self.to_dict_sort()
        }
    
    def convert_apparel_to_dict(self):
        return {
            "imageUrl": self.apparel.image_url,
            "name": self.apparel.name,
            "colorway": self.apparel.colorway,

        }


    # def to_dict_sort(self):
    #     "sizes": [ {"list": []} for item in self.sizes]
