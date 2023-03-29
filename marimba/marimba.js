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
    etiquetaAudio.setAttribute("src", "sonidos/1-DO-Tecla+grande.mp3")
    etiquetaAudio.play()
    })

//Arriba versión click-ratón. Abajo versión keyboard.

document.addEventListener('keypress', (e) => {
        console.log(e.key)
        if (e.key === "a") {
            let etiquetaAudio = document.createElement("audio");
            etiquetaAudio.setAttribute("src", "sonidos/11 FA2.mp3");
            console.log(etiquetaAudio)
            etiquetaAudio.play();
    }})

document.addEventListener('keypress', (e) => {
        console.log(e.key)
        if (e.key === "s") {
                let etiquetaAudio = document.createElement("audio");
            etiquetaAudio.setAttribute("src", "sonidos/10 MI2.mp3");
            console.log(etiquetaAudio)
            etiquetaAudio.play();
    }})

document.addEventListener('keypress', (e) => {
        console.log(e.key)
        if (e.key === "d") {
                let etiquetaAudio = document.createElement("audio");
            etiquetaAudio.setAttribute("src", "sonidos/9 RE2.mp3");
            console.log(etiquetaAudio)
            etiquetaAudio.play();
    }})

document.addEventListener('keypress', (e) => {
        console.log(e.key)
        if (e.key === "f") {
                let etiquetaAudio = document.createElement("audio");
            etiquetaAudio.setAttribute("src", "sonidos/8 DO_01.mp3");
            console.log(etiquetaAudio)
            etiquetaAudio.play();
    }})

document.addEventListener('keypress', (e) => {
        console.log(e.key)
        if (e.key === "g") {
                let etiquetaAudio = document.createElement("audio");
            etiquetaAudio.setAttribute("src", "sonidos/7 SI.mp3");
            console.log(etiquetaAudio)
            etiquetaAudio.play();
    }})

document.addEventListener('keypress', (e) => {
        console.log(e.key)
        if (e.key === "h") {
                let etiquetaAudio = document.createElement("audio");
            etiquetaAudio.setAttribute("src", "sonidos/6 LA.mp3");
            console.log(etiquetaAudio)
            etiquetaAudio.play();
    }})

document.addEventListener('keypress', (e) => {
        console.log(e.key)
        if (e.key === "j") {
                let etiquetaAudio = document.createElement("audio");
            etiquetaAudio.setAttribute("src", "sonidos/5 SOL.mp3");
            console.log(etiquetaAudio)
            etiquetaAudio.play();
    }})

document.addEventListener('keypress', (e) => {
        console.log(e.key)
        if (e.key === "k") {
                let etiquetaAudio = document.createElement("audio");
            etiquetaAudio.setAttribute("src", "sonidos/4 FA.mp3");
            console.log(etiquetaAudio)
            etiquetaAudio.play();
    }})

document.addEventListener('keypress', (e) => {
        console.log(e.key)
        if (e.key === "l") {
                let etiquetaAudio = document.createElement("audio");
            etiquetaAudio.setAttribute("src", "sonidos/3 MI.mp3");
            console.log(etiquetaAudio)
            etiquetaAudio.play();
    }})

document.addEventListener('keypress', (e) => {
        console.log(e.key)
        if (e.key === "ñ") {
                let etiquetaAudio = document.createElement("audio");
            etiquetaAudio.setAttribute("src", "sonidos/2 RE.mp3");
            console.log(etiquetaAudio)
            etiquetaAudio.play();
    }})

document.addEventListener('keypress', (e) => {
        console.log(e.key)
        if (e.key === "ç") {
                let etiquetaAudio = document.createElement("audio");
            etiquetaAudio.setAttribute("src", "sonidos/1-DO-Tecla+grande.mp3");
            console.log(etiquetaAudio)
            etiquetaAudio.play();
    }})