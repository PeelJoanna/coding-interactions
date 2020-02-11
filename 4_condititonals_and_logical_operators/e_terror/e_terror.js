//Make a circle that shudders with terror every time you point the mouse at it. Use
//dist().

function sketch_e_terror (p) {
  var x;
  var y;

  p.setup = function () {
    p.createCanvas(400,400);
    x = p.random(p.width/2, p.width/2);
    y = p.height/2;
    p.ellipseMode(p.CENTER);
    p.ellipse(x, y, 100, 100);
  }

  p.draw = function () {
    p.background(0);
    
    if (p.dist(x, y, p.mouseX, p.mouseY) < 50) {
      x = p.random(p.width/2 - 5, p.width / 2+5);
    }
    p.ellipseMode(p.CENTER);
    p.ellipse(x, y, 100, 100);
  }
}
new p5(sketch_e_terror, 'e_terror')