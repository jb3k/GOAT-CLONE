from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError



class BuyingForm(FlaskForm):

    def valid_zip(form, field):
        zipcode = field.data
        if len(zipcode) != 5:
            raise ValidationError("Invalid Zipcode")


    address = StringField("Address", validators=[DataRequired()])
    city = StringField("City", validators=[DataRequired()])
    state = StringField("State", validators=[DataRequired()])
    country = StringField("Country", validators=[DataRequired()])
    zipcode = StringField("Zipcode", validators=[DataRequired(), valid_zip])
    
