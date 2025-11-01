# 💍 Invitación de Casamiento — Vivi & Leo

Proyecto web estático para compartir la **invitación digital del casamiento de Vivi y Leo**.  
Incluye un contador regresivo dinámico, personalización por invitado, información de la ceremonia y la fiesta, además de música de fondo y animaciones suaves.

---

## 🖼️ Vista general del diseño

> La invitación se adapta automáticamente a distintos dispositivos (celular, tablet, notebook o PC de escritorio).

<img width="3000" height="2000" alt="demo3" src="https://github.com/user-attachments/assets/b90bc2fe-db25-43b8-bc5a-9fcb41e28c5c" />

---

## ✨ Características principales

- ⏳ **Contador regresivo inteligente**: muestra el tiempo restante hasta la ceremonia y, una vez pasada la fecha, indica cuánto tiempo llevan casados.  
- 🧍‍♂️ **Personalización por invitado**: cada invitado ve su nombre cargado desde `invitados.json` mediante el parámetro `id` en la URL.  
- ⛪ **Modo “solo ceremonia”**: el parámetro `onlyCer` permite ocultar la información de la fiesta para invitados exclusivos de la iglesia.  
- 🗺️ **Tarjetas de ubicación interactivas**: con efecto “flip” para mostrar iglesia y salón, incluyendo enlaces directos a Google Maps.  
- 🎵 **Música ambiental**: reproducción automática con botón flotante para pausar o reanudar.  
- 📱 **Diseño responsive** con animaciones y transiciones suaves.  

---

## 🧩 Estructura del proyecto

```text
Invitacion-Casamiento/
├── img/              # Recursos gráficos (logo, fotos, íconos)
├── musica/           # Pista de audio de fondo
├── index.html        # Página principal
├── script.js         # Lógica del contador, invitados y música
├── styles.css        # Estilos y animaciones
├── invitados.json    # Lista de invitados con identificadores
└── README.md         # Documentación del proyecto
```

## ⚙️ Requisitos

No se necesitan dependencias ni instalación.
Solo requerís un navegador moderno compatible con HTML5, CSS3 y JavaScript.

## 🚀 Cómo ejecutar el proyecto

1. Abrí el proyecto en **Visual Studio Code**.  
2. Hacé clic en **Go Live** (requiere la extensión *Live Server*).  
3. Se abrirá automáticamente en tu navegador (por defecto en `http://127.0.0.1:5500/`).  
4. Agregá parámetros en la URL para personalizar la invitación:
   http://127.0.0.1:5500/index.html?id=1
   o con modo solo ceremonia:
   http://127.0.0.1:5500/index.html?id=2&onlyCer=true



