import reflex as rx
from link_bio.components.link_icon import link_icon
from link_bio.components.info_text import info_text
from link_bio.styles.colors import Color, TextColor
from link_bio.styles.styles import Size as Size, Spacing
import link_bio.constants as const


def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.box(
                rx.avatar(
                    name="Javier Picón",
                    size=Spacing.MEDIUM_BIG.value,
                    src="/avatar.jpg",
                    radius="full",
                    color=TextColor.BODY.value,
                    bg=Color.CONTENT.value,
                    padding="2px",
                    border=f"4px solid {Color.PRIMARY.value}"
                ),
                position="relative"
            ),
            rx.vstack(
                rx.heading("Javier Picón", size=Spacing.BIG.value),
                rx.text("@mcpikon", margin_top=Size.ZERO.value, color=Color.PRIMARY.value),
                rx.hstack(
                    link_icon(
                        "icons/spotify.svg", const.SPOTIFY_URL, "Spotify"
                    ),
                    link_icon(
                        "icons/youtube.svg", const.YOUTUBE_URL, "Youtube"
                    ),
                    link_icon(
                        "icons/letterboxd.svg", const.LETTERBOXD_URL, "Letterboxd"
                    ),
                    spacing=Spacing.LARGE.value,
                    padding_top=Size.SMALL.value
                ),
                spacing=Spacing.ZERO.value,
                align_items="start",
            ),
            align="end",
            spacing=Spacing.DEFAULT.value,
        ),
        rx.vstack(
            rx.flex(
                info_text("+2", "años desarrollando con Java"),
                rx.spacer(),
                info_text("+2", "años desarrollando con Spring Boot"),
                rx.spacer(),
                info_text("Aprendiendo", "Python"),
                width="100%",
            ),
            rx.text(
                """
                Hola a todos 👋, Soy Javier Picón y actualmente vivo en Madrid, España.
                He estudiado Desarrollo de Aplicaciones Web, soy programador junior especializado en Java, 
                también soy Técnico de Sistemas Microinformáticos
                """,
                font_size=Size.DEFAULT.value,
                color=TextColor.BODY.value,
            ),
            width="100%",
            spacing=Spacing.BIG.value,
            align_items="start",
        ),
        width="100%",
        spacing=Spacing.BIG.value,
        align_items="start",
    )
