const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

function preload(){

}
function setup(){
  createCanvas(800,700);
  engine=Engine.create();
  world=engine.world;  
 
  base1 = new Ground(400,650,200,20);
  base2 = new Ground(550,300,200,20);
  ground = new Ground(400,690,800,20);
  box1 = new Box(325,635,30,40);
  box2 = new Box(355,635,30,40);
  box3 = new Box(385,635,30,40);
  box4 = new Box(415,635,30,40);
  box5 = new Box(445,635,30,40);
  box6 = new Box(475,635,30,40);
  box7 = new Box(355,595,30,40);
  box8 = new Box(385,595,30,40);
  box9 = new Box(415,595,30,40);
  box10 = new Box(445,595,30,40);
  box11 = new Box(372,550,30,40);
  box12 = new Box(402,550,30,40);
  box13 = new Box(432,550,30,40);
  box14 = new Box(387,510,30,40);
  box15 = new Box(417,510,30,40);
  box16 = new Box(403,475,30,40);
 
  box17 = new Box(475,285,30,40);
  box18 = new Box(505,285,30,40);
  box19 = new Box(535,285,30,40);
  box20 = new Box(565,285,30,40);
  box21 = new Box(595,285,30,40);
  box22 = new Box(625,285,30,40);
  box23 = new Box(505,265,30,40);
  box24 = new Box(535,265,30,40);
  box25 = new Box(565,265,30,40);
  box26 = new Box(595,265,30,40);
  box27 = new Box(522,195,30,40);
  box28 = new Box(552,195,30,40);
  box29 = new Box(582,195,30,40);
  box30 = new Box(537,160,30,40);
  box31 = new Box(567,160,30,40);
  box32 = new Box(553,125,30,40);

  hexagon = new Polygon(300,350,30,30);

  rope = new Rope(hexagon.body,{x:200,y:300});

Engine.run(engine);


}
function draw(){
   background(0); 
  
   fill("white");
   text("Drag the Hexagon and release it to knock down the targets. ENJOY!",300,20);
   text("Press Space for a second chance.",300,35);

   base1.display();
   base2.display();
   ground.display();
   hexagon.display();
  
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   box22.display();
   
  
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box23.display();
   box24.display();
   box25.display();
   box26.display();
   

   
   box11.display();
   box12.display();
   box13.display();
   box27.display();
   box28.display();
   box29.display();


   
   box14.display();
   box15.display();
   box30.display();
   box31.display();
   

   box16.display();
   box32.display();

   rope.display();

}
function mouseDragged(){
    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    rope.fly();
}

function keyPressed(){
   if(keyCode === 32){
     rope.attach(hexagon.body);
   }
}