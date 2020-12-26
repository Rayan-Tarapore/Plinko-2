class Peg{
    constructor(x,y){
        var peg_option={
            isStatic : true
        }
        this.body = Matter.Bodies.circle(x,y,10,peg_option)
        this.radius = 10
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
        }
        display(){
        push();
        //noStroke();
        fill(this.color);
        var pos = this.body.position;
        circle(pos.x,pos.y,this.radius);
        pop();
        }
}