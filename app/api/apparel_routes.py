from flask import Blueprint, jsonify, session, request, redirect
from flask_login import login_required, current_user
from app.models import Apparel
from app.forms import ApparelForm
from .auth_routes import validation_errors_to_error_messages


apparel_routes = Blueprint('apparels', __name__)

@apparel_routes.route('/', methods=['GET'])
def get_all_apparel():
    apparel = Apparel.query.all()
    return {"Apparel": [items.to_dict() for items in apparel] }



@apparel_routes.route("/", methods=["POST"])
@login_required
def add_apparel():
    form = ApparelForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
    
        new_apparel = Apparel(
            name = item["name"],
            description = item["description"],
            colorway = item["colorway"],
            release_date = item["release_date"],
            brand = item["brand"],
            style = item["style"],
            brand_type = item["brand_type"],
            condition = item["condition"],
            retail_price = item["retail_price"],
            price_sold = item["price_sold"],
            quantity_sold = item["quantity_sold"],
            size = item["size"]
        )
        db.session.add(new_apparel)
        db.session.commit()
        return 

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400




@apparel_routes.route("/<int:apparel_id>/listings", methods=["POST"])
@login_required
def new_listing(apparel_id):
    listingForm = ListingForm()
    apparelForm = ApparelForm()
    listingForm['csrf_token'].data = request.cookies['csrf_token']

    shoeId = Apparel.query.get(apparel_id)

    #if the listing of the shoe is not already in the db... then im going to want to submit the form to the db first
    #or just direct them to the apparel form if the shoe doesnt already exist in the db, IF SO HOW DO I DIRECT THEM TO THE APPAREL FORM (in the frontend?)
    if shoeId == None:
        return {"message": "Shoe not in database, please add to database before listing"}

    #if the listing of the shoe is already in the db... then i can just add the listing info and assign it to that shoe's id in the db
    if listingForm.validate_on_submit():

        new_listing = Listing(
            price = form.data["price"],
            size = form.data["size"],
            quantity = form.data["quantity"],
            user_id = current_user.id,
            apparel_id = shoeId

        )
        db.session.add(new_listing)
        db.session.commit()
        return 
    return {"errors": validation_errors_to_error_messages(form.errors)}, 400
