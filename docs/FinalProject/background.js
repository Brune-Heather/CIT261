var canvas = document.getElementById("myCanvas");
// makes canvas reach the entire space of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

function Circle(x, y, dx, dy) {
   this.x = x;
   this.y = y;
   this.dx = dx;
   this.dy = dy;

   this.draw = function() {
      var rain = new Image();
      rain.src = "raindrop.png";
      c.drawImage(rain, this.x, this.y, 20, 35);
   }

   this.update = function() {
      this.y += this.dy; 
      this.draw();
   }
}

var circleArray = [];
function animate() {
   for(var i = 0; i < 10; i++) {
   var x = (Math.random() * (innerWidth* 2)) + 275;
   var y = (Math.random() * (innerHeight * 2)) + 130;
   var dx = (Math.random() * 20) + 5; //velocity of x
   var dy = (Math.random() * 20) + 5; //velocity of y
   circleArray.push(new Circle(x, y, dx, dy));
   var circle = new Circle(200, 200, 4, 4);
   }

   requestAnimationFrame(animate);
   c.clearRect(0, 0, innerWidth, innerHeight);
   for (var i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
   }
}
animate();