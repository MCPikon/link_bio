import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size as Size, Spacing


def link_button(title: str, body: str, img_src: str, url: str) -> rx.Component:
    return rx.button(
        rx.hstack(
            rx.image(
                src=img_src, 
                width=Size.LARGE.value,
                height=Size.LARGE.value,
                margin=Size.MEDIUM.value,
                alt=title
            ),
            rx.vstack(
                rx.text(
                    title, 
                    size=Spacing.SMALL.value,
                    style=styles.button_title_style
                ),
                rx.text(
                    body, 
                    size=Spacing.SMALLER.value,
                    style=styles.button_body_style
                ),
                align_items="start",
                spacing=Spacing.VERY_SMALL.value,
                padding_y=Size.SMALL.value,
                padding_right=Size.SMALL.value
            ),
            align="center",
            width="100%"
        ),
        on_click=rx.redirect(path=url, external=True)
    )
