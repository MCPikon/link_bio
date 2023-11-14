import reflex as rx
from link_bio.components.navbar import navbar
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size
from link_bio.views.header.header import header
from link_bio.views.links.links import links
from link_bio.components.footer import footer


class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                links(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                padding=Size.BIG.value,
            )
        ),
        footer(),
    )


app = rx.App(style=styles.BASE_STYLE)
app.add_page(
    index,
    title="Javier Picón (MCPikon) | Java Developer",
    description="Hola, mi nombre es Javier Picón. Soy desarrollador full-stack",
    image="avatar.jpg",
)
app.compile()
