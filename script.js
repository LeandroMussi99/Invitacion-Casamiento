// script.js
// Manejo Contador 
document.addEventListener('DOMContentLoaded', function () {
    const weddingDate = new Date('2025-02-07T20:00:00'); 
    const labels = {
        full: { days: "Días", hours: "Horas", minutes: "Minutos", seconds: "Segundos" },
        short: { days: "Días", hours: "Hrs", minutes: "Min", seconds: "Seg" }
    };

    function updateCountdown() {
        const now = new Date();
        const timeLeft = weddingDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;

            updateLabels(); // Asegurar que las etiquetas son correctas
        } else {
            document.getElementById('timer').textContent = '¡Hoy es el gran día!';
        }
    }

    function updateLabels() {
        const isSmallScreen = window.innerWidth <= 359;
        const labelsToUse = isSmallScreen ? labels.short : labels.full;

        document.querySelector('#days').nextSibling.textContent = labelsToUse.days;
        document.querySelector('#hours').nextSibling.textContent = labelsToUse.hours;
        document.querySelector('#minutes').nextSibling.textContent = labelsToUse.minutes;
        document.querySelector('#seconds').nextSibling.textContent = labelsToUse.seconds;
    }

    // Ejecutar al cargar y en cada intervalo
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Actualizar etiquetas al cambiar tamaño de pantalla
    window.addEventListener('resize', updateLabels);
});




// Manejo de invitados
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id"); // Obtener el ID del URL

    if (id) {
        fetch("invitados.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al cargar el archivo JSON");
                }
                return response.json();
            })
            .then(data => {
                const invitado = data.find(i => i.id === parseInt(id));
                if (invitado) {
                    document.getElementById("nombre-invitado").textContent = `${invitado.nombre}`;
                } else {
                    document.getElementById("nombre-invitado").textContent = "Invitado no encontrado";
                }
            })
            .catch(error => {
                console.error("Error:", error);
                document.getElementById("nombre-invitado").textContent = "Error al cargar los datos";
            });
    } else {
        document.getElementById("nombre-invitado").textContent = "ID de invitado no especificado";
    }
});

// Manejo de musica
    const musicControl = document.getElementById("music-control");
    const backgroundMusic = document.getElementById("background-music");

    musicControl.addEventListener("click", () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicControl.innerHTML = '<i class="fas fa-pause"></i>'; // Cambia al ícono de pausa
        } else {
            backgroundMusic.pause();
            musicControl.innerHTML = '<i class="fas fa-play"></i>'; // Cambia al ícono de play
        }
    });

 
  if (navigator.userAgent.match(/samsung/i)) {
    document.addEventListener("DOMContentLoaded", function() {
      const warningBanner = document.createElement("div");
      warningBanner.style.cssText = `
        position: fixed;
        top: 0;
        width: 100%;
        background-color: #ffcc00;
        color: black;
        text-align: center;
        padding: 10px;
        z-index: 9999;
        font-size: 16px;
      `;
      warningBanner.innerHTML = `
        Es posible que su navegador (Samsung Internet) no muestre este sitio web correctamente.
        Recomendamos desactivar el modo oscuro o utilizar Firefox, Microsoft Edge o Google Chrome.
        <button style="margin-left: 10px; padding: 5px;" onclick="this.parentNode.remove()">Cerrar</button>
      `;
      document.body.appendChild(warningBanner);
    });
  }

// Detectar los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const soloCeremonia = params.get("onlyCer");

// Si el parámetro "soloCeremonia" existe, ocultamos la información de la quinta
if (soloCeremonia) {
    // Cambiar el texto de la invitación
    document.getElementById("descripcion-invitacion").textContent =
        "Los esperamos el viernes 7 de febrero de 2025 en la iglesia a las 19:30 hs para celebrar nuestra unión.";
    
    // Ocultar la tarjeta de la quinta
    const ubicacionTarjetas = document.getElementById("ubicacion-tarjetas");
    if (ubicacionTarjetas) {
        ubicacionTarjetas.style.display = "none";
    }
}


