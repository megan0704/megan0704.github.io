//https://p5js.org

//03_Colorlines (Exercise 01)
//Link all circles with individual lines
//Color of the line is the mix of the circle colors

//Initialization function

function setup() {
  //Set the size of rendering window - pixels
  createCanvas(500, 500);
  noStroke();
}
//Rendering function
function draw()
{
  background(255);
  //Erase all canvas. Set the color to white

  push();
  translate(mouseX, mouseY);
  fill(0, 255, 0);
  rect(0,0, 500,500);
  pop();

  // translate(mouseX+80, mouseY+ 80);
  translate(50, 50);
     fill(255,0,0);
     rect(0,0, 500,500);

}
