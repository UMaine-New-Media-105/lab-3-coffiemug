function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(200,130)
  
  fill('black');
  ellipse(0,70,80)    
  
if (mouseX <=100){
  fill('cornflowerblue');
  }
else if(mouseX>300){
  fill('gold');
} 
else{
  fill('hsl(5,90%,60%)');
}
  noStroke();
  ellipse(0,0,90);
  ellipse(65,50,90);
  ellipse(40,125,90);
  ellipse(-40,125,90);
  ellipse(-65,50,90);
}
