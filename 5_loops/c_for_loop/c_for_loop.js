// Alter the code from b. and use a for loop instead of a while loop.

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < width; i += random(15, 25)) {
    //draw line
    fill(0);
    stroke(0);
    line(i, 0, i, height);
  }
}
