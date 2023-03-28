let tecla1 = document.getElementById('tecla1m')
let tecla2 = document.getElementById('tecla2m')
let tecla3 = document.getElementById('tecla3m')
let tecla4 = document.getElementById('tecla4m')
let tecla5 = document.getElementById('tecla5m')
let tecla6 = document.getElementById('tecla6m')
let tecla7 = document.getElementById('tecla7m')
let tecla8 = document.getElementById('tecla8m')
let tecla9 = document.getElementById('tecla9m')
let tecla10 = document.getElementById('tecla10m')
let tecla11 = document.getElementById('tecla11m')

/* tecla1.addEventListener('mousedown', () => {
    add()
}) */

let boton = document.querySelector(".reproductor")

tecla1.addEventListener('mousedown', () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "sonidos/11 FA2.mp3")
    etiquetaAudio.play()
    })

tecla2.addEventListener('mousedown', () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "sonidos/10 MI2.mp3")
    etiquetaAudio.play()
    })

tecla3.addEventListener('mousedown', () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "sonidos/9 RE2.mp3")
    etiquetaAudio.play()
    })

tecla4.addEventListener('mousedown', () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "sonidos/8 DO_01.mp3")
    etiquetaAudio.play()
    })

tecla5.addEventListener('mousedown', () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "sonidos/7 SI.mp3")
    etiquetaAudio.play()
    })

tecla6.addEventListener('mousedown', () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "sonidos/6 LA.mp3")
    etiquetaAudio.play()
    })

tecla7.addEventListener('mousedown', () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "sonidos/5 SOL.mp3")
    etiquetaAudio.play()
    })

tecla8.addEventListener('mousedown', () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "sonidos/4 FA.mp3")
    etiquetaAudio.play()
    })

tecla9.addEventListener('mousedown', () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "sonidos/3 MI.mp3")
    etiquetaAudio.play()
    })

tecla10.addEventListener('mousedown', () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "sonidos/2 RE.mp3")
    etiquetaAudio.play()
    })

tecla11.addEventListener('mousedown', () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "sonidos/1 DO-Tecla+grande.mp3")
    etiquetaAudio.play()
    })

/* tecla11.addEventListener('keydown', (event) => {
    if (event.key === "a") {
        let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "sonidos/1 DO-Tecla+grande.mp3");
    etiquetaAudio.play();
    }}); */

/* document.querySelectorAll(".white-key").forEach(key => {
    key.addEventListener("click", function() {
        switch (key.id) {
          case "a":
            <audio src="sonidos/2 RE.mp3"></audio>;
            break;
          case "b":
            jsNota(220);}});
 */

/* tecla11.addEventListener('keydown', (event) => {
    if (event.key === "a") {
        const 
        let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "sonidos/1 DO-Tecla+grande.mp3");
    etiquetaAudio.play();
    }}); */

//--------------------------------

/* // seleccionamos el botón y el elemento de audio
const button = document.querySelector("tecla1");
const audio = document.querySelector("src", "sonidos/11 FA_01.mp3");

// añadimos el event listener para el evento "keydown" en el objeto "document"
document.addEventListener("keydown", function(event) {
  if (event.key === "a") { // comprobamos si la tecla presionada es la tecla "a"
    audio.play(); // activamos el sonido correspondiente
  }
});

// añadimos el event listener para el evento "click" en el botón
button.addEventListener("click", function() {
  audio.play(); // activamos el sonido correspondiente al hacer clic en el botón
}); */