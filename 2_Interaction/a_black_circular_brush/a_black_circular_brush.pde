//Create a black circular “brush” that follows your mouse

void setup (){
size(400,400);
background(255);

}

void draw (){
ellipseMode(CENTER);
ellipse(mouseX, mouseY,20,20);

}
