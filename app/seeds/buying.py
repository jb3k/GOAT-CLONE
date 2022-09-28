from app.models import db, Purchases


# Adds a demo user, you can add other users here if you want
def seed_purchase():

    purchase_history = [
        {
            "user_id": 1,
            # "listing_id": 1,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 


    ]


    for purchase in purchase_history:
        new_purchases = Purchases(
            user_id = purchase["user_id"],
            # listing_id = purchase["listing_id"],
            address = purchase['address'],
            city = purchase["city"],
            state = purchase["state"],
            country = purchase["country"],
            zipcode = purchase["zipcode"],
        )

        db.session.add(new_purchases)
    
    db.session.commit()
    print('Purchases were succesfully created')


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_purchase():
    db.session.execute('DELETE FROM purchases;')
    db.session.commit()
