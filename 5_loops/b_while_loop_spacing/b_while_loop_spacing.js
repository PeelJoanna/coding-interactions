// Alter the code from a. to change the spacing from 20 pixels to a random number
// between 15 and 25 every frame.

function sketch_b_while_loop_spacing (p) {
  p.setup = function () {
    p.createCanvas(400, 400);
    var i = 0;
    while (i < p.width) {
      //draw line
      p.fill(0);
      p.stroke(0);
      p.line(i, 0, i, p.height);
      i += p.random(15, 25);
    }
  }
}

new p5(sketch_b_while_loop_spacing, 'b_while_loop_spacing')