// Touch within the image to change // the value of the rectangle 
var value = 0; 
function draw() { 
  fill(value); rect(25, 25, 50, 50); } 
function touchStarted() { 
  if (value === 0) { value = 255; } 
  else { value = 0; } 
}
function touchStarted() { 
  ellipse(mouseX, mouseY, 5, 5); 
  // prevent default return false; 
}
