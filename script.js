(function (window) {
var a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
for (var i in a) 
{
 var firstLetter = ((a[i]).charAt(0)).toLowerCase();
  if (firstLetter == 'j') {
     window.byeSpeaker.speak(a[i]);
  } else {
     window.helloSpeaker.speak(a[i]);
  }
}
})(window);