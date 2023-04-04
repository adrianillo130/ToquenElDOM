const teclasIds = ['crash1img', 'splashimg', 'crash2img', 'hi-hatimg', 'tom1img', 'tom2img', 'snareimg', 'bassimg', 'kickimg'];

const teclasTap = ['crash1-tap', 'splash-tap', 'crash2-tap', 'hi-hat-tap', 'tom1-tap', 'tom2-tap', 'snare-tap', 'bass-tap', 'kick-tap'];

const archivoSonido = ['sonidos/Crash 01.mp3', 'sonidos/Splash 01.mp3', 'sonidos/Crash 02.mp3', 'sonidos/hi-hat.mp3', 'sonidos/tom1.mp3', 'sonidos/tom2.mp3', 'sonidos/snare.mp3', 'sonidos/Bass drum hit.mp3', 'sonidos/kick.wav'];

/* --------------------------------------------------- */

function cambioColorTeclas(teclasIds, teclasTap) {
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