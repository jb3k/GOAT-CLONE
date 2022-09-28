from flask.cli import AppGroup
from .users import seed_users, undo_users
from .buying import seed_purchase, undo_purchase
from .listings import seed_listings, undo_listings
from .images import seed_image, undo_image
from .apparel import seed_apparel, undo_apparel

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    # seed_apparel()
    # seed_image()
    # seed_listings()
    # seed_purchase()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    # undo_apparel()
    # undo_image()
    # undo_listings()
    # undo_purchase()
