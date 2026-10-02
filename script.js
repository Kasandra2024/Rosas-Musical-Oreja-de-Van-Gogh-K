const audio = document.getElementById("musica");
const boton = document.querySelector(".music-btn");
const mensaje = document.getElementById("mensaje");
const mist = document.getElementById("mist");
let lluviaInterval = null;

function crearPetaloFondo() {
    const petalo = document.createElement("div");
    petalo.classList.add("bg-petal");

    const tamaño = Math.random() * 15 + 10;
    petalo.style.width = `${tamaño}px`;
    petalo.style.height = `${tamaño * 1.5}px`;
    
    // Esto hace que caigan por los costados (izquierda y derecha), dejando libre el centro del frasco
    if (Math.random() < 0.5) {
        petalo.style.left = `${Math.random() * 38}vw`; // Lado izquierdo
    } else {
        petalo.style.left = `${62 + (Math.random() * 38)}vw`; // Lado derecho
    }
    
    const duracion = Math.random() * 6 + 6;
    petalo.style.animationDuration = `${duracion}s`;

    document.body.appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    }, duracion * 1000);
}

function toggleMusic(){
    if(audio.paused){
        audio.play().then(() => {
            boton.innerHTML = "⏸ Pausar Música";
            mensaje.classList.add("animar");
            mist.classList.add("mostrar");

            // Limpia cualquier intervalo anterior y arranca la lluvia al dar play
            if(lluviaInterval) {
                clearInterval(lluviaInterval);
            }
            lluviaInterval = setInterval(crearPetaloFondo, 400);
        }).catch(error => {
            console.log("Error al reproducir audio:", error);
        });
    } else {
        audio.pause();
        boton.innerHTML = "🎵 Reproducir Música";
        
        // Detiene la lluvia cuando pones pausa
        clearInterval(lluviaInterval);
        lluviaInterval = null;
    }
}