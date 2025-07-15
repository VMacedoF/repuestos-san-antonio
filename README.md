# 🛠 Repuestos San Antonio - Página Web

Este proyecto es una página web informativa y visualmente atractiva para **Repuestos San Antonio**, un taller autorizado por Volkswagen que ofrece servicios de mantenimiento, repuestos originales y atención al cliente.

## 🌐 Sitio web
[Ver sitio en GitHub Pages](https://vmacedof.github.io/repuestos-san-antonio/)

---

## 📄 Estructura del Proyecto

- `index.html` — Página de inicio  
- `repuestos.html` — Página de repuestos y accesorios  
- `nosotros.html` — Página sobre la empresa  
- `taller.html` — Página de servicios de taller  
- `noticias.html` — Página en construcción  

**Carpetas:**

- `CSS/`  
  - `index_style.css`  
  - `repuestos_style.css`  
  - `nosotros_style.css`  
  - `taller.css`  

- `JS/`  
  - `menu.js`

- `Imagenes/` — Logos, banners, productos, etc.

---

## ✨ Características destacadas

### 🎨 Diseño visual y estructura

- Diseño limpio, moderno y responsive.
- Secciones bien organizadas: Topbar, Header, Banner, Contenido, Footer.
- Iconos sociales y datos de contacto visibles desde cualquier dispositivo.

### 🎯 Arquitectura

- Navegación clara entre páginas HTML.
- Menú desplegable funcional para sección “Modelos” (10 ítems).
- Footer unificado en todas las páginas.

### 💡 Animaciones y transiciones

- `@keyframes` personalizados para:
  - FadeIn y SlideUp de títulos, imágenes y tarjetas.
  - Zoom suave al pasar el mouse por testimonios e imágenes.
  - Expansión de la línea divisoria.

- Imágenes de promociones se oscurecen suavemente con `filter: brightness(70%)`.

### 📱 Responsive Design

- Adaptado a móviles y tablets con media queries.
- Menú hamburguesa funcional controlado por `menu.js`.
- Secciones como testimonios, repuestos y cuadros se apilan verticalmente en pantallas pequeñas.

---

## 🔧 Tecnologías usadas

- HTML5  
- CSS3 (transiciones, animaciones y media queries)  
- JavaScript puro (para interacción del menú)  
- [Swiper.js](https://swiperjs.com/) (solo en `index.html` para slider dinámico)  
- GitHub Pages (para hosting del sitio)

---

## 📌 Cambios recientes (2025)

- ✅ Animaciones CSS para mayor interactividad visual.
- ✅ Se añadió sección de "Modelos" con menú desplegable.
- ✅ Página `taller.html` con sección de servicios, promociones y CTA animados.
- ✅ Página `noticias.html` creada como sección en desarrollo.
- ✅ Mejora en estructura semántica de HTML (usando `<section>`, `<header>`, etc.).
- ✅ Organización modular por archivos y carpetas.
- ✅ Las imágenes de promoción en `repuestos.html` se oscurecen al pasar el mouse.
- ✅ Se agregó página `noticias.html` con mensaje informativo.

---

## 🔄 Cómo contribuir o editar

1. Clona el repositorio:  
   `git clone https://github.com/VMacedoF/repuestos-san-antonio`

2. Edita en tu editor favorito (VS Code recomendado).

3. Sube tus cambios:
   ```bash
   git add .
   git commit -m "Actualización de diseño y animaciones"
   git push origin main

👉 **[Haz clic aquí para visitar el sitio](https://vmacedof.github.io/repuestos-san-antonio/index.html)**

---

Creado con ❤️ como parte de la Evaluación Integral del curso 1857 - Diseño y Desarrolo Web.

