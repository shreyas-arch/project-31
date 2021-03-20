const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var man,umbrella;

function preload(){
        getBackgroundImg();   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

   
    
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);   
} 
drawSprites() ;

