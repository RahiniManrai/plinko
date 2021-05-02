class Wall {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
      for(var k=0; k<=100; k=k+80){
        wall.push(new Wall(k, height-WallHeight/2, 10, wallHeight))
      }
    }
  };
