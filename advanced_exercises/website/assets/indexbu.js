import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.ts";
/*
  MediaPlayer.prototype.play = function () {
    if (this.media.paused) {
      this.media.play();
    }
    else
    {
        this.media.pause();
    }
  };*/
const video = document.querySelector("video");
const button = document.querySelector("button");
const button2 = document.getElementById("muteunmute");
const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay(),
    new AutoPause()
  ],
});
button.onclick = () => player.togglePlay();
button2.onclick = () => player.toggleMute();

// if('serviceWorker' in navigator){
//   navigator.serviceWorker.register('/sw.js').catch(error => {
//     console.log(error.message);
//   })
// }
