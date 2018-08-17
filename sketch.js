var posx=0
var stop=0;
var width,height;
var value = 0;
var birdx=0;

function setup() {
  width=400;
  height=400;
  createCanvas(width, height);

}

function draw() {
  background(220);
  noStroke();
  posx+=2
  birdx=posx+stop
  //fill(0);
  ellipse(birdx,200,50,100);
 // ellipse(400-birdx,200,50,100);
  //print(birdx);
  //test touch
  
  rect(200,200,50,50);


}

 function touchStart(){
  // if(value ===0){
    stop-=10;
   
    // print("b");
  // }else{
  //   stop=0;
  //   value = 0;
  // }
 }

function mousePressed(){
  stop-=5;
  //print(stop);
}
