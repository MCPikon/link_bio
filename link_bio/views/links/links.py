import reflex as rx
from link_bio.components.link_button import link_button
from link_bio.components.title import title
from link_bio.styles.styles import Size
import link_bio.constants as const


def links() -> rx.Component:
    return rx.vstack(
        title("Mis Redes Sociales"),
        link_button(
            "Github",
            "Donde subo los proyectos",
            "icons/github.svg",
            const.GITHUB_URL,
        ),
        link_button(
            "Twitter",
            "Mi cuenta de Twitter",
            "icons/x-twitter.svg",
            const.TWITTER_X_URL,
        ),
        link_button(
            "Instagram",
            "Mi cuenta de Instagram",
            "icons/instagram.svg",
            const.INSTAGRAM_URL,
        ),
        link_button(
            "LinkedIn",
            "Mi perfil profesional",
            "icons/linkedin.svg",
            const.LINKEDIN_URL,
        ),
        link_button(
            "Mi Web", "Mi página web personal", "icons/my-web.svg", const.MY_WEB_URL
        ),
        title("Proyectos"),
        link_button(
            "GestionTareasBack",
            "To-Do Web (Proyecto Backend)",
            "icons/gestion-tareas-back.svg",
            const.GESTIONTAREASBACK_URL,
        ),
        link_button(
            "GestionTareasFront",
            "To-Do Web (Proyecto Frontend)",
            "icons/gestion-tareas-front.svg",
            const.GESTIONTAREASFRONT_URL,
        ),
        link_button(
            "ProyectoFinal-TiendaOnline",
            "Proyecto Final GS DAW",
            "icons/proyecto-tienda-online.svg",
            const.PROYECTOFINAL_TIENDAONLINE_URL,
        ),
        link_button(
            "FridayPyBot",
            "Telegram Bot creado con Python",
            "icons/fridaypybot.svg",
            const.FRIDAYPYBOT_URL,
        ),
        title("Contacto"),
        link_button(
            "Email",
            "Mi email personal",
            "icons/mail.svg",
            "mailto:" + const.EMAIL,
        ),
        width="100%",
        spacing=Size.MEDIUM.value,
    )
