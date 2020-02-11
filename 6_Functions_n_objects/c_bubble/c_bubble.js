//Create class for Bubble containing the functions you wrote in 6.b. Create 3 Bubble
//objects in your main code with random starting points on the x axis and random
//widths for the bubbles.

function sketch_c_bubble (p) {
  class Bubble {
    constructor(x, y){
      this.x = p.random(30,370);
      this.y = p.random(30,370);
      this.r = p.random(3,30);
    }
    
    display(){
      p.strokeWeight(8);
      p.stroke(255);
      p.noFill();
      p.ellipse(this.x, this.y, this.r*2, this.r*2);
    }
    
    move(){
      this.x = this.x + p.random(-5, 5);
      this.y = this.y + p.random(-5, 5);
    }
    
    isOver(mX, mY){
      if(p.dist(mX, mY, this.x, this.y) < this.r){
        return true;
      }
      else{
        return false;
      }
    }
  }

  
  let bubbles = [];
  let y;
  
  p.setup = function () {
    p.createCanvas(400, 400);
    
    y = p.height;
    
    //beginning sketch
    for(let i = 0; i < 3; i++){
      let x = p.random(0, p.width);
      bubbles.push(new Bubble(x,y));
    }
  
  };
  
  p.draw = function() {
    p.background("#F50707");
    
    for(let i = 0; i < bubbles.length; i++){
      bubbles[i].display();
      bubbles[i].move();
      bubbles[i].y = y;
    }
    
    for(let i = 0; i < bubbles.length; i++){
      if(bubbles[i].isOver(p.mouseX, p.mouseY)){
        // remove the bubble from the array
        // bubbles.splice(i, 1);
        console.log("mouse is over", i);
      }
    }
    y = y - 1;
        if (y === -30) {
      y =  p.height + 30;
    }
  };

}
new p5(sketch_c_bubble, 'c_bubble');
