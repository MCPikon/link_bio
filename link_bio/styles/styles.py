import reflex as rx
from enum import Enum

from .colors import Color, TextColor
from .fonts import Font, FontWeight

# Constants
MAX_WIDTH = "560px"

# Load fonts from google fonts api
STYLESHEETS = [
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap",
    "https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap",
]


# Size
class Size(Enum):
    ZERO = "0px !important"
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    LARGE = "1.5em"
    BIG = "2em"
    VERY_BIG = "4em"
    XXL = "10em"


# Styles
BASE_STYLE = {
    "font_family": Font.DEFAULT.value,
    "font_weight": FontWeight.LIGHT.value,
    "background_color": Color.BACKGROUND.value,
    rx.Heading: {"color": TextColor.HEADER.value},
    rx.Button: {
        "width": "100%",
        "height": "100%",
        "display": "block",
        "padding": Size.SMALL.value,
        "border_radius": Size.DEFAULT.value,
        "color": TextColor.HEADER.value,
        "background_color": Color.CONTENT.value,
        "white_space": "normal",
        "text_align": "start",
        "_hover": {"background_color": Color.SECONDARY.value},
    },
    rx.Link: {"text_decoration": "none", "_hover": {}},
}

navbar_title_style = dict(
    font_family=Font.LOGO.value, font_size=Size.LARGE.value, font_weight="bold"
)

title_style = dict(
    width="100%",
    padding_top=Size.DEFAULT.value,
    font_size=Size.LARGE.value,
)

button_title_style = dict(
    font_family=Font.TITLE.value,
    font_weight=FontWeight.MEDIUM.value,
    font_size=Size.DEFAULT.value,
    color=TextColor.HEADER.value,
)

button_body_style = dict(
    font_weight=FontWeight.LIGHT.value,
    font_size=Size.MEDIUM.value,
    color=TextColor.BODY.value,
)
