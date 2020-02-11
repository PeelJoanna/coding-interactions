//Make a circle that flees to a random location every time you point the mouse at it.
//Use dist().

function sketch_f_flee(p) {
  var circleX = 0;
  var circleY = 0;
  var circleSize = 100;
  var destinationX = -1;
  var destinationY = -1;
  
  p.setup = function() {
    p.createCanvas(800, 800);
    circleX = p.width/2;
    circleY = p.height/2;
  }

  // add or remove _step_ from circleX to make it closer to destinationX
  function nextPosition(circleX, destinationX, step) {
      if (circleX - step > destinationX) {
        circleX = circleX - step;
      } else if (circleX + step < destinationX) {
        circleX = circleX + step;
      }
      return circleX;
  }

  p.draw = function () {
    p.background(0);

    // Test if the cursor is over the circle
    if (p.dist(p.mouseX, p.mouseY, circleX, circleY) < circleSize) {
      var radius = circleSize / 2;
      destinationX = p.random(radius, p.width - radius);
      destinationY = p.random(radius, p.height - radius);
    }
  
    // prevent the circle to move when mouse did not enter screen yet
    if (destinationX != -1 && destinationY != -1) {
      // assign new position X nearest from destination by 1
      circleX = nextPosition(circleX, destinationX, 1);
      // assign new position Y nearest from destination by 1
      circleY = nextPosition(circleY, destinationY, 1);
    }
  
    p.stroke(255);
    p.fill(255,0,0);
    p.ellipse(circleX, circleY, circleSize, circleSize);
  }
}
new p5(sketch_f_flee, 'f_flee')