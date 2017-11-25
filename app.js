var snare = new Howl({
  src: ['assets/snare.mp3']
});
var kick = new Howl({
  src: ['assets/kick.mp3']
});
var hiHat = new Howl({
  src: ['assets/closedHiHat.mp3']
});


function playSnare() {
  snare.play();
}
function playKick() {
  kick.play();
}
function playHat() {
  hiHat.play();
}
