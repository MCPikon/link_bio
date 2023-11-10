import reflex as rx
from link_bio.components.link_icon import link_icon
from link_bio.components.info_text import info_text
from link_bio.styles.colors import Color, TextColor
from link_bio.styles.styles import Size as Size


def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(
                name="Javier Picón",
                size="xl",
                src="avatar.png",
                color=TextColor.BODY.value,
                bg=Color.CONTENT.value,
                padding="2px",
                border="4px solid",
                border_color=Color.PRIMARY.value,
            ),
            rx.vstack(
                rx.heading("Javier Picón", size="lg"),
                rx.text(
                    "@mcpikon", margin_top=Size.ZERO.value, color=Color.PRIMARY.value
                ),
                rx.hstack(
                    link_icon(
                        "icons/spotify.svg", "https://open.spotify.com/user/javi89music"
                    ),
                    link_icon(
                        "icons/youtube.svg",
                        "https://www.youtube.com/channel/UCm3HyzlX8nT7rbVTupmj5uQ",
                    ),
                    link_icon(
                        "icons/letterboxd.svg", "https://letterboxd.com/MCPikon/"
                    ),
                    spacing=Size.DEFAULT.value,
                ),
                align_items="start",
            ),
            spacing=Size.DEFAULT.value,
        ),
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
        spacing=Size.BIG.value,
        align_items="start",
    )
