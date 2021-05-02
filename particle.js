class Particle {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          'restitution':0.8,
            'friction':1,
            'density':1
      }
      this.body = Bodies.circle(x,y,this.r,options);
      this.color=color(random(0, 255))
      this.r=radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      circleMode(CENTER);
       circle(pos.x, pos.y, this.r);

       if(frameCount%60===0){

       particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));

       }
    }
  };
