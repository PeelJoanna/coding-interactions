function sketch_c_Change_color_when_clicked(p) {
  let value = 0;
  p.draw = function() {
    p.fill(value);
    p.rect(25, 25, 50, 50);
  }
  p.mousePressed = function() {
    if (value === 0) {
      value = 255;
    } else {
      value = 0;
    }
  }
}

new p5(sketch_c_Change_color_when_clicked, 'c_Change_color_when_clicked')