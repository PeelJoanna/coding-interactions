//Make a circle that flees to a random location every time you point the mouse at it.
//Use dist().

float circleX = 0;
float circleY = 0;
int circleSize = 100;
boolean overBox = false;
boolean overCircle = false;
float destinationX = -1;
float destinationY = -1;
 
void setup()
{
  size(800, 800);
  circleX = width/2;
  circleY = height/2;
}

// add or remove _step_ from circleX to make it closer to destinationX
float nextPosition(float circleX, float destinationX, float step) {
    if (circleX - step > destinationX) {
      circleX = circleX - step;
    } else if (circleX + step < destinationX) {
      circleX = circleX + step;
    }
    return circleX;
}

void draw()
{
  background(0);

  // Test if the cursor is over the circle
  if (dist(mouseX, mouseY, circleX, circleY) < circleSize) {
    float radius = circleSize / 2;
    destinationX = random(radius, width - radius);
    destinationY = random(radius, height - radius);
  }
 
  // prevent the circle to move when mouse did not enter screen yet
  if (destinationX != -1 && destinationY != -1) {
    // assign new position X nearest from destination by 1
    circleX = nextPosition(circleX, destinationX, 1);
    // assign new position Y nearest from destination by 1
    circleY = nextPosition(circleY, destinationY, 1);
  }
 
  stroke(255);
  fill(255,0,0);
  ellipse(circleX,circleY,circleSize,circleSize);
}
