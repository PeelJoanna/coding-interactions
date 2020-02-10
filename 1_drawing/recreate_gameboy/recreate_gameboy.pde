size(500,500);
background(#FFFFFF);

color c1=(#3BC1B9);
color c2=(#A7F0EB);
color c3=(#FFF305);

//Layout
noStroke();
fill(c1);
rect(120, 20, 250, 400);

// face screen
stroke(000);
strokeWeight (5);
fill(c2);
rect(145, 45, 200, 150,7);

// left eye
stroke(000);
strokeWeight (5);
fill(000);
circle(200, 80, 10);

// right eye
stroke(000);
strokeWeight (5);
fill(000);
circle(280, 80, 10);

//smile bounding box
rectMode(CENTER);
noStroke();
fill(c2);
rect(240, 150, 100, 50);

// smile arc
  stroke(0);
  arc(240, 150, 50, 50, 0, PI); // lower half circle
  
//draw the grey rounded rectangle
fill(#496A76);
stroke(000);
strokeWeight (5);
rect(200,230,100,25,3);

// top right blue round button
stroke(000);
strokeWeight (5);
fill(#293CE0);
circle(330, 230, 20);

// the yellow cross https://processing.org/reference/beginShape_.html
fill(c3);
beginShape();
vertex(175, 260);
vertex(195, 260);
vertex(195, 280);
vertex(215, 280);
vertex(215, 300);
vertex(195, 300);
vertex(195, 320);
vertex(175, 320);
vertex(175, 300);
vertex(155, 300);
vertex(155, 280);
vertex(175, 280);
endShape(CLOSE);

//left blue pill button
fill(#293CE0);
stroke(000);
strokeWeight (5);
rect(170,380,50,10,7);

//right blue pill button
fill(#293CE0);
stroke(000);
strokeWeight (5);
rect(230,380,50,10,7);

// bottom right red round button
stroke(000);
strokeWeight (5);
fill(#E02938);
circle(310, 380, 45);

// bottom right green round button
stroke(000);
strokeWeight (5);
fill(#54F5CB);
circle(340, 340, 18);

// bottom right blue triangle
stroke(000);
strokeWeight (5);
fill(#65FAEF);
//triangle(x1, y1, x2, y2, x3, y3)
triangle(260, 340, 280, 310, 300, 340);
