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
    etiquetaAudio.setAttribute("src", "sonidos/1 DO-Tecla+grande.mp3")
    etiquetaAudio.play()
    })

