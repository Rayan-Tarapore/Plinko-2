const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var grd1,grd2,grd3,grd4
var plate1,plate2,plate3,plate4,plate5
var pegs = [];
var particles = [];

var count = 0;
var select 

var ob1,ob2

var particle
function setup() {
  createCanvas(900,480);
   engine = Engine.create();
   world = engine.world;
  
  
  grd1 = new Ground(450,470,900,20);
  grd2 = new Ground(450,10,900,20);
  grd3 = new Ground(890,240,20,480);
  grd4 = new Ground(10,240,20,480);

  plate1 = new Ground(150,380,5,200);
  plate2 = new Ground(300,380,5,200);
  plate3 = new Ground(450,380,5,200);
  plate4 = new Ground(600,380,5,200);
  plate5 = new Ground(750,380,5,200);

  select = new Peg(375,50);
  
  ob1 = new Platform(450,115);
  ob2 = new Platform(450,190);

  World.add(world,ob1);

  for(i=50;i<=870;i=i+50){
    pegs.push(new Peg(i,75,10));
    }
  for(j=75;j<=850;j=j+50){
    pegs.push(new Peg(j,150,10));
    }
  for(k=50;k<=870;k=k+50){
    pegs.push(new Peg(k,225,10));
    }
  
}

function draw() {
  background(0);  
  textSize(20);
  var score = text("Score : "+count,30,50);

    for(a=0;a<particles.length;a++){
      particles[a].display();
    }
    
  drawSprites();
  Engine.update(engine);
  obMovement(ob1);
  obMovement(ob2);
  grd1.display();
  grd2.display();
  grd3.display();
  grd4.display();

  plate1.display();
  plate2.display();
  plate3.display();
  plate4.display();
  plate5.display();

  select.display();

  ob1.display();
  ob2.display();

  for(i=0;i<pegs.length;i++){
    pegs[i].display();
  }
  for(j=0;j<pegs.length;j++){
    pegs[j].display();
  }
  for(k=0;k<pegs.length;k++){
    pegs[k].display();
  }

}


function keyPressed(){
  if(keyCode===32){
    count = count+1;
    particles.push(new Plinko(random(select.body.position.x-25,select.body.position.x+25),random(select.body.position.y-10,select.body.position.y+10),10))
    particles[a].display();
  }
  if(keyCode===37){
  Body.setPosition(select.body,{x:select.body.position.x-150,y:select.body.position.y})
  
  }
  if(keyCode===39){
    Body.setPosition(select.body,{x:select.body.position.x+150,y:select.body.position.y})
  }
}

function obMovement(object){
if(frameCount%20===0){
  Body.setPosition(object.body,{x:random(50,850),y:object.body.position.y})
}
}