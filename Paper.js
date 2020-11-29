
class Paper{
  
  constructor(x,y,radius){
    var options = { 
     restitution: 0.5, 
     friction: 0.6,
     density:1.2
    }
   
    this.body = Bodies.circle(200, 600, 50, [options]);
    this.width = width;
    this.height = height;          
    this.adius = 50;

    }
      
  display(){
    
    push();
    fill("blue");
    circle(200,600,50);
    pop();
    World.add(world,paperBody);
    paperBody.velocityX = 3;
    paperBody.velocityY = -3;
  }
  }
  
  
  
  
  
  
  