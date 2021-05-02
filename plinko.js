class Plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          'friction':1,
            'density':1
      }
      this.body = Bodies.ellipse(x,y,radius,options);
      radius=10
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("white")
       ellipse(pos.x, pos.y, this.width, this.height);
       
       for(var j=40; j<=width; j=j+50){
        plinkos.push(new Plinko(j, 75))
      }
      for(var j=15; j<=width-10; j=j+50){
        plinkos.push(new Plinko(j, 75))
      }
    }
  };
