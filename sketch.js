//Create an array with HEX values that represent colors
let colorArray = ["#ED7A8E", "#7D43FE", "#132BA8","#000000", "#FFFFFF"];

//Grid is split into steps of 20. This variable is used throughout,
//to ensure consistency
let gridStep = 20;



function setup() {
  noLoop(); //Program renders only once - when setup executes (also in Events - i.e. key, mouse clicks)
  rectMode(CENTER); //drawing point for rect() is center
  createCanvas(800, 800); //size of the canvas
  background(254, 255, 28, 80);

  for (let i=0; i<4; i++){
    circleBlocks(int(random(5)),int(random(5))); //arguments define XY starting position
  }
  grid();
}

function circleBlocks(xTimes, yTimes){
  let xRand = int(random(width/gridStep));
  let yRand = int(random(height/gridStep));
  let xPos = xRand*gridStep;
  let yPos = yRand*gridStep;

  let angle = 45;

  push();
  translate(xPos, yPos);
  let colorCircle = colorArray[int(random(5))];
  for (let y = 10; y < xTimes*gridStep; y+=gridStep) {
    for (let x = 10; x < yTimes*gridStep; x+=gridStep) {
      push(); //apply this at the beginning of the transformation
      translate(x, y); //assign here the shape position
      noFill();
      stroke(255, 188,0);
      strokeWeight(3);
      ellipse(0, 0, 15, 15); //position is driven by translate()
      noStroke();
      fill(255, 188, 0);
      ellipse(0, 0, 5, 5); //position is driven by translate()
      pop();
    }
  }
  pop();
}

function draw(){
}

//When the mouse is clicked, setup function executes from start
function mouseClicked(){
  setup();
}

function grid(){
  let size = 2;
  let stepX = 0;


  for (let y = 10; y < width; y+=gridStep) {
    for (let x = 10; x < height; x+=gridStep) {
      //stroke(255,0,0);
      //strokeWeight(1);
      let randomStep = int(random(width/gridStep));

      if (x == 10) stepX = 0;
      else stepX = stepX + 1;

      if (randomStep == stepX){
        stroke(88, 255, 0);
        let newSizeStroke = int(random(20));
        strokeWeight(newSizeStroke/10);
        noFill();
        rect(x, y, newSizeStroke, newSizeStroke);
        noStroke();
        fill(88, 255, 0);
        let newSize = int(random(12));
        rect(x, y, newSize, newSize);
      } else {
        noStroke();
        fill(136, 18,255);
        ellipse(x, y, size, size);

        let w= int(random(4));
        let h= int(random(40));
        rect(x,y, w, h);

      }
    }
  }
}

//Use keys A,S,D to draw additional shapes according to the functions we have
function keyPressed() {
  if (key == 'd' || key == 'D'){
    grid();
  }
}

function keyPressed() {
  if (key == 's' || key == 'S'){
    for (let i=0; i<4; i++){
      circleBlocks(int(random(5)),int(random(5)));
    }
  }
}
