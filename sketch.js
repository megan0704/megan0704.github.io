var x=0;
 
function setup() { 
  createCanvas(400, 400);
} 
 
function draw() { 
  background(220);
  //width和height是关键词，分别是Canvas的宽和高
  x+=2;
  ellipse(x,height/2,20,20);
}
