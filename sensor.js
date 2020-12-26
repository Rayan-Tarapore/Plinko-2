class Sensor{
    constructor(x,y){
    var sensor_option={
        isStatic : false
    }
    this.body = Bodies.rectangle(x,y,70,10,sensor_option);
    this.width = width;
    this.height = height;
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,900,10);
    }
  }