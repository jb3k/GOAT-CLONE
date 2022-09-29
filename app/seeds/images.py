from app.models import db, Image


# Adds a demo user, you can add other users here if you want
def seed_image():

    images = [
        {
            "apparel_id": 1,
            "image_url": "https://cdn.flightclub.com/500/TEMPLATE/803111/4.jpg"
        }, 
        {
            "apparel_id": 1,
            "image_url": "https://cdn.flightclub.com/500/TEMPLATE/803111/3.jpg"
        }, 
            {
            "apparel_id": 1,
            "image_url": "https://cdn.flightclub.com/500/TEMPLATE/803111/1.jpg"
        }, 


    ]


    for image in images:
        new_image = Image(
            apparel_id = image["apparel_id"],
            image_url = image["image_url"]
        )

        db.session.add(new_image)
    
    db.session.commit()
    print('Images were succesfully seeded')


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_image():
    db.session.execute('DELETE FROM images;')
    db.session.commit()
