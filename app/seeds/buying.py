from app.models import db, Purchase


# Adds a demo user, you can add other users here if you want
def seed_purchase():

    purchase_history = [
        {
            "user_id": 1,
            "listing_id": 1,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 1,
            "listing_id": 2,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 1,
            "listing_id": 8,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 1,
            "listing_id": 12,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 1,
            "listing_id": 11,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 2,
            "listing_id": 3,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 5,
            "listing_id": 4,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 4,
            "listing_id": 10,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 4,
            "listing_id": 14,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 4,
            "listing_id": 15,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 5,
            "listing_id": 16,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 5,
            "listing_id": 17,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 5,
            "listing_id": 18,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 5,
            "listing_id": 19,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 5,
            "listing_id": 20,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 5,
            "listing_id": 21,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 6,
            "listing_id": 22,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 6,
            "listing_id": 23,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 6,
            "listing_id": 24,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 6,
            "listing_id": 25,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 6,
            "listing_id": 26,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 


    ]


    for purchase in purchase_history:
        new_purchases = Purchase(
            user_id = purchase["user_id"],
            listing_id = purchase["listing_id"],
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
