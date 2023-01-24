const video = document.querySelector(".video");
const play = document.querySelector(".button_play");
const mute = document.querySelector(".button_mute");
const mas_vol = document.querySelector(".button_mas_volumen");
const menos_vol = document.querySelector(".button_menos_volumen");

function playpausevideo() {
   if (video.paused) {//click y video por default en PAUSE
      video.play()//ejecuta PLAY
   } else {
      video.pause()
   }
}

function mutevideo(){
   if (!video.muted) {
      video.muted=true
   }else{
      video.muted=false
   }
}

function masvolumen(){
      video.volume = video.volume + 0.1
}
function menosvolumen(){
      video.volume = video.volume - 0.1
}

play.addEventListener("click", playpausevideo);
mute.addEventListener("click", mutevideo);
mas_vol.addEventListener("click", masvolumen);//por cada click SUBE VOLUMEN
menos_vol.addEventListener("click", menosvolumen);

