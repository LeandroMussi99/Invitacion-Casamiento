// script.js
document.addEventListener('DOMContentLoaded', function () {
    const weddingDate = new Date('2025-02-07T20:00:00'); 

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
        } else {
            document.getElementById('timer').textContent = '¡Hoy es el gran día!';
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Llamar inmediatamente para mostrar al cargar
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


