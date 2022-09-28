from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError


class BuyingForm(FlaskForm):
    post_url  = StringField("Image/Video Url", validators=[DataRequired(), valid_post_url])
    # post_url2 = StringField("Video Url", validators=[DataRequired(), valid_video_url])
    address = StringField("Address", validators=[DataRequired()])
    city = StringField("City", validators=[DataRequired()])
    state = StringField("State", validators=[DataRequired()])
    country = StringField("Country", validators=[DataRequired()])
    zipcode = StringField("Zipcode", validators=[DataRequired()])
    
