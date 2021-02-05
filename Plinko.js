class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,10, 10,options);
      this.width = 10;
      this.height = 10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("white");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };