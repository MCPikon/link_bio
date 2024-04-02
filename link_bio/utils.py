import reflex as rx

def lang() -> rx.Component:
    return rx.script("document.documentElement.lang='es'")


preview = "/preview.jpg"

_meta = [
    {"name": "og:type", "content": "website"},
    {"name": "og:image", "content": preview},
    {"name": "twitter:card", "content": "summary_large_image"},
    {"name": "twitter:site", "content": "@mcpikon"}
]

# Index

index_title = "Javier Picón (MCPikon) | Web Developer"
index_description = "Hola, mi nombre es Javier Picón. Soy desarrollador web."

index_meta = [
    {"name": "og:title", "content": index_title},
    {"name": "og:description", "content": index_description},
]
index_meta.extend(_meta)