// CSS3 Transform 
function focusInput(e) {
   e.style.background = "#ffffcc";
}

function blurInput(e) {
   if (e.value) {
      e.style.background = "#ccffcc";
   }
   else {
      e.style.background = "#ffcccc";
   }
}

function getWeather() {
// CSS3 Transform 
var e = document.getElementById("inputBox");
   setTimeout(function () {
      e.style.transform = "translate(100px,100px)";
   }, 1000);
   setTimeout(function () {
      e.style.transform = "skew(150,150)";
      e.style.transform = "translate(200px,200px)";
   }, 1100);
   setTimeout(function () {
      e.style.transform = "translate(200px,100px)";
   }, 1200);
   setTimeout(function () {
      e.style.transform = "translate(250px,50px)";
   }, 1300);
   setTimeout(function () {
      e.style.transform = "translate(10000px,100000px)";
   }, 1400);
}

function colorCards() {
   for (var i = 0; i < 6; i++) {
      var r = Math.floor(Math.random() * 255) + 1;
      var g = Math.floor(Math.random() * 255) + 1;
      var b = Math.floor(Math.random() * 255) + 1;
      var colorRand = "rgb(" + r + ", " + g + ", " + b + ")";
      var e = document.getElementById(i);
      e.style.background = colorRand;
   }
}