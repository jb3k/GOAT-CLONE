from app.models import db, Apparel


# Adds a demo user, you can add other users here if you want
def seed_apparel():

    apparels = [
        {
            "name": "Jordan 3 Retro Black Cement",
            "description": "Any year that an Air Jordan 3 releases is a good year for sneakerheads and the Air Jordan 3 'Black Cement' ensured 2011 was a good one for many collectors. You can’t talk about the Jordan 3 without talking about its legendary designer, Tinker Hatfield. Tinker’s superhero status amongst sneaker enthusiasts comes directly from groundbreaking designs like the Air Jordan 3.",
            "colorway": "Black / Cement",
            "release_date": "2011",
            "brand": "Jordan",
            "style": "mid",
            "brand_type": "3",
            "condition": "New",
            "retail_price": 160,
            "price_sold": 800,
            "quantity_sold": 1,
            "image_url": "https://cdn.flightclub.com/500/TEMPLATE/803111/1.jpg"

        }, 
        {
            "name": "Air Jordan 1 Retro High OG",
            "description": "The Air Jordan 1 High Bred Patent features black and red patent leather upper with signature weaved Nike Air tongue labels. From there, a classic Wings logo on the collar and a white with red Air sole complete the retro design.",
            "colorway": "Black / Red",
            "release_date": "2021",
            "brand": "Jordan",
            "style": "high",
            "brand_type": "1",
            "condition": "New",
            "retail_price": 170,
            "price_sold": 1000,
            "quantity_sold": 1,
            "image_url": "https://myawsshoepictures.s3.us-west-1.amazonaws.com/40f2d0c493c441c7acacbe0f99b8dd09.png"

        }, 
        {
            "name": "Nike Dunk Low Retro, Panda",
            "description": "From the school-spirited College Colors Program to the vibrant Nike CO.JP collection, Nike Dunks have seen many colorways since the design’s inception in 1985. But with each new colorway, the Dunk’s classic color-blocking has remained in some capacity. Nike put its timeless color-blocking to work with the Nike Dunk Low Retro White Black.",
            "colorway": "White Black Panda",
            "release_date": "2021",
            "brand": "Nike",
            "style": "low",
            "brand_type": "Dunk",
            "condition": "New",
            "retail_price": 110,
            "price_sold": 300,
            "quantity_sold": 1,
            "image_url": "https://myawsshoepictures.s3.us-west-1.amazonaws.com/40f2d0c493c441c7acacbe0f99b8dd09.png"

        }, 
    ]


    for item in apparels:
        new_apparel = Apparel(
            name = item["name"],
            description = item["description"],
            colorway = item["colorway"],
            release_date = item["release_date"],
            brand = item["brand"],
            style = item["style"],
            brand_type = item["brand_type"],
            condition = item["condition"],
            retail_price = item["retail_price"],
            price_sold = item["price_sold"],
            quantity_sold = item["quantity_sold"],
            image_url = item["image_url"]
        )

        db.session.add(new_apparel)
    
    db.session.commit()
    print('Apparel was succesfully seeded')


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_apparel():
    db.session.execute('DELETE FROM apparels;')
    db.session.commit()
