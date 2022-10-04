from app.models import db, Listing


# Adds a demo user, you can add other users here if you want
def seed_listings():

    listings = [
        {
            "user_id": 1,
            "apparel_id": 1,
            "size": 8,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 1,
            "apparel_id": 1,
            "size": 9,
            "price": 320,
            "quantity":1
        }, 
        {
            "user_id": 1,
            "apparel_id": 1,
            "size": 10,
            "price": 330,
            "quantity":1
        }, 
        {
            "user_id": 2,
            "apparel_id": 1,
            "size": 5,
            "price": 220,
            "quantity":1
        }, 
        {
            "user_id": 2,
            "apparel_id": 1,
            "size": 6,
            "price": 230,
            "quantity":1
        }, 
        {
            "user_id": 2,
            "apparel_id": 1,
            "size": 7,
            "price": 240,
            "quantity":1
        }, 
        {
            "user_id": 3,
            "apparel_id": 1,
            "size": 11,
            "price": 350,
            "quantity":1
        }, 
        {
            "user_id": 3,
            "apparel_id": 1,
            "size": 12,
            "price": 360,
            "quantity":1
        }, 
        {
            "user_id": 3,
            "apparel_id": 1,
            "size": 13,
            "price": 370,
            "quantity":1
        }, 
        {
            "user_id": 1,
            "apparel_id": 2,
            "size": 11,
            "price": 1000,
            "quantity":1
        }, 
        {
            "user_id": 1,
            "apparel_id": 2,
            "size": 12,
            "price": 850,
            "quantity":1
        }, 
        {
            "user_id": 3,
            "apparel_id": 2,
            "size": 13,
            "price": 950,
            "quantity":1
        },
        {
            "user_id": 5,
            "apparel_id": 8,
            "size": 12,
            "price": 850,
            "quantity":1
        }, 
        {
            "user_id": 5,
            "apparel_id": 10,
            "size": 12,
            "price": 850,
            "quantity":1
        }, 
        {
            "user_id": 5,
            "apparel_id": 10,
            "size": 11,
            "price": 850,
            "quantity":1
        }, 
        {
            "user_id": 5,
            "apparel_id": 10,
            "size": 15,
            "price": 800,
            "quantity":1
        }, 
        {
            "user_id": 5,
            "apparel_id": 5,
            "size": 10,
            "price": 850,
            "quantity":1
        }, 
        {
            "user_id": 6,
            "apparel_id": 13,
            "size": 12,
            "price": 850,
            "quantity":1
        }, 
        {
            "user_id": 6,
            "apparel_id": 8,
            "size": 12,
            "price": 850,
            "quantity":1
        }, 
        {
            "user_id": 6,
            "apparel_id": 8,
            "size": 4,
            "price": 850,
            "quantity":1
        }, 
        {
            "user_id": 6,
            "apparel_id": 8,
            "size": 5,
            "price": 450,
            "quantity":1
        },
        {
            "user_id": 6,
            "apparel_id": 8,
            "size": 7,
            "price": 450,
            "quantity":1
        }, 
        {
            "user_id": 6,
            "apparel_id": 9,
            "size": 5,
            "price": 450,
            "quantity":1
        }, 
        {
            "user_id": 7,
            "apparel_id": 12,
            "size": 7,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 7,
            "apparel_id": 15,
            "size": 7,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 7,
            "apparel_id": 13,
            "size": 7,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 7,
            "apparel_id": 12,
            "size": 8,
            "price": 360,
            "quantity":1
        }, 
        {
            "user_id": 7,
            "apparel_id": 13,
            "size": 7,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 7,
            "apparel_id": 14,
            "size": 7,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 7,
            "apparel_id": 15,
            "size": 10,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 7,
            "apparel_id": 15,
            "size": 4,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 8,
            "apparel_id": 16,
            "size": 7,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 8,
            "apparel_id": 16,
            "size": 8,
            "price": 320,
            "quantity":1
        }, 
        {
            "user_id": 8,
            "apparel_id": 16,
            "size": 9,
            "price": 350,
            "quantity":1
        }, 
        {
            "user_id": 8,
            "apparel_id": 17,
            "size": 7,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 8,
            "apparel_id": 17,
            "size": 4,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 8,
            "apparel_id": 17,
            "size": 9,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 8,
            "apparel_id": 17,
            "size": 10,
            "price": 320,
            "quantity":1
        }, 
        {
            "user_id": 9,
            "apparel_id": 18,
            "size": 7,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 9,
            "apparel_id": 18,
            "size": 6,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 9,
            "apparel_id": 18,
            "size": 12,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 9,
            "apparel_id": 18,
            "size": 13,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 9,
            "apparel_id": 18,
            "size": 14,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 9,
            "apparel_id": 18,
            "size": 16,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 9,
            "apparel_id": 18,
            "size": 17,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 9,
            "apparel_id": 19,
            "size": 7,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 9,
            "apparel_id": 19,
            "size": 9,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 9,
            "apparel_id": 19,
            "size": 8,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 9,
            "apparel_id": 19,
            "size": 4,
            "price": 300,
            "quantity":1
        }, 
        {
            "user_id": 9,
            "apparel_id": 19,
            "size": 3,
            "price": 300,
            "quantity":1
        }, 
        
    ]


    for listing in listings:
        new_listings = Listing(
            user_id = listing["user_id"],
            apparel_id = listing["apparel_id"],
            size = listing["size"],
            price = listing["price"],
            quantity = listing["quantity"],
        )

        db.session.add(new_listings)
    
    db.session.commit()
    print('User was succesfully created')


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_listings():
    db.session.execute('DELETE FROM listings;')
    db.session.commit()
