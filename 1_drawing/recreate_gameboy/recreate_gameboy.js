function sketch_recreate_gameboy (p) {

  p.setup = function () {
    p.createCanvas(500, 500);
    p.background('#FFFFFF');
    
    var c1 = '#3BC1B9';
    var c2 = '#A7F0EB';
    var c3 = '#FFF305';
    
    //Layout
    p.noStroke();
    p.fill(c1);
    p.rect(120, 20, 250, 400);
    
    // face screen
    p.stroke(0);
    p.strokeWeight(5);
    p.fill(c2);
    p.rect(145, 45, 200, 150,7);
    
    // left eye
    p.stroke(0);
    p.strokeWeight(5);
    p.fill(0);
    p.circle(200, 80, 10);
    
    // right eye
    p.stroke(0);
    p.strokeWeight(5);
    p.fill(0);
    p.circle(280, 80, 10);
    
    //smile bounding box
    p.rectMode(p.CENTER);
    p.noStroke();
    p.fill(c2);
    p.rect(240, 150, 100, 50);
    
    // smile arc
    p.stroke(0);
    p.arc(240, 150, 50, 50, 0, p.PI); // lower half circle
      
    //draw the grey rounded rectangle
    p.fill('#496A76');
    p.stroke(0);
    p.strokeWeight(5);
    p.rect(200, 230, 100, 25, 3);
    
    // top right blue round button
    p.stroke(0);
    p.strokeWeight (5);
    p.fill('#293CE0');
    p.circle(330, 230, 20);
    
    // the yellow cross https://processing.org/reference/beginShape_.html
    p.fill(c3);
    p.beginShape();
    p.vertex(175, 260);
    p.vertex(195, 260);
    p.vertex(195, 280);
    p.vertex(215, 280);
    p.vertex(215, 300);
    p.vertex(195, 300);
    p.vertex(195, 320);
    p.vertex(175, 320);
    p.vertex(175, 300);
    p.vertex(155, 300);
    p.vertex(155, 280);
    p.vertex(175, 280);
    p.endShape(p.CLOSE);
    
    //left blue pill button
    p.fill('#293CE0');
    p.stroke(0);
    p.strokeWeight (5);
    p.rect(170, 380, 50, 10, 7);
    
    //right blue pill button
    p.fill('#293CE0');
    p.stroke(0);
    p.strokeWeight (5);
    p.rect(230, 380, 50, 10, 7);
    
    // bottom right red round button
    p.stroke(0);
    p.strokeWeight (5);
    p.fill('#E02938');
    p.circle(310, 380, 45);
    
    // bottom right green round button
    p.stroke(0);
    p.strokeWeight (5);
    p.fill('#54F5CB');
    p.circle(340, 340, 18);
    
    // bottom right blue triangle
    p.stroke(0);
    p.strokeWeight (5);
    p.fill('#65FAEF');
    //triangle(x1, y1, x2, y2, x3, y3)
    p.triangle(260, 340, 280, 310, 300, 340);
  }
}
new p5(sketch_recreate_gameboy, 'recreate_gameboy')