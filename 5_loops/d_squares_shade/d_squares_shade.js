

function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(255);
  for (let y = 0; y < height; y += 20) {
    for (let x = 0; x < width; x += 20) {
      var distance = dist(mouseX, mouseY, x, y);
      if (mouseX > 0 && mouseY > 0) {
        if (distance < 20) {
          fill(170);
        } else if (distance < 50) {
          fill(150);
        }  else {
          fill(127);
        }
        rect(x, y, 20, 20);
      }
    }
  }
}
