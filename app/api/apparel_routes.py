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
