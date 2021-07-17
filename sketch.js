const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base = new Base(200,690,600,20)

  Matter.Composite.add(bridge.body, jointPost)

  jointLink = new link(bridge,jointPost)


  
}

function draw() {
  background(51);
  Engine.update(engine);
  base.show();
  jointLink.show();
}
