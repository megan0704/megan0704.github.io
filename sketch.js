var posx=0
var stopspeed=0;
var width,height;
var value = 0;
var birdx=0;
var speed=2;
var img;


 function preload() {
   img = loadImage('man1.png');
   console.log(img);
   //print(load);
 }



function setup() {
  width=750;
  height=1334;
  createCanvas(width, height);
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
  image(img,birdx,height/2);
  image(img,width-birdx,height/2);
  //ellipse(birdx,200,50,50);
  //ellipse(width-birdx,200,50,50);
  print(birdx);
  //test touch


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
