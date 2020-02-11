//Make a black square at the location of your mouse every time you click, click
//and drag to draw a line with a square brush, and erase the canvas when you
//press a key (set rectMode() to center).

function sketch_c_black_square(p) {
  p.setup = function () {
    p.createCanvas(400, 400);
    p.background(255);
  }

  p.mousePressed = function () {
    p.noStroke();
    p.fill(0);
    p.rectMode(p.CENTER);
    p.rect(p.mouseX, p.mouseY, 30, 30);
  }

  p.keyPressed = function () {
    p.background(255);
  }

}
new p5(sketch_c_black_square, 'c_black_square');
