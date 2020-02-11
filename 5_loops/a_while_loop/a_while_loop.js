// While loop. Draw short vertical lines spaced at 20 pixels
//apart as far as 300 pixels across the screen.

function sketch_a_while_loop(p) {
  p.setup = function() {
    p.createCanvas(400, 400);
    var i = 0;
    while (i < p.width) {
      //draw line
      p.fill(0);
      p.stroke(0);
      p.line(i, 0, i, p.height);
      i += 20;
    }
  }
}

new p5(sketch_a_while_loop, 'a_while_loop')
