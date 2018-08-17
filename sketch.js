var posx=0;
var stopspeed=0;
var width,height;
var value = 0;
var manx=0;
var speed=3;
var mimg,winimg,kissimg;
var manY,wmanY;
var y=0;;
var song,kiss;
var millisecond,bgm;
var gaptime,stime,etime;
var winwords,kisswords;

var againBtn = document.querySelector('.again-btn');
if (againBtn) {
        againBtn.addEventListener('click', function() {
        window.location.reload(true);
    });
}

function showBtn() {
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
         background(255,226,0); 
     image(kissimg,width/2 - kissimg.width/2,50);
        kisswords = '你单身还没几年吧？手速够快才能获取代码!';
     text(kisswords, width/5, 500, 400, 400);
        showBtn();
    }
}else{
    //win
    background(0);
    image(winimg,0,50);
    //kisswords = '恭喜你，拆散了秀恩爱的情侣！将界面截图，发送至公众号“想当然”后台，获取游戏源代码。';
    //fill(255);
     //text(kisswords, width/5, 500, 70, 50);
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
    
  stopspeed-=30;
    //kiss.play();
  song.play();
  //print(stop);
}
