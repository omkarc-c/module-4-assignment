(function (window) {
var byeSpeaker = {};
var speakWord = "Good Bye";
byeSpeaker.speak = function (a) {
  console.log(speakWord + " " + a);
}
window.byeSpeaker = byeSpeaker;

})(window);