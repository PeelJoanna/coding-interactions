var numberOfBubbles = 3;
var y;
var bubbleArray = [];

function makeBubble() {
  var diameter = random(3, 30);
  var x = random(diameter, width - diameter);
  return function () {
    x = random(x - 5, x + 5);
    fill(160, 255, 255);
    circle(x, y, diameter);
  };
}

function setup() {
  createCanvas(400, 400);

  y = height - 30;
  var counter = 1;
  while (counter <= numberOfBubbles) {
    var bubble = makeBubble();
    bubbleArray.push(bubble);
    counter = counter + 1;
  }
}

function draw() {
  background(255);
  bubbleArray.forEach(bubble => bubble(y));
  y = y - 1;
}
