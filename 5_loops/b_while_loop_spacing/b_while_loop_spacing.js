// Alter the code from a. to change the spacing from 20 pixels to a random number
// between 15 and 25 every frame.

function setup() {
  createCanvas(400, 400);
  var i = 0;
  while (i < width) {
    //draw line
    fill(0);
    stroke(0);
    line(i, 0, i, height);
    i += random(15, 25);
  }
}
