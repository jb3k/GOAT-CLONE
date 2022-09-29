from flask import Blueprint, jsonify, session, request, redirect
from flask_login import login_required, current_user
from app.models import Listing
# from app.forms import ApparelForm
from .auth_routes import validation_errors_to_error_messages


listing_routes = Blueprint('listings', __name__)

@listing_routes.route('/', methods=['GET'])
def get_all_listing():
    listings = Listing.query.all()
    return {"Listing": [items.to_dict() for items in listings] }


@listing_routes.route('/', methods=['POST'])
def new_listing():
    listings = Listing.query.all()
    return {"Listing": [items.to_dict() for items in listings] }
