from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateField
from wtforms.validators import DataRequired, ValidationError


class ApparelForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    description = StringField("Description", validators=[DataRequired()])
    brand_type = StringField("Type", validators=[DataRequired()])
    style = StringField("Style", validators=[DataRequired()])
    colorway = StringField("Colorway", validators=[DataRequired()])
    brand = StringField("Brand", validators=[DataRequired()])
    release_date = DateField('09-18-2015', validators=[DataRequired()])
    condition = StringField("condition", validators=[DataRequired()])    
    retail_price = IntegerField(100, validators=[DataRequired()])
