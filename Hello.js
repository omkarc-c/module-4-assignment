(function (window) {
var helloSpeaker = {};
var speakWord = "Hello";
helloSpeaker.speak = function (a) {
  console.log(speakWord + " " + a);
}
window.helloSpeaker = helloSpeaker;

})(window);