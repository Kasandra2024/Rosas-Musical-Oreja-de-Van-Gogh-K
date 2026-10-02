const audio = document.getElementById("musica");
const boton = document.querySelector(".music-btn");
const mensaje = document.getElementById("mensaje");
const mist = document.getElementById("mist");

function crearPetaloFondo() {
    const petalo = document.createElement("div");
    petalo.classList.add("bg-petal");

    const tamaño = Math.random() * 15 + 10;
    petalo.style.width = `${tamaño}px`;
    petalo.style.height = `${tamaño * 1.5}px`;
    
    // Forzar posición fija y aleatoria en todo el ancho de la pantalla
    petalo.style.position = "fixed";
    petalo.style.top = "-20px";
    petalo.style.left = `${Math.random() * 100}vw`;
    
    const duracion = Math.random() * 6 + 6;
    petalo.style.animationDuration = `${duracion}s`;

    document.body.appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    }, duracion * 1000);
}

// Inicia la lluvia de pétalos de forma continua desde el primer segundo que carga la página
setInterval(crearPetaloFondo, 400);

function toggleMusic(){
    if(audio.paused){
        audio.play().then(() => {
            boton.innerHTML = "⏸ Pausar Música";
            mensaje.classList.add("animar");
            mist.classList.add("mostrar");
        }).catch(error => {
            console.log("Error al reproducir audio:", error);
        });
    } else {
        audio.pause();
        boton.innerHTML = "🎵 Reproducir Música";
    }
}