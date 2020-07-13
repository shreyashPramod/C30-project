class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image=loadImage("sprites/block.jpg");
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate (angle);
    rectMode(CENTER);
    fill("green");
    rect(0,0, this.width, this.height);

    //console.log(this.body.speed);
    if(this.body.speed < 3){
       //super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-5;
      tint(255,this.Visibility);
      imageMode(CENTER);
      image(this.image, 0,0,this.r, this.r)
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
    pop();
  }
};

