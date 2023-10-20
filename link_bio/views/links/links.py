import reflex as rx
from link_bio.components.link_button import link_button
from link_bio.components.title import title
from link_bio.styles.styles import Size

def links() -> rx.Component:
    return rx.vstack(
        title("Enlaces de Interés"),
        link_button("Github", "Donde subo los proyectos", "https://github.com/MCPikon"),
        link_button("Twitter", "Mi cuenta de Twitter", "https://twitter.com/mcpikon"),
        link_button("Instagram", "Mi cuenta de Instagram", "https://instagram.com/mcpikon"),
        link_button("LinkedIn", "Mi perfil profesional", "https://www.linkedin.com/in/javierpiconpastor/"),
        link_button("Mi Web", "Mi página web personal", "https://javier-picon.web.app"),
        title("Proyectos"),
        link_button("GestionTareasBack", "To-Do Web (Proyecto Backend)", "https://github.com/MCPikon/gestionTareasBack"),
        link_button("GestionTareasFront", "To-Do Web (Proyecto Frontend)", "https://github.com/MCPikon/gestionTareasFront"),
        link_button("ProyectoFinal-TiendaOnline", "Proyecto Final GS DAW", "https://github.com/MCPikon/ProyectoFinal-TiendaOnline"),
        link_button("FridayPyBot", "Telegram Bot creado con Python", "https://github.com/MCPikon/FridayPyBot"),
        width="100%",
        spacing=Size.MEDIUM.value
    )