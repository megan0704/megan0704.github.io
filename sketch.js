var posx=0
var stopspeed=0;
var width,height;
var value = 0;
var birdx=0;
var speed=2;
var img;
var manY,wmanY;
var y=0;;
var song;
var millisecond

 function preload() {
   img = loadImage('man1.png');
   song = loadSound('ya.mp3');
   console.log(img);
   //print(load);
 }


function setup() {
  width=1000;
  height=400;
  createCanvas(width, height);
  manY=height/2;
  millisecond = millis();
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

  manY=180+sin(y)*10;
  wmanY=180+cos(y)*10;
  y +=0.1;
  //console.log(manY);
    
  image(img,birdx,manY);
  image(img,width-birdx,wmanY);
  //ellipse(birdx,200,50,50);
  //ellipse(width-birdx,200,50,50);
  //print(birdx);
  //test touch
  

}

 function touchStart(){
  // if(value ===0){
    stop-=20;
    song.play();
    console.log("sound");
    // print("b");
  // }else{
  //   stop=0;
  //   value = 0;
  // }
 }

function mousePressed(){
  stopspeed-=20;
  song.play();
  //print(stop);
}
