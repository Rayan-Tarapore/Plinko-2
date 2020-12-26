class Plate{
    constructor(x,y,width,height){
    var plate_option={
        isStatic : true
    }
    this.body = Bodies.rectangle(x,y,width,height,plate_option)
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display(){
    rectMode(CENTER);
    var pos = this.body.position;
    rect(pos.x,pos.y,this.width,this.height);
    }
}