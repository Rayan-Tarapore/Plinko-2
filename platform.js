class Platform{
  constructor(x,y){
  var platform_option={
      isStatic : false
  }
  this.body = Bodies.rectangle(x,y,70,10,platform_option);
  this.width = width;
  this.height = height;
  }
  display(){
      rectMode(CENTER)
      fill("red");
      rect(this.body.position.x,this.body.position.y,70,10);
  }
}