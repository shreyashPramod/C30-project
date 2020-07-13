class Polygon {
  constructor(x, y,r) {
    var options = {
        'restitution':0.8,
        'friction':0.5,
        'density':1.2
    }
    this.x=x;
     this.y=y;
     this.r=r;
     this.image=loadImage("sprites/polygon.png");
      this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
      World.add(world, this.body);
  }
  display(){
    var polygonpos=this.body.position; 
    push() 
    translate(polygonpos.x,polygonpos.y);
    rectMode(CENTER) 
    fill(255,0,255)
    imageMode(CENTER);
    image(this.image, 0,0,this.r, this.r)
   pop()

  }
};
