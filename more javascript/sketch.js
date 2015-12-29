var i;

function setup() {
  createCanvas(500,500);
  i = 0;
}

function draw() {
  background(255);
  
  fill(200,55,10);
  ellipse(i,30,30,30);
  
  fill(200,50,10);
  triangle(30,75,58,20,86,75);
  
  i = i + 2;
}