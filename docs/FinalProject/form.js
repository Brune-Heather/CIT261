if(localStorage.getItem("userZip") == null) {
   console.log("null zip");
   var inputBox = document.getElementById("inputBox");
   inputBox.style.visibility = "visible";
}
else {
   AJAX(localStorage.getItem("userZip"));
}

function setWeather() {
   storeUser();
   // Transform 
   var e = document.getElementById("inputBox");
   setTimeout(function () {
      e.style.transform = "translate(100px,100px)";
   }, 500);
   setTimeout(function () {
      e.style.transform = "skew(150,150)";
      e.style.transform = "translate(200px,200px)";
   }, 600);
   setTimeout(function () {
      e.style.transform = "translate(200px,100px)";
   }, 700);
   setTimeout(function () {
      e.style.transform = "translate(250px,50px)";
   }, 800);
   setTimeout(function () {
      e.style.transform = "translate(10000px,100000px)";
   }, 900);

   setTimeout(function () {
   // get form data   
      var userZip = document.getElementById("zip").value;
      AJAX(userZip);
      
   }, 950);
}

function AJAX(zip) {
   var str = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&APPID=1e8acbd94f047f3c824ab1a481643b07";
      
   // AJAX call to API  
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
   // STRINGIFY
            var str = this.response;
   // store to local storage
            localStorage.setItem("userWeather", str);
               displayWeather();
               console.log("weather is up to date")
         }
      };
      xhttp.open("GET", str, true);
      xhttp.send();
}

function displayWeather() {
   var cardCase = document.getElementById("cardCase");
   cardCase.style.visibility = "visible";
   // access locally storage
   var str = localStorage.getItem("userWeather");
   // PARSE
   var weather = JSON.parse(str);
   // Present Data   
   var JSONtemp = k2f(weather.main.temp);
   var div = document.getElementById("temp");
   div.innerHTML += JSONtemp;

   var highTemp = k2f(weather.main.temp_max);
   var div = document.getElementById("high");
   div.innerHTML += highTemp;

   var LowTemp = k2f(weather.main.temp_min);
   var div = document.getElementById("low");
   div.innerHTML += LowTemp;

   var humidity = weather.main.humidity + "&#37;";
   var div = document.getElementById("humidity");
   div.innerHTML += humidity;
   //Greet user
   var name = localStorage.getItem("user");
   document.getElementById("greet").innerHTML += "Welcome, " + name + ". Here is the weather in " + weather.name + ".";
}

function k2f(kelvin) {
   var f = Math.round((kelvin - 273.15) * 9/5 + 32) + "&#8457";
   return f;
}

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

function storeUser() {
   localStorage.setItem("user", document.getElementById("name").value);
   localStorage.setItem("userZip", document.getElementById("zip").value);
}

function forgetMe() {
   localStorage.clear();
   location.reload(true);
}