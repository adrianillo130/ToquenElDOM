const partesbateriaIds = ['crash1img', 'splashimg', 'crash2img', 'hi-hatimg', 'tom1img', 'tom2img', 'snareimg', 'bassimg', 'kickimg'];

const partesbateriaTap = ['crash1-tap', 'splash-tap', 'crash2-tap', 'hi-hat-tap', 'tom1-tap', 'tom2-tap', 'snare-tap', 'bass-tap', 'kick-tap'];

const archivoSonido = ['sonidos/Crash 01.mp3', 'sonidos/Splash 01.mp3', 'sonidos/Crash 02.mp3', 'sonidos/hi-hat.mp3', 'sonidos/tom1.mp3', 'sonidos/tom2.mp3', 'sonidos/snare.mp3', 'sonidos/Bass drum hit.mp3', 'sonidos/kick.wav'];

/* --------------------------------------------------- */

function cambioColorTeclas(partesbateriaIds, partesbateriaTap) {
    for (let i = 0; i < partesbateriaTap.length; i++) {
    const parte = partesbateriaTap[i];
    document.addEventListener('keydown', (e) => {
        if (e.key === parte.letra) {
        let bateria = document.getElementById(partesbateriaIds[i])
        bateria.style.backgroundColor = "#C0C0C0"
        console.log(bateria);
        }
    })
    document.addEventListener('keyup', (e) => {
        if (e.key === parte.letra) {
        let bateria = document.getElementById(partesbateriaIds[i])
        bateria.style.backgroundColor = "#C48F8F"
        console.log(bateria);
        }
    });
    }
}
cambioColorTeclas(partesbateriaTap, partesbateriaIds);