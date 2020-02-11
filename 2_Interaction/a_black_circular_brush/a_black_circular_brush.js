function sketch_a_black_circular_brush(p) {
  p.setup = function () {
    p.createCanvas(400,400);
    p.background(255);
  }

  p.draw = function () {
    p.ellipseMode(p.CENTER);
    p.ellipse(p.mouseX, p.mouseY, 20, 20);
  }
}
new p5(sketch_a_black_circular_brush, 'a_black_circular_brush')