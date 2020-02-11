//Draw a smiley face within a function, and use the function to display multiple smiley
//faces at different locations on the screen simultaneously.

function sketch_a_smiley (p) {
  
  var x= p.random(1,10);
  var y=p.random(1,10);
  
  p.setup = function () {
  
    p.createCanvas(400, 400);
    
  }
  
  p.draw = function () {
    
    p.background(0);
   
  //Draw smiley
   p.fill(225);
   p.ellipse(x, y, 100, 100);
   
   p.fill(0);
   p.ellipse(x-10, y, 20, 20);
   
   p.fill(0);
   p.ellipse(x+30, y, 20, 20);
   
   p.fill(0);
   p.arc(x+10, y+28, 30, 30, 0, p.PI+p.QUARTER_PI, p.OPEN);
  
  // draw smileys
    smiley(300,300);
    smiley(100,250);
    smiley(50,160);
  }
  
  function smiley(tempX, tempY){
    x= tempX;
    y= tempY;
  }

}
new p5(sketch_a_smiley, 'a_smiley');
