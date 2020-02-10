//Make a black square at the location of your mouse every time you click, click
//and drag to draw a line with a square brush, and erase the canvas when you
//press a key (set rectMode() to center).

function setup() {
  createCanvas(400, 400);
  background(255);
}

function mousePressed() {
  noStroke();
  fill(0);
  rectMode(CENTER);
  rect(mouseX, mouseY, 30, 30);
}

function keyPressed(){
  background(255);
}
