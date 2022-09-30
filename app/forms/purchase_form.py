from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError



class PurchaseForm(FlaskForm):

    # def valid_zip(form, field):
    #     zipcode = field.data
    #     if len(zipcode) != 5:
    #         raise ValidationError("Invalid Zipcode")


    address = StringField("Address", validators=[DataRequired()])
    city = StringField("City", validators=[DataRequired()])
    state = StringField("State", validators=[DataRequired()])
    country = StringField("Country", validators=[DataRequired()])
    zipcode = IntegerField("Zipcode", validators=[DataRequired()])
