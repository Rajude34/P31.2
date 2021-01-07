const Engine = Matter.Engine 
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine,world
var divisions = []
var particles = []
var plinkos = []
var divisionHeight = 300

function setup() {
  createCanvas(480,800);
engine = Engine.create()
world = engine.world
ground = new Ground(250,780,500,20)

for (var k = 0; k <= width; k += 80) {
   divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight-30)); 
  } 
  for (let j = 75; j <= width - 20; j += 50) {
  plinkos.push(new Plinko(j, 75)); 
  } 
  for (let j = 50; j <= width - 10; j += 50) {
   plinkos.push(new Plinko(j, 175)); 
  }
   for (let j = 75; j <= width - 20; j += 50) {
   plinkos.push(new Plinko(j, 275)); 
   }
   for (let j = 50; j <= width - 10; j+=50) { 
  plinkos.push(new Plinko(j, 375)); }
}

function draw() {
  background(255,255,255);  

  Engine.update(engine)
ground.display()
for(var i = 0; i<plinkos.length; i++){
plinkos[i].display()
  }

for(var j = 0; j<particles.length; j++){
particles[j].display()
      }

for(var k = 0; k<divisions.length; k++){
divisions[k].display()
          }
if(frameCount%60 === 0){
particles.push(new Particle(random(10,400),10,10))


}

}