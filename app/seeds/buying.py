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
            "user_id": 3,
            "listing_id": 2,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 2,
            "listing_id": 2,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 2,
            "listing_id": 8,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 2,
            "listing_id": 12,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 2,
            "listing_id": 11,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 2,
            "listing_id": 20,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 

        {
            "user_id": 2,
            "listing_id": 21,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 2,
            "listing_id": 23,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 2,
            "listing_id": 24,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 2,
            "listing_id": 25,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }, 
        {
            "user_id": 2,
            "listing_id": 26,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 2,
            "listing_id": 27,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 2,
            "listing_id": 28,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 2,
            "listing_id": 29,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 2,
            "listing_id": 30,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 3,
            "listing_id": 31,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 3,
            "listing_id": 33,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 3,
            "listing_id": 34,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 3,
            "listing_id": 35,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 3,
            "listing_id": 36,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 3,
            "listing_id": 37,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 3,
            "listing_id": 38,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 3,
            "listing_id": 39,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 3,
            "listing_id": 40,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },


        {
            "user_id": 4,
            "listing_id": 40,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 4,
            "listing_id": 41,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 4,
            "listing_id": 43,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 4,
            "listing_id": 44,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 4,
            "listing_id": 45,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 4,
            "listing_id": 46,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 4,
            "listing_id": 47,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 4,
            "listing_id": 48,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 4,
            "listing_id": 49,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 5,
            "listing_id": 50,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 5,
            "listing_id": 51,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 5,
            "listing_id": 53,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 5,
            "listing_id": 54,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 5,
            "listing_id": 55,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 5,
            "listing_id": 56,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 5,
            "listing_id": 57,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 5,
            "listing_id": 58,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 5,
            "listing_id": 59,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },


        {
            "user_id": 6,
            "listing_id": 60,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 6,
            "listing_id": 61,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 6,
            "listing_id": 63,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 6,
            "listing_id": 64,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 6,
            "listing_id": 65,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 6,
            "listing_id": 66,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 6,
            "listing_id": 67,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 6,
            "listing_id": 68,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 6,
            "listing_id": 69,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },


        {
            "user_id": 6,
            "listing_id": 60,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 6,
            "listing_id": 61,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 6,
            "listing_id": 63,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 6,
            "listing_id": 64,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 6,
            "listing_id": 65,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 6,
            "listing_id": 66,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 6,
            "listing_id": 67,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 6,
            "listing_id": 68,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 6,
            "listing_id": 69,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },


        {
            "user_id": 7,
            "listing_id": 70,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 7,
            "listing_id": 71,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 7,
            "listing_id": 73,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 7,
            "listing_id": 74,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 7,
            "listing_id": 75,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 7,
            "listing_id": 76,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 7,
            "listing_id": 77,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 7,
            "listing_id": 78,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 7,
            "listing_id": 79,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },

        {
            "user_id": 8,
            "listing_id": 80,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 8,
            "listing_id": 81,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 8,
            "listing_id": 83,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 8,
            "listing_id": 84,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 8,
            "listing_id": 85,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 8,
            "listing_id": 86,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 8,
            "listing_id": 87,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 8,
            "listing_id": 88,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 8,
            "listing_id": 89,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },

        {
            "user_id": 9,
            "listing_id": 90,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 9,
            "listing_id": 91,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 9,
            "listing_id": 93,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 9,
            "listing_id": 94,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 9,
            "listing_id": 95,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 9,
            "listing_id": 96,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 9,
            "listing_id": 97,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 9,
            "listing_id": 98,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 9,
            "listing_id": 99,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 10,
            "listing_id": 100,
            "address": "123 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        },
        {
            "user_id": 10,
            "listing_id": 101,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 10,
            "listing_id": 103,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 10,
            "listing_id": 104,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 10,
            "listing_id": 105,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        }, 
        {
            "user_id": 10,
            "listing_id": 106,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 10,
            "listing_id": 107,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 10,
            "listing_id": 108,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 13345
        },
        {
            "user_id": 10,
            "listing_id": 109,
            "address": "133 main street",
            "city": "LA",
            "state": "CA",
            "country": "USA",
            "zipcode": 12345
        }

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
