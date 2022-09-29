from app.models import db, Apparel


# Adds a demo user, you can add other users here if you want
def seed_apparel():

    apparels = [
        {
            "name": "Jordan 3 Black Cement",
            "description": "No hyperbole, it was the shoe that saved Nike. Designed by a former Nike architect named Tinker Hatfield, the Air Jordan III kept Michael Jordan with Nike when much of his original team had left, and turned an entire industry upside-down. Hatfield had the strange idea of incorporating an athlete's personality into his shoes — making a signature shoe more than just a shoe with a signature on it — an idea that would change forever the relationship between athlete and brand. Even today, the black/cement III retains the perfect balance between tech and style, performance and appearance. The best there ever was, the best there ever will be.",
            "colorway": "Black / Cement",
            "release_date": "1988",
            "brand": "Jordan",
            "style": "mid",
            "brand_type": "3",
            "condition": "New",
            "retail_price": 200,
            "price_sold": 800,
            "quantity_sold": 1,

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
