var hr;
var mn;
var sc;
var dt;
var clock,c;

function preload(){
  //c = loadImage("yo.png");
}

function setup() {
  createCanvas(400,400);

  /*clock = createSprite(200,200,20,20);
  clock.addImage(c);
  clock.scale = 1.3;*/

}

function draw() {
  background("purple");  

  drawSprites();

  translate(200,200);
  rotate(-90);

  angleMode(DEGREES);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,60,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,45,0);
  pop();

  strokeWeight(5);
  stroke(225,0,0);
  noFill();
  arc(0,0,240,240,0,scAngle);

  strokeWeight(5);
  stroke(0,225,0);
  noFill();
  arc(0,0,215,215,0,mnAngle);

  strokeWeight(5);
  stroke("yellow");
  noFill();
  arc(0,0,190,190,0,hrAngle);
}