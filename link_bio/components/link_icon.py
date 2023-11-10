import reflex as rx

from link_bio.styles.styles import Size


def link_icon(img_src: str, url: str) -> rx.Component:
    return rx.link(
        rx.image(src=img_src, width=Size.LARGE.value), href=url, is_external=True
    )
