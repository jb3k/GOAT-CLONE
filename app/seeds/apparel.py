from app.models import db, Apparel


# Adds a demo user, you can add other users here if you want
def seed_apparel():

    apparel = [
        {
            "name": "Jordan 3 Black Cement",
            "description": "No hyperbole, it was the shoe that saved Nike. Designed by a former Nike architect named Tinker Hatfield, the Air Jordan III kept Michael Jordan with Nike when much of his original team had left, and turned an entire industry upside-down. Hatfield had the strange idea of incorporating an athlete's personality into his shoes — making a signature shoe more than just a shoe with a signature on it — an idea that would change forever the relationship between athlete and brand. Even today, the black/cement III retains the perfect balance between tech and style, performance and appearance. The best there ever was, the best there ever will be.",
            "brand": ["Black", "Cement"],
            "release_date": 1988,
            "brand": "Jordan",
            "style": "mid",
            "type": "3",
            "condition": "New",
            "retail_price": 200,
            "price_sold": 800,
            "quantity_sold": 1,
            "size": 10

        }, 


    ]


    for item in apparel:
        new_apparel = Apparel(
            name = listing["name"],
            description = listing["description"],
            colorway = listing["colorway"],
            release_date = listing["release_date"],
            brand = listing["brand"],
            style = listing["style"],
            type = listing["type"],
            condition = listing["condition"],
            retail_price = listing["retail_price"],
            price_sold = listing["price_sold"],
            quantity_sold = listing["quantity_sold"],
            size = listing["size"]
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
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
