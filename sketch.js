var posx,stop;
var width,height;
var value = 0;
var birdx=0;

function setup() {
  width=400;
  height=400;
  createCanvas(width, height);
  posx=0;
  stop=0;
}

function draw() {
  background(220);
  noStroke();
  posx+=0.5;
  birdx=posx+stop
  
  ellipse(birdx,200,50);
  ellipse(400-birdx,200,50);
  //print(birdx);
  //test touch


}

function touchStart(){
  // if(value ===0){
    stop-=5;
   
    // print("b");
  // }else{
  //   stop=0;
  //   value = 0;
  // }
}

// function mousePressed(){
//   stop-=5;
//   //print(stop);
// }
