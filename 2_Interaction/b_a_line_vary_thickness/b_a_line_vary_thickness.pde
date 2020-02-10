//Create a line from where your mouse was in the last frame to where your mouse is
//in the current one and vary the thickness of that line according to 
//how fast you moved the mouse.

void setup (){
size(400,400);
background(255);

}

void draw (){
stroke(0);
strokeWeight (abs (mouseX-pmouseX)); 
line (pmouseX,pmouseY,mouseX,mouseY);
}
