class Block{
    constructor(x, y, width, height) {
        var options = {
            'friction':0.0,
            'restitution':0.4
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("black");
        rect( 0, 0, this.width, this.height);
        pop();
      }
  }