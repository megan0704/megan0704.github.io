var posx=0
var stopspeed=0;
var width,height;
var value = 0;
var birdx=0;
var speed=2;
var img;
var manY;


 function preload() {
   img = loadImage('man1.png');
   console.log(img);
   //print(load);
 }



function setup() {
  width=1200;
  height=400;
  createCanvas(width, height);
  manY=height/2;
   //image(img, 0, 0);
}


function draw() {
  background(220);
  noStroke();
  
  if(birdx<width/2){
  birdx=posx+stopspeed;
    posx+=speed;
  }else{
     background(242,156,177);
    }
  //fill(0);
  image(img,birdx,manY);
  image(img,width-birdx,manY);
  //ellipse(birdx,200,50,50);
  //ellipse(width-birdx,200,50,50);
  print(birdx);
  //test touch
  manY=height/2+sin(y)*50;
  y +=0.1;

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
  stopspeed-=10;
  //print(stop);
}
