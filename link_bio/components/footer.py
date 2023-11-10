import reflex as rx
import datetime
from link_bio import constants as const
from link_bio.styles.colors import Color, TextColor
from link_bio.styles.styles import Size as Size


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src="myavatar.svg", width="8%"),
        rx.link(
            rx.box(
                f"© {datetime.date.today().year} ",
                rx.span("MCPikon by Javier Picón.", color=Color.PRIMARY.value),
            ),
            href=const.MY_WEB_URL,
            is_external=True,
            font_size=Size.MEDIUM.value,
        ),
        rx.text(
            "BUILDING SOFTWARE WITH ♥ FROM MADRID TO THE WORLD.",
            font_size=Size.MEDIUM.value,
            margin_top=Size.ZERO.value,
        ),
        margin_bottom=Size.BIG.value,
        padding_bottom=Size.BIG.value,
        spacing=Size.DEFAULT.value,
        color=TextColor.FOOTER.value,
    )
