from flask import Blueprint, jsonify, session, request, redirect
from flask_login import login_required, current_user
from app.models import Apparel, Listing, db
from app.forms import ApparelForm, ListingForm
from .auth_routes import validation_errors_to_error_messages


apparel_routes = Blueprint('apparels', __name__)

@apparel_routes.route('/', methods=['GET'])
def get_all_apparel():
    apparel = Apparel.query.all()
    return {"apparels": [items.to_dict() for items in apparel] }


# @apparel_routes.route('/', methods=['GET'])
# def get_brand_apparel():
#     apparel = Apparel.query.all()
#     return {"apparels": [items.to_dict() for items in apparel] }



@apparel_routes.route('/<int:id>', methods=['GET'])
def get_apparel(id):
    apparel = Apparel.query.get(id)
    return apparel.to_dict()


@apparel_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_apparel(id):
    shoe = Apparel.query.get(id)
    
    if shoe == None:
        return {"errors": "shoe couldn't be found"}, 404

    db.session.delete(shoe)
    db.session.commit()
    return {"message": "Successfully deleted"}









# @apparel_routes.route("/", methods=["POST"])
# @login_required
# def upload_image():
#     image = request.files['image']
#     name = request.form['name']
#     description = request.form['description']
#     release_date = request.form['release_date']
#     brand = request.form['brand']
#     style = request.form['style']
#     brand_type = request.form['brand_type']
#     colorway = request.form['colorway']
#     condition = request.form['condition']
#     retail_price = request.form['retail_price']



#     if "image" not in request.files:
#         return {"errors": "image required"}, 400
#     if not allowed_file(image.filename):
#         return {"errors": "file type not permitted"}, 400
    
#     image.filename = get_unique_filename(image.filename)

#     upload = upload_file_to_s3(image)

#     if "url" not in upload:
#         # if the dictionary doesn't have a url key
#         # it means that there was an error when we tried to upload
#         # so we send back that error message
#         return upload, 400

#     url = upload["url"]


#     # form = ApparelForm()
#     # form['csrf_token'].data = request.cookies['csrf_token']

#     # if form.validate_on_submit():
    
#     new_apparel = Apparel(
#             # user=current_user, 
#         image_url=url,
#         name = name,
#         description = description,
#         colorway = colorway,
#         release_date = release_date,
#         brand = brand,
#         style = style,
#         brand_type = brand_type,
#         condition = condition,
#         retail_price = retail_price,
#     )
#     db.session.add(new_apparel)
#     db.session.commit()
#     return {"url": url}


@apparel_routes.route("/<int:apparel_id>/listings", methods=["POST"])
@login_required
def new_listing(apparel_id):
    listingForm = ListingForm()
    apparelForm = ApparelForm()
    listingForm['csrf_token'].data = request.cookies['csrf_token']
    listings = Listing.query.all()
    shoeId = Apparel.query.get(apparel_id)

    #if the listing of the shoe is not already in the db... then im going to want to submit the form to the db first
    #or just direct them to the apparel form if the shoe doesnt already exist in the db, IF SO HOW DO I DIRECT THEM TO THE APPAREL FORM (in the frontend?)
    if shoeId == None:
        return {"message": "Shoe not in database, please add to database before listing"}

    #if the listing of the shoe is already in the db... then i can just add the listing info and assign it to that shoe's id in the db
    if listingForm.validate_on_submit():

        new_listing = Listing(
            price = listingForm.data["price"],
            size = listingForm.data["size"],
            quantity = listingForm.data["quantity"],
            user_id = current_user.id,
            apparel_id = shoeId.id

        )
        db.session.add(new_listing)
        db.session.commit()
        return {"listings": [items.to_dict() for items in listings] }
    return {"errors": validation_errors_to_error_messages(listingForm.errors)}, 400
