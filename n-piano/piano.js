const teclasIds = ['teclado1', 'teclado#1', 'teclare1', 'teclare#1', 'teclami1', 'teclafa1', 'teclafa#1', 'teclasol1', 'teclasol#1', 'teclala1', 'teclala#1', 'teclasi1', 'teclado2', 'teclado#2', 'teclare2', 'teclare#2', 'teclami2', 'teclafa2', 'teclafa#2', 'teclasol2', 'teclasol#2', 'teclala2', 'teclala#2', 'teclasi2', 'teclado3', 'teclado#3', 'teclare3', 'teclare#3', 'teclami3', 'teclafa3', 'teclafa#3', 'teclasol3', 'teclasol#3', 'teclala3', 'teclala#3', 'teclasi3'];

const archivoSonido = ['sonidos-piano/1-do1.mp3', 'sonidos-piano/2-doS1.mp3', 'sonidos-piano/3-re1.mp3', 'sonidos-piano/4-reS1.mp3', 'sonidos-piano/5-mi1.mp3', 'sonidos-piano/6-fa1.mp3', 'sonidos-piano/7-faS1.mp3', 'sonidos-piano/8-sol1.mp3', 'sonidos-piano/9-solS1.mp3', 'sonidos-piano/10-la1.mp3', 'sonidos-piano/11-laS1.mp3', 'sonidos-piano/12-si1.mp3', 'sonidos-piano/13-do2.mp3', 'sonidos-piano/14-doS2.mp3', 'sonidos-piano/15-re2.mp3', 'sonidos-piano/16-reS2.mp3', 'sonidos-piano/17-mi2.mp3', 'sonidos-piano/18-fa2.mp3', 'sonidos-piano/19-faS2.mp3', 'sonidos-piano/20-sol2.mp3', 'sonidos-piano/21-solS2.mp3', 'sonidos-piano/22-la2.mp3', 'sonidos-piano/23-laS2.mp3', 'sonidos-piano/24-si2.mp3', 'sonidos-piano/25-do3.mp3', 'sonidos-piano/26-doS3.mp3', 'sonidos-piano/27-re3.mp3', 'sonidos-piano/28-reS3.mp3', 'sonidos-piano/29-mi3.mp3', 'sonidos-piano/30-fa3.mp3', 'sonidos-piano/31-faS3.mp3', 'sonidos-piano/32-sol3.mp3', 'sonidos-piano/33-solS3.mp3', 'sonidos-piano/34-la3.mp3', 'sonidos-piano/35-laS3.mp3', 'sonidos-piano/36-si3.mp3'];

function sonidoMouse(teclasIds, archivoSonido) {
    for (let i = 0; i < teclasIds.length; i++) {
    let tecla = document.getElementById(teclasIds[i]);
    tecla.addEventListener('mousedown', () => {
        let etiquetaAudio = document.createElement("audio");
        etiquetaAudio.setAttribute("src", archivoSonido[i]);``
        etiquetaAudio.play();
    });
    }
    let boton = document.querySelector(".reproductor");
}
sonidoMouse(teclasIds, archivoSonido);

//-------------------------------------

const teclas = [
    { letra: "q", sonido: "sonidos-piano/1-do1.mp3" },
    { letra: "2", sonido: "sonidos-piano/2-doS1.mp3" },
    { letra: "w", sonido: "sonidos-piano/3-re1.mp3" },
    { letra: "3", sonido: "sonidos-piano/4-reS1.mp3" },
    { letra: "e", sonido: "sonidos-piano/5-mi1.mp3" },
    { letra: "r", sonido: "sonidos-piano/6-fa1.mp3" },
    { letra: "5", sonido: "sonidos-piano/7-faS1.mp3" },
    { letra: "t", sonido: "sonidos-piano/8-sol1.mp3" },
    { letra: "6", sonido: "sonidos-piano/9-solS1.mp3" },
    { letra: "y", sonido: "sonidos-piano/10-la1.mp3" },
    { letra: "7", sonido: "sonidos-piano/11-laS1.mp3" },
    { letra: "u", sonido: "sonidos-piano/12-si1.mp3" },
    { letra: "z", sonido: "sonidos-piano/13-do2.mp3" },
    { letra: "s", sonido: "sonidos-piano/14-doS2.mp3" },
    { letra: "x", sonido: "sonidos-piano/15-re2.mp3" },
    { letra: "d", sonido: "sonidos-piano/16-reS2.mp3" },
    { letra: "c", sonido: "sonidos-piano/17-mi2.mp3" },
    { letra: "v", sonido: "sonidos-piano/18-fa2.mp3" },
    { letra: "g", sonido: "sonidos-piano/19-faS2.mp3" },
    { letra: "b", sonido: "sonidos-piano/20-sol2.mp3" },
    { letra: "h", sonido: "sonidos-piano/21-solS2.mp3" },
    { letra: "n", sonido: "sonidos-piano/22-la2.mp3" },
    { letra: "j", sonido: "sonidos-piano/23-laS2.mp3" },
    { letra: "m", sonido: "sonidos-piano/24-si2.mp3" },
    { letra: "Z", sonido: "sonidos-piano/25-do3.mp3" },
    { letra: "S", sonido: "sonidos-piano/26-doS3.mp3" },
    { letra: "X", sonido: "sonidos-piano/27-re3.mp3" },
    { letra: "D", sonido: "sonidos-piano/28-reS3.mp3" },
    { letra: "C", sonido: "sonidos-piano/29-mi3.mp3" },
    { letra: "V", sonido: "sonidos-piano/30-fa3.mp3" },
    { letra: "G", sonido: "sonidos-piano/31-faS3.mp3" },
    { letra: "B", sonido: "sonidos-piano/32-sol3.mp3" },
    { letra: "H", sonido: "sonidos-piano/33-solS3.mp3" },
    { letra: "N", sonido: "sonidos-piano/34-la3.mp3" },
    { letra: "J", sonido: "sonidos-piano/35-laS3.mp3" },
    { letra: "M", sonido: "sonidos-piano/36-si3.mp3" },
];

function sonidoKeyboard(teclas) {
    for (let i = 0; i < teclas.length; i++) {
    const tecla = teclas[i];
    document.addEventListener('keypress', (e) => {
        if (e.key === tecla.letra) {
        const etiquetaAudio = document.createElement("audio");
        console.log(etiquetaAudio)
        etiquetaAudio.setAttribute("src", tecla.sonido);
        etiquetaAudio.play();
        }
    });
    }
}
sonidoKeyboard(teclas);

/* function cambioColorTeclas(teclas, teclasIds) {
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
cambioColorTeclas(teclas, teclasIds); */

const teclasIdsb = ['teclado1', 'teclare1', 'teclami1', 'teclafa1', 'teclasol1', 'teclala1', 'teclasi1', 'teclado2', 'teclare2', 'teclami2', 'teclafa2', 'teclasol2', 'teclala2', 'teclasi2', 'teclado3', 'teclare3', 'teclami3', 'teclafa3', 'teclasol3', 'teclala3', 'teclasi3'];

const teclasIdsn = ['teclado#1', 'teclare#1', 'teclafa#1', 'teclasol#1', 'teclala#1', 'teclado#2', 'teclare#2', 'teclafa#2', 'teclasol#2', 'teclala#2', 'teclado#3', 'teclare#3','teclafa#3', 'teclasol#3', 'teclala#3'];

const teclasB = [
    { letra: "q", sonido: "sonidos-piano/1-do1.mp3" },
    { letra: "w", sonido: "sonidos-piano/3-re1.mp3" },
    { letra: "e", sonido: "sonidos-piano/5-mi1.mp3" },
    { letra: "r", sonido: "sonidos-piano/6-fa1.mp3" },
    { letra: "t", sonido: "sonidos-piano/8-sol1.mp3" },
    { letra: "y", sonido: "sonidos-piano/10-la1.mp3" },
    { letra: "u", sonido: "sonidos-piano/12-si1.mp3" },
    { letra: "z", sonido: "sonidos-piano/13-do2.mp3" },
    { letra: "x", sonido: "sonidos-piano/15-re2.mp3" },
    { letra: "c", sonido: "sonidos-piano/17-mi2.mp3" },
    { letra: "v", sonido: "sonidos-piano/18-fa2.mp3" },
    { letra: "b", sonido: "sonidos-piano/20-sol2.mp3" },
    { letra: "n", sonido: "sonidos-piano/22-la2.mp3" },
    { letra: "m", sonido: "sonidos-piano/24-si2.mp3" },
    { letra: "Z", sonido: "sonidos-piano/25-do3.mp3" },
    { letra: "X", sonido: "sonidos-piano/27-re3.mp3" },
    { letra: "C", sonido: "sonidos-piano/29-mi3.mp3" },
    { letra: "V", sonido: "sonidos-piano/30-fa3.mp3" },
    { letra: "B", sonido: "sonidos-piano/32-sol3.mp3" },
    { letra: "N", sonido: "sonidos-piano/34-la3.mp3" },
    { letra: "M", sonido: "sonidos-piano/36-si3.mp3" },
];

const teclasN = [
    { letra: "2", sonido: "sonidos-piano/2-doS1.mp3" },
    { letra: "3", sonido: "sonidos-piano/4-reS1.mp3" },
    { letra: "5", sonido: "sonidos-piano/7-faS1.mp3" },
    { letra: "6", sonido: "sonidos-piano/9-solS1.mp3" },
    { letra: "7", sonido: "sonidos-piano/11-laS1.mp3" },
    { letra: "s", sonido: "sonidos-piano/14-doS2.mp3" },
    { letra: "d", sonido: "sonidos-piano/16-reS2.mp3" },
    { letra: "g", sonido: "sonidos-piano/19-faS2.mp3" },
    { letra: "h", sonido: "sonidos-piano/21-solS2.mp3" },
    { letra: "j", sonido: "sonidos-piano/23-laS2.mp3" },
    { letra: "S", sonido: "sonidos-piano/26-doS3.mp3" },
    { letra: "D", sonido: "sonidos-piano/28-reS3.mp3" },
    { letra: "G", sonido: "sonidos-piano/31-faS3.mp3" },
    { letra: "H", sonido: "sonidos-piano/33-solS3.mp3" },
    { letra: "J", sonido: "sonidos-piano/35-laS3.mp3" },
];

function cambioColorTeclasB(teclasB, teclasIdsb) {
    for (let i = 0; i < teclasB.length; i++) {
    const teclab = teclasB[i];
    document.addEventListener('keydown', (e) => {
        if (e.key === teclab.letra) {
        let teclaBlanca = document.getElementById(teclasIdsb[i])
        teclaBlanca.style.backgroundColor = "#C48F8F"
        console.log(teclaBlanca);
        }
    })
    document.addEventListener('keyup', (e) => {
        if (e.key === teclab.letra) {
        let teclaBlanca = document.getElementById(teclasIdsb[i])
        teclaBlanca.style.backgroundColor = "rgb(255, 255, 255)"
        console.log(teclaBlanca);
        }
    });
    }
}
cambioColorTeclasB(teclasB, teclasIdsb);

function cambioColorTeclasN(teclasN, teclasIdsn) {
    for (let i = 0; i < teclasN.length; i++) {
    const teclan = teclasN[i];
    document.addEventListener('keydown', (e) => {
        if (e.key === teclan.letra) {
        let teclaNegra = document.getElementById(teclasIdsn[i])
        teclaNegra.style.backgroundColor = "#C48F8F"
        console.log(teclaNegra);
        }
    })
    document.addEventListener('keyup', (e) => {
        if (e.key === teclan.letra) {
        let teclaNegra = document.getElementById(teclasIdsn[i])
        teclaNegra.style.backgroundColor = "#000000"
        console.log(teclaNegra);
        }
    });
    }
}
cambioColorTeclasN(teclasN, teclasIdsn);
