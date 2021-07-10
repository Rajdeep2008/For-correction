const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var Stone;
var iron;
var rubber;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    iron = new Iron(990,100,80,95);
    stone = new Stone(750,100,150,50);
    rubber = new Rubber(100,100,100,19);
    

}

function draw(){
    background("lightblue");
    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    
    
    

}
