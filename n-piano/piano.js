const teclasIds = ['teclado1', 'teclado#1', 'teclare1', 'teclare#1', 'teclami1', 'teclafa1', 'teclafa#1', 'teclasol1', 'teclasol#1', 'teclala1', 'teclala#1', 'teclasi1', 'teclado2', 'teclado#2', 'teclare2', 'teclare#2', 'teclami2', 'teclafa2', 'teclafa#2', 'teclasol2', 'teclasol#2', 'teclala2', 'teclala#2', 'teclasi2', 'teclado3', 'teclado#3', 'teclare3', 'teclare#3', 'teclami3', 'teclafa3', 'teclafa#3', 'teclasol3', 'teclasol#3', 'teclala3', 'teclala#3', 'teclasi'3];

const archivoSonido = ['sonidos-piano/1-do1.mp3', 'sonidos/10 MI2.mp3', 'sonidos/9 RE2.mp3', 'sonidos/8 DO_01.mp3', 'sonidos/7 SI.mp3', 'sonidos/6 LA.mp3', 'sonidos/5 SOL.mp3', 'sonidos/4 FA.mp3', 'sonidos/3 MI.mp3', 'sonidos/2 RE.mp3', 'sonidos/1-DO-Tecla+grande.mp3'];

for (let i = 0; i < teclasIds.length; i++) {
let tecla = document.getElementById(teclasIds[i]);
    tecla.addEventListener('mousedown', () => {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", archivoSonido[i]);
    etiquetaAudio.play();
});
}
let boton = document.querySelector(".reproductor");