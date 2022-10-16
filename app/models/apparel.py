from .db import db
from datetime import datetime



class Apparel(db.Model):
    __tablename__= "apparels"


    id = db.Column(db.Integer, primary_key= True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    release_date = db.Column(db.String, nullable=False)
    brand = db.Column(db.String, nullable=False)
    style = db.Column(db.String, nullable=False)
    brand_type = db.Column(db.String, nullable=False)
    colorway = db.Column(db.String, nullable=False)
    condition = db.Column(db.String, nullable=False)
    retail_price = db.Column(db.Integer, nullable=False)
    image_url = db.Column(db.String, nullable= False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now)
    #what if there have been none sold yet...
    # price_sold = db.Column(db.Integer, nullable=False)
    # quantity_sold = db.Column(db.Integer)

    # relationships
    #one-to-many... each item can have many images, an image cannot have many items
    # imgs = db.relationship("Image", back_populates="apparel", cascade="all, delete")
    #one-to-many... apparel can have many listings, but a listing can only be for 1 apparel.
    listing = db.relationship("Listing", back_populates="apparel")


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'releaseDate': self.release_date,
            'brand': self.brand,
            'style': self.style,
            'brandType': self.brand_type,
            'colorway': self.colorway,
            'condition': self.condition,
            'retailPrice': self.retail_price,
            # 'priceSold': self.price_sold,
            # 'quantitySold': self.quantity_sold,
            'imageUrl': self.image_url,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
            "imageUrl": self.image_url,
            # "images": [img.to_dict() for img in self.imgs],
            "listings": [listings.to_dict() for listings in self.listing]
        }

    