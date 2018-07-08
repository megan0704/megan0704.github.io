

let gridStep = 20;

function setup() {
//  noLoop(); //Program renders only once - when setup executes (also in Events - i.e. key, mouse clicks)
  rectMode(CENTER); //drawing point for rect() is center
  createCanvas(800, 800); //size of the canvas


function draw(){
    background(255);
    line();
}

function line(){
  //let size = 2;
  //let stepX = 0;

  for (let y = 0; y < width; y++) {

    for (let x = 10; x < height; x+=gridStep) {

        Stroke(0);
        strokeWeight(2);

        ellipse(x, 0, x, height);
      }
    }
  }
