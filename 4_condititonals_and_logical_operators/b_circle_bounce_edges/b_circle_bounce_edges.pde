//Make a ball bounce around the screen, changing direction when it hits the edges.

float x=200;
float y = 200;

float xspeed = 3;
float yspeed = 1.8;

void setup(){
size(400,400);
}

void draw (){
  background(255);
  fill(0);
  ellipse(x,y,30,30);
  
  if (x> width || x<0){
  xspeed= xspeed*-1;
  }
  
   if (y> height || y<0){
  yspeed= yspeed*-1;
  }
 
 x=x+xspeed;
 y=y+yspeed;
}
