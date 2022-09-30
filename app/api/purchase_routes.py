from flask import Blueprint, jsonify, session, request, redirect
from flask_login import login_required, current_user
from app.models import Purchase, Listing, db
from app.forms import ListingForm, PurchaseForm
from .auth_routes import validation_errors_to_error_messages
from datetime import datetime


purchase_routes = Blueprint('purchases', __name__)

@purchase_routes.route('/', methods=['GET'])
def get_all_purchases():
    purchased = Purchase.query.all()
    return {"purchases": [items.to_dict() for items in purchased] }



@purchase_routes.route("/<int:listing_id>", methods=["POST"])
@login_required
def new_purchase(listing_id):
    form = PurchaseForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    purchased = Purchase.query.all()
    shoeId = Listing.query.get(listing_id)

    #if the listing of the shoe is not already in the db... then im going to want to submit the form to the db first
    #or just direct them to the apparel form if the shoe doesnt already exist in the db, IF SO HOW DO I DIRECT THEM TO THE APPAREL FORM (in the frontend?)
    if shoeId == None:
        return {"message": "Shoe not in database, please add to database before listing"}

    if shoeId.quantity <=0:
        return {"message": "Shoe is out of stock"}


    #if the listing of the shoe is already in the db... then i can just add the listing info and assign it to that shoe's id in the db
    if form.validate_on_submit():

        new_purchase = Purchase(
            address = form.data["address"],
            city = form.data["city"],
            state = form.data["state"],
            country = form.data["country"],
            zipcode = form.data["zipcode"],
            user_id = current_user.id,
            listing_id = shoeId.id

        )
        db.session.add(new_purchase)
        db.session.commit()
        return {"purchases": [items.to_dict() for items in purchased] }
    return {"errors": validation_errors_to_error_messages(form.errors)}, 400



# @purchase_routes.route("/shoe/<int:listing_id>", methods=["PUT"])
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


@purchase_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_listing(id):
    remove_purchase = Purchase.query.get(id)

    if remove_purchase == None:
        return {"errors": "purchase couldn't be found"}, 404
    if remove_purchase.user_id != current_user.id:
        return {"errors": "Forbidden"}, 403

    db.session.delete(remove_purchase)
    db.session.commit()
    return {"message": "Successfully deleted"}
