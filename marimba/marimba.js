const teclasIds = ['tecla1m', 'tecla2m', 'tecla3m', 'tecla4m', 'tecla5m', 'tecla6m', 'tecla7m', 'tecla8m', 'tecla9m', 'tecla10m', 'tecla11m'];

const archivoSonido = ['sonidos/11 FA2.mp3', 'sonidos/10 MI2.mp3', 'sonidos/9 RE2.mp3', 'sonidos/8 DO_01.mp3', 'sonidos/7 SI.mp3', 'sonidos/6 LA.mp3', 'sonidos/5 SOL.mp3', 'sonidos/4 FA.mp3', 'sonidos/3 MI.mp3', 'sonidos/2 RE.mp3', 'sonidos/1-DO-Tecla+grande.mp3'];

function sonidoMouse(teclasIds, archivoSonido) {
    for (let i = 0; i < teclasIds.length; i++) {
    let tecla = document.getElementById(teclasIds[i]);
    tecla.addEventListener('mousedown', () => {
        let etiquetaAudio = document.createElement("audio");
        etiquetaAudio.setAttribute("src", archivoSonido[i]);
        etiquetaAudio.play();
    });
    }
    let boton = document.querySelector(".reproductor");
}
sonidoMouse(teclasIds, archivoSonido);


//Arriba versión click-ratón. Abajo versión keyboard-------------------------------

const teclas = [
    { letra: "a", sonido: "sonidos/11 FA2.mp3"},
    { letra: "s", sonido: "sonidos/10 MI2.mp3" },
    { letra: "d", sonido: "sonidos/9 RE2.mp3" },
    { letra: "f", sonido: "sonidos/8 DO_01.mp3" },
    { letra: "g", sonido: "sonidos/7 SI.mp3" },
    { letra: "h", sonido: "sonidos/6 LA.mp3" },
    { letra: "j", sonido: "sonidos/5 SOL.mp3" },
    { letra: "k", sonido: "sonidos/4 FA.mp3" },
    { letra: "l", sonido: "sonidos/3 MI.mp3" },
    { letra: "ñ", sonido: "sonidos/2 RE.mp3" },
    { letra: "ç", sonido: "sonidos/1-DO-Tecla+grande.mp3" },
];

function sonidoKeyboard(teclas) {
    for (let i = 0; i < teclas.length; i++) {
    const tecla = teclas[i];
    document.addEventListener('keypress', (e) => {
        if (e.key === tecla.letra) {
        const etiquetaAudio = document.createElement("audio");
        etiquetaAudio.setAttribute("src", tecla.sonido);
        etiquetaAudio.play();
        }
    });
    }
}
sonidoKeyboard(teclas);

//Abajo funcionalidad color teclas---------------------------------------------------

function cambioColorTeclas(teclas, teclasIds) {
    for (let i = 0; i < teclas.length; i++) {
    const tecla = teclas[i];
    document.addEventListener('keydown', (e) => {
        if (e.key === tecla.letra) {
        let teclaBlanca = document.getElementById(teclasIds[i])
        teclaBlanca.style.backgroundColor = "#C48F8F"
        console.log(teclaBlanca);
        }
    })
    document.addEventListener('keyup', (e) => {
        if (e.key === tecla.letra) {
        let teclaBlanca = document.getElementById(teclasIds[i])
        teclaBlanca.style.backgroundColor = "rgb(255, 255, 255)"
        console.log(teclaBlanca);
        }
    });
    }
}
cambioColorTeclas(teclas, teclasIds);