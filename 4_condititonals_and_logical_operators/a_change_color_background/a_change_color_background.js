//Set the screen to white and divide it into 4 quadrants with black lines. Turn the
//quadrant that the mouse is in red in a rollover fashion

function sketch_a_change_color_background (p) {
  var r = 150;
  var g = 0;
  var b = 0;

  p.setup = function() {
    p.createCanvas(400,400);
  }

  p.draw = function() {
    p.stroke(0);
      
    //top let square
    if (p.mouseX < p.width/2 && p.mouseY < p.height/2) {
      p.fill(255,0,0);
    } else {
      p.fill(255);
    }
    p.rect(0, 0, p.width/2, p.height/2);
    
    //bottom right square
    if (p.mouseX > p.width/2 && p.mouseY > p.height/2){
      p.fill(255,0,0);
    } else {
      p.fill(255);
    }
    p.rect(p.width/2, p.height/2, p.width, p.height);

    // top right square
    if (p.mouseX > p.width/2 && p.mouseY < p.height/2){
      p.fill(255, 0, 0);
    } else {
      p.fill(255);
    }
    p.rect(p.width/2, 0, p.width/2, p.height/2);
      
    // bottom left square
    if(p.mouseX < p.width/2 && p.mouseY > p.height/2 ) {
      p.fill(255,0,0);
    } else {
      p.fill(255);
    }
    p.rect(0, p.height/2, p.width/2, p.height/2);
  }
}
new p5(sketch_a_change_color_background, 'a_change_color_background')