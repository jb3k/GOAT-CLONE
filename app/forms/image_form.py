from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from ..models.images import Images

class ImageForm(FlaskForm):


    def valid_image_url(form, field):
        img = field.data
        img_format = [".png", ".jpeg", ".jpg", ".bmp"]

        for url in img_format:
            if url not in img:
                raise ValidationError("Please enter a valid url ")
            return



    image_url  = StringField("Image Url", validators=[DataRequired(), valid_image_url])
