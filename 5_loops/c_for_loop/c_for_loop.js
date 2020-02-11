// Alter the code from b. and use a for loop instead of a while loop.

function sketch_c_for_loop (p) {
  p.setup = function() {
    p.createCanvas(400, 400);
    for (let i = 0; i < p.width; i += p.random(15, 25)) {
      //draw line
      p.fill(0);
      p.stroke(0);
      p.line(i, 0, i, p.height);
    }
  }
}

new p5(sketch_c_for_loop, 'c_for_loop')