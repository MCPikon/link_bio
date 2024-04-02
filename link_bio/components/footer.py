import reflex as rx
import datetime
from link_bio import constants as const
from link_bio.styles.colors import Color, TextColor
from link_bio.styles.styles import Size as Size, Spacing


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(
            src="myavatar.svg",
            height=Size.XXL.value,
            width=Size.XXL.value,
            alt="Avatar de Javier Picón."
        ),
        rx.link(
            rx.box(
                f"© {datetime.date.today().year} ",
                rx.text(
                    "MCPikon by Javier Picón",
                    as_="span",
                    color=Color.PRIMARY.value
                ),
                padding_top=Size.DEFAULT.value
            ),
            href=const.MY_WEB_URL,
            is_external=True,
            font_size=Size.MEDIUM.value
        ),
        rx.link(
            rx.hstack(
                rx.image(
                    src="/icons/github.svg",
                    height=Size.LARGE.value,
                    width=Size.LARGE.value,
                    alt="Logo GitHub"
                ),
                rx.text(
                    "MADE WITH ♥ FROM SPAIN TO THE WORLD.",
                    font_size=Size.MEDIUM.value,
                    margin_top=Size.ZERO.value
                ),
            ),
            href=const.REPO_URL,
            is_external=True
        ),
        align="center",
        margin_bottom=Size.BIG.value,
        padding_bottom=Size.VERY_BIG.value,
        padding_x=Size.BIG.value,
        spacing=Spacing.ZERO.value,
        color=TextColor.FOOTER.value,
    )
