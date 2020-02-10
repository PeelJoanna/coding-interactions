// While loop. Draw short vertical lines spaced at 20 pixels
//apart as far as 300 pixels across the screen.

function setup() {
  createCanvas(400, 400);
  var i = 0;
  while (i < width) {
    //draw line
    fill(0);
    stroke(0);
    line(i, 0, i, height);
    i += 20;
  }
}
