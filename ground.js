class Ground{
    constructor(x,y,width,height){
    var ground_option = {
        isStatic:true
    }
    this.body = Matter.Bodies.rectangle(x,y,width,height,ground_option);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display(){
    noStroke();
    var pos = this.body.position
    rectMode(CENTER);
    fill(0,200,250)
    rect(pos.x,pos.y,this.width,this.height);
    }
}