from app.models import db, Listings


# Adds a demo user, you can add other users here if you want
def seed_listings():

    listings = [
        {
            "user_id": 1,
            "apparel_id": 1,
            "size": 8,
            "price": 100,
            "quantity":1
        }, 


    ]


    for listing in listings:
        new_listings = Listings(
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
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
