//Make a black square at the location of your mouse every time you click, click
//and drag to draw a line with a square brush, and erase the canvas when you
//press a key (set rectMode() to center).

void setup(){
  size(400, 400);
  background(255);
}

void draw() {
  noStroke();
  if (mousePressed == true) {
    fill(0);
  } else {
    noFill();
  }
  rectMode(CENTER);
  rect(mouseX, mouseY, 30, 30);
}

void keyPressed(){
  background(255);
}
