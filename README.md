# 🌐 GM Legacy Website

Proyecto web multipágina para **GM Legacy**, desarrollado con HTML, CSS y JavaScript.  
Incluye secciones de presentación, trayectoria, tienda, reseñas y contacto.

---

```text
GM-Legacy/
html/
│  ├── index.html              # Página principal
│  ├── about.html              # Sección "Acerca de"
│  ├── trayectoria.html        # Sección "Trayectoria"
│  ├── tienda.html             # Tienda oficial
│  ├── contacto.html           # Formulario de contacto
│  ├── reseñas.html            # Página de reseñas
css/
│   ├── style.css               # Estilos globales
│   ├── styles.css              # Estilos adicionales
│   ├── styleTienda.css         # Estilos específicos de la tienda
│   ├── reseñas.css             # Estilos específicos de reseñas
js/
│   ├── tienda.js               # Lógica de la tienda
│   ├── reseñas.js              # Funcionalidad de reseñas
│   ├── validacionForm.js       # Validación del formulario
│
├── IMAGENES GM/            # Imágenes, logotipos y recursos gráficos
└── README.md               # Documentación del proyecto
```

---

## ⚙️ Instalación y uso

1. Clona este repositorio o descarga los archivos.
2. Abre `index.html` en tu navegador para visualizar la página principal.
3. Navega entre las secciones usando el menú superior:
   - Acerca de
   - Trayectoria
   - Tienda
   - Contacto
   - Reseñas

---

## ✨ Funcionalidades destacadas

- **Navbar fija** con logo clickeable que regresa al `index.html`.
- **Hero section** con video embebido y botones de acción.
- **Tienda oficial** con productos en tarjetas y carrusel destacado.
- **Formulario de contacto** con validación en `validacionForm.js`.
- **Sistema de reseñas** con estrellas interactivas y modal.
- **Bootstrap** integrado para:
  - Grid system responsivo.
  - Navbar adaptable a móviles.
  - Botones y modales estilizados.
  - Clases utilitarias para espaciado y tipografía.

---

## 📌 Notas

- El logo en la barra de navegación está enlazado a `index.html` para regresar siempre al inicio.
- Los estilos están modularizados en diferentes archivos CSS para mantener orden.
- Se recomienda usar un servidor local (ej. VS Code Live Server) para evitar problemas de rutas.
- Bootstrap se incluye vía CDN en el `<head>` de cada página:
  ```html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
