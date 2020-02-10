function setup() {
  createCanvas(400,400);
  background(255);
}


function draw() {
  stroke(0);
  strokeWeight(abs(mouseX-pmouseX)); 
  line(pmouseX, pmouseY, mouseX, mouseY);
}
