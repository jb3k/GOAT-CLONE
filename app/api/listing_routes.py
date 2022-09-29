from flask import Blueprint, jsonify, session, request, redirect
from flask_login import login_required, current_user
from app.models import Listing, Apparel
from app.forms import ListingForm, ApparelForm
from .auth_routes import validation_errors_to_error_messages


listing_routes = Blueprint('listings', __name__)

@listing_routes.route('/', methods=['GET'])
def get_all_listing():
    listings = Listing.query.all()
    return {"Listing": [items.to_dict() for items in listings] }


# @listing_routes.route('/<int:apparel_id>/listings', methods=['POST'])
# @login_required
# def new_listing(apparel_id):
#     listingForm = ListingForm()
#     apparelForm = ApparelForm()
#     listingForm['csrf_token'].data = request.cookies['csrf_token']

#     shoeId = Apparel.query.get(apparel_id)

#     #if the listing of the shoe is not already in the db... then im going to want to submit the form to the db first
#     if shoeId == None:
#         if apparelForm.validate_on_submit():
#         new_apparel = Apparel(
#                 name = item["name"],
#                 description = item["description"],
#                 colorway = item["colorway"],
#                 release_date = item["release_date"],
#                 brand = item["brand"],
#                 style = item["style"],
#                 brand_type = item["brand_type"],
#                 condition = item["condition"],
#                 retail_price = item["retail_price"],
#                 price_sold = item["price_sold"],
#                 quantity_sold = item["quantity_sold"],
#                 size = item["size"]
#             )

#             db.session.add(new_apparel)
#             db.session.commit()
#             return


#     #if the listing of the shoe is already in the db... then i can just add the listing info and assign it to that shoe's id in the db
#     if listingForm.validate_on_submit():

#         new_listing = Listing(
#             price = form.data["price"],
#             size = form.data["size"],
#             quantity = form.data["quantity"],
#             user_id = current_user.id,
#             apparel_id = shoeId

#         )
#         db.session.add(new_listing)
#         db.session.commit()
#         return 
#     return {"errors": validation_errors_to_error_messages(form.errors)}, 400



# @listing_routes.route('/shoe/<int:listing_id>', methods=('PUT'))
# @login_required
# def update_listing(listing_id):
#     form = ListingForm()
#     form['csrf_token'].data = request.cookies['csrf_token']

#     updateListing = Listing.query.get(listing_id)
#     if updateListing == None:
#         return {"errors": "Listing couldn't be found"}, 404
#     if updateListing.user_id != current_user.id:
#         return {"errors": "Forbidden"}, 403


#     if form.validate_on_submit():

#         updateListing.price = form.data["price"],
#         updateListing.size = form.data["size"],
#         updateListing.quantity = form.data["quantity"]
#         db.session.commit()
#         return updateListing.to_dict()

#     return {"errors": validation_errors_to_error_messages(form.errors)}, 400


# @listing_routes.route('/shoe/<int:listing_id>', methods=('DELETE'))
# @login_required
# def update_listing(listing_id):
#     listing = Listing.query.get(listing_id)

#     if listing == None:
#         return {"errors": "Listing couldn't be found"}, 404
#     if listing.user_id != current_user.id:
#         return {"errors": "Forbidden"}, 403
#     db.session.delete(listing)
#     db.session.commit()
#     return {"message": "Successfully deleted"}
