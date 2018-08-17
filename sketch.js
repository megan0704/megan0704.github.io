var posx=0;
var stopspeed=0;
var width,height;
var value = 0;
var manx=0;
var speed=2;
var mimg,winimg,kissimg;
var manY,wmanY;
var y=0;;
var song,kiss;
var millisecond,bgm;
var gaptime,stime,etime;

var againBtn = document.querySelector('.again-btn');
if (againBtn) {
        againBtn.addEventListener('click', function() {
        window.location.reload(true);
    });
}

function showBtn() {
    console.log(againBtn);
    againBtn.classList.add("show");
}

 function preload() {
   mimg = loadImage('man1.png');
   wimg = loadImage('wman1.png');
   kissimg  = loadImage('kiss.png');
    winimg  = loadImage('win.png'); 
  // endimg = loadImage('end.png');
   song = loadSound('ya.mp3');
   kiss= loadSound('kisssound.mp3');
   bgm= loadSound('bgm.mp3');
   //console.log(img);
   //console.log(img);
   //print(load);
 }


function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("container");
  manY=height/2;
  stime = millis();
  
}


function draw() {
//    bgm.play();
   // 
//    console.log(millis());
  background(255,226,0);
  noStroke();
  etime = millis();
  gaptime = etime-stime;
  //print(gaptime);
  
if(gaptime<7000){
    if(manx<width/2-20){
    manx=posx+stopspeed;
    posx+=speed;
  }
    else{
     //lose
     //background(0);  
     kiss.play();
     noLoop();
     image(kissimg,width/2-kissimg/2,50);
        showBtn();
    }
}else{
    //win
    background(255);
    
    image(winimg,0,0);
    
    
    showBtn();
}
  

  manY=180+sin(y)*10;
  wmanY=180+cos(y)*10;
  y +=0.05;
  //console.log(manY);
    
  
  image(wimg,width-manx,wmanY);
  image(mimg,manx,manY);
  //ellipse(birdx,200,50,50);
  //ellipse(width-birdx,200,50,50);
  //print(birdx);
  //test touch
  
}

 function touchStart(){
  // if(value ===0){
    stop-=20;
    song.play();
    kiss.play();
    // print("b");
  // }else{
  //   stop=0;
  //   value = 0;
  // }
 }

function mousePressed(){
    
  stopspeed-=20;
    //kiss.play();
  song.play();
  //print(stop);
}
