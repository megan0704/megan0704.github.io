var posx,stop;
var width,height;
var value = 0;
var birdx=0;

function setup() {
  width=200;
  height=400;
  createCanvas(width, height);
  background(220);
  posx=0;
  stop=0;
}

function draw() {
  background(220);
  noStroke();
  posx+=0.5;
  birdx=posx+stop
  fill(0);
  ellipse(birdx,200,50);
  ellipse(400-birdx,200,50);
  //print(birdx);
  //test touch
  
  rect(200,200,50,50);


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
