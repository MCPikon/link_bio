import reflex as rx
from link_bio.styles.styles import Size as Size


def navbar() -> rx.Component:
    return rx.hstack(
        rx.text(
            "MCPikon",
            background_image="linear-gradient(271.68deg, #EE756A 0.75%, #756AEE 88.52%)",
            background_clip="text",
            font_weight="bold",
            font_size="2em",
        ),
        rx.box(
            rx.color_mode_button(rx.color_mode_icon(), width="2%", float="right")
        ),
        position="sticky",
        bg="black",
        padding_x=Size.DEFAULT.value,
        padding_y=Size.SMALL.value,
        z_index="999",
        top="0"
    )