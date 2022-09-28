from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError


class ImageForm(FlaskForm):

    img_format = [".png", ".jpeg", ".jpg", ".bmp"]

    for url in img_format:
        if url in post_url:
            return
    raise ValidationError("Please enter a valid url ")


    image_url  = StringField("Image Url", validators=[DataRequired(), valid_post_url])
