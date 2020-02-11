//Make a small square appear on the screen and drop towards the bottom. When it hits
//the bottom, have it bounce, but with gravity affecting it, such that each time it
//bounces, it bounces less high.

function sketch_d_gravity (p) {
  var x = 200;
  var y = 0;
  var yspeed = 5;
  var q = 200;
  var counter = 25;

  p.setup = function() {
    p.createCanvas(400,400);
    p.frameRate(30);
  }

  function mySquare(y) {
    p.stroke(0);
    p.strokeWeight(4); 
    p.fill(255);
    p.rectMode(p.CENTER);
    p.rect(x, y, 20, 20);
  }

  p.draw = function() {
    p.background(255, 204, 0);
    
    mySquare(y);

    if (y == p.height - 20) {
      yspeed = yspeed * -1;
    }
    
    if (y < q && yspeed < 0) {
      yspeed = yspeed * -1;
      q = q + q/2;
    }
    
    if (q >= p.height && y >= p.height - 20){
      y = p.height - 20;
      counter = counter - 1;
      if (counter === 0) {
        y = 0;
        q = 200;
        yspeed = 5
        counter = 25;
      }
    }
    
    y = y + yspeed;
  }
}
new p5(sketch_d_gravity, 'd_gravity')