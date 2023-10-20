import reflex as rx
from link_bio.components.link_icon import link_icon
from link_bio.components.info_text import info_text
from link_bio.styles.styles import Size as Size


def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(name="Javier Picón", src="avatar.png", size="xl"),
            rx.vstack(
                rx.heading(
                    "Javier Picón",
                    size="lg"
                ),
                rx.text(
                    "@mcpikon",
                    margin_top="0px !important"
                ),
                rx.hstack(
                    link_icon("https://x.com/mcpikon"),
                    link_icon("https://x.com/mcpikon"),
                    link_icon("https://x.com/mcpikon")
                ),
                align_items="start"
            ),
            spacing=Size.DEFAULT.value
        ),
        rx.flex(
            info_text("+2", "años de experiencia en Java"),
            rx.spacer(),
            info_text("+2", "años de experiencia en Spring Boot"),
            rx.spacer(),
            info_text("Aprendiendo", "Python"),
            width="100%"
        ),
        rx.text("""Hola a todos 👋, Soy Javier Picón y actualmente vivo en Madrid, España.
                He estudiado Desarrollo de Aplicaciones Web, soy programador junior especializado en Java, 
                también soy Técnico de Sistemas Microinformáticos""", text_align="justify"),
        spacing=Size.BIG.value,
        align_items="start"
    )