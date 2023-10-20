import reflex as rx
import datetime
from link_bio.styles.styles import Size as Size


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src="avatar.png", width="4%"),
        rx.link(
            f"© {datetime.date.today().year} MCPikon by Javier Picón.",
            href="https://javier-picon.web.app",
            is_external=True,
            font_size=Size.MEDIUM.value
        ),
        rx.text(
            "BUILDING SOFTWARE WITH ❤ FROM MADRID TO THE WORLD.",
            font_size=Size.MEDIUM.value,
            margin_top="0px !important"
        ),
        margin_bottom=Size.BIG.value
    )