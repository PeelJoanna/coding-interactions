//Make a ball bounce around the screen, changing direction when it hits the edges.

function sketch_b_circle_bounce_edges (p) {
  var x = 200;
  var y = 200;

  var xspeed = 3;
  var yspeed = 1.8;

  p.setup = function() {
    p.createCanvas(400,400);
  }

  p.draw = function() {
    p.background(255);
    p.fill(0);
    p.ellipse(x, y, 30, 30);
    
    if (x > p.width || x < 0) {
      xspeed = xspeed * -1;
    }
    
    if (y > p.height || y < 0) {
      yspeed = yspeed * -1;
    }
  
    x = x + xspeed;
    y = y + yspeed;
  }
}
new p5(sketch_b_circle_bounce_edges, 'b_circle_bounce_edges')