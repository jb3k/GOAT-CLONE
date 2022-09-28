from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    users = [
        {
            "first_name": "Demo",
            "last_name": "User",
            "email": "demouser@gmail.com",
            "password": "password",
        }, 


    ]


    for user in userss:
        new_user = User(
            first_name = post["first_name"],
            last_name = post["last_name"],
            email = post["email"],
            password = post["password"],
        )

        db.session.add(new_user)

    db.session.commit()
    print('Listings were succesfully created')


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
