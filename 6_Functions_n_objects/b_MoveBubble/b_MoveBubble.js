// declare variables
function sketch_b_MoveBubble(p) {
  var numberOfBubbles = 3;
  var y;
  var bubbleArray = [];
  var [minDiameter, maxDiameter] = [3, 30];
  var xvary = 5;

  // make bubbles wiggle
  function wiggleBubble(x){
    return p.random(x - xvary, x + xvary);
  }

  // make bubbles move down to top
  function moveBubble(){
    y = y - 1;
  }

  // create three bubbles
  function makeBubble() {
    var diameter = p.random(minDiameter, maxDiameter);
    var x = p.random(diameter, p.width - diameter - xvary);
    return function displayBubble () {
      x = wiggleBubble(x);
      p.fill(160, 255, 255);
      p.circle(x, y, diameter);
    };
  }

  p.setup = function() {
    p.createCanvas(400, 400);

    y = p.height - maxDiameter;
    var counter = 1;
    while (counter <= numberOfBubbles) {
      var bubble = makeBubble();
      bubbleArray.push(bubble);
      counter = counter + 1;
    }
  }

  p.draw = function() {
    p.background(255);
    bubbleArray.forEach(bubble => bubble());
    moveBubble();
  }
}

new p5(sketch_b_MoveBubble, 'b_MoveBubble')
