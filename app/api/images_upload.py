from flask import Blueprint, request
from app.models import db, Image
from flask_login import current_user, login_required
from app.aws_upload import (upload_file_to_s3, allowed_file, get_unique_filename)

image_routes = Blueprint("images", __name__)


@image_routes.route("", methods=["POST"])
@login_required
def upload_image():
    if "image" not in request.files:
        return {"errors": "image required"}, 400
    image = request.files["image"]
    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400
    
    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]


    form = ApparelForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
    
        new_apparel = Apparel(
            user=current_user, 
            image_url=url,
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
        return {"url": url}


    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


    # flask_login allows us to get the current user from the request
    # new_image = Image(user=current_user, image_url=url, apparel_id=shoeId.id )
    # db.session.add(new_image)
    # db.session.commit()
    # return {"url": url}
