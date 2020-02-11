function sketch_d_squares_shade (p) {

  p.setup = function () {
    p.createCanvas(400, 400);
  }

  p.draw = function() {
    p.background(255);
    for (let y = 0; y < p.height; y += 20) {
      for (let x = 0; x < p.width; x += 20) {
        var distance = p.dist(p.mouseX, p.mouseY, x, y);
        if (p.mouseX > 0 && p.mouseY > 0) {
          if (distance < 20) {
            p.fill(170);
          } else if (distance < 50) {
            p.fill(150);
          }  else {
            p.fill(127);
          }
          
        } else {
          p.fill(127);
        }
        p.rect(x, y, 20, 20);
      }
    }
  }
}
new p5(sketch_d_squares_shade, 'd_squares_shade')