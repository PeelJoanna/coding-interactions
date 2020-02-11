function sketch_b_a_line_thickness(p) {
  p.setup = function () {
    p.createCanvas(400,400);
    p.background(255);
  }


  p.draw = function () {
    p.stroke(0);
    p.strokeWeight(p.abs(p.mouseX - p.pmouseX)); 
    p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
  }
}
new p5(sketch_b_a_line_thickness, 'b_a_line_vary_thickness')