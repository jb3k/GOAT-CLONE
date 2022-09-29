from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField
from wtforms.validators import DataRequired, ValidationError


class ListingForm(FlaskForm):
  
    price = IntegerField(100, validators=[DataRequired()])
    size= IntegerField(10, validators=[DataRequired()])
    quantity = IntegerField(1, validators=[DataRequired()])
