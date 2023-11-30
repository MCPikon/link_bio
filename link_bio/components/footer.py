import reflex as rx
import datetime
from link_bio import constants as const
from link_bio.styles.colors import Color, TextColor
from link_bio.styles.styles import Size as Size


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src="myavatar.svg", width=Size.XXL.value),
        rx.box(
            rx.text(
                f"© {datetime.date.today().year} - Made from Spain with ♥ by ",
                rx.link(rx.span("Javier Picón.", color=Color.PRIMARY.value), href="#"),
                font_size=Size.MEDIUM.value,
                margin_top=Size.ZERO.value,
            )
        ),
        margin_bottom=Size.BIG.value,
        padding_bottom=Size.BIG.value,
        spacing=Size.DEFAULT.value,
        color=TextColor.FOOTER.value,
    )
