// Move your finger across the page
// to change its value 
var value = 0;
function draw() { 
  fill(value); 
  rect(25, 25, 50, 50); 
} 
// function touchMoved() { 
//   value = value + 5; 
//   if (value > 255) { 
//     value = 0; 
//   } 
// }
function touchStarted() { 
  if (value === 0) { 
    value = 255; } 
  else { value = 0; 
       } 
}
// function touchStarted() { 
//   ellipse(mouseX, mouse
