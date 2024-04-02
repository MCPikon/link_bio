import reflex as rx
from link_bio.styles.fonts import FontWeight
import link_bio.styles.styles as styles
from link_bio.styles.colors import Color
from link_bio.styles.styles import Size as Size


def navbar() -> rx.Component:
    return rx.hstack(
        rx.box(
            rx.text("MC", as_="span", color=Color.PRIMARY.value, font_weight="bold"),
            rx.text("Pikon", as_="span", color=Color.SECONDARY.value, font_weight="bold"),
            style=styles.navbar_title_style,
        ),
        position="sticky",
        bg=Color.CONTENT.value,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0",
    )
