function sketch_wiggling_bubbles (p) {
  var numberOfBubbles = 3;
  var y;
  var bubbleArray = [];

  function makeBubble() {
    var diameter = p.random(3, 30);
    var x = p.random(diameter, p.width - diameter - 5);
    return function () {
      x = p.random(x - 5, x + 5);
      p.fill(160, 255, 255);
      p.circle(x, y, diameter);
    };
  }

  p.setup = function () {
    p.createCanvas(400, 400);

    y = p.height - 30;
    var counter = 1;
    while (counter <= numberOfBubbles) {
      var bubble = makeBubble();
      bubbleArray.push(bubble);
      counter = counter + 1;
    }
  }

  p.draw = function () {
    p.background(255);
    bubbleArray.forEach(bubble => bubble(y));
    y = y - 1;

    if (y === -30) {
      y =  p.height + 30;
    }
  }
}
new p5(sketch_wiggling_bubbles, 'wiggling_bubbles')