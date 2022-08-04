class Ball {
  constructor(x, y, r) 
  {
    let options = {
      isStatic:false,
      restitution:0.3,
      friction:0,
      density:1.2
    };
    
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);
  }

  show() {
    var ballpos = this.body.position;
    push();
    ellipseMode(RADIUS);
    fill("white");
    noStroke();
    circle(ballpos.x, ballpos.y, this.r);
    pop();
  }
  
}


