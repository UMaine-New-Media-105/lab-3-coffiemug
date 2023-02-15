function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  flowerCenter(200,130)
    
  colorChange('hsl(5,90%,60%)');

  flower(200,130);

}

function flower(x,y){
  push();
  noStroke();
  translate(x,y)
 // fill('hsl(5,90%,60%)');
  ellipse(0,0,90);
  ellipse(65,50,90);
  ellipse(40,125,90);
  ellipse(-40,125,90);
  ellipse(-65,50,90);
  pop();
}

function flowerCenter(x,y){
  push();
  translate(x,y)
  fill('black');
  ellipse(0,70,80)
  pop();
  
}

function colorChange(baseColor){
  if (mouseX <=100){
  fill('cornflowerblue');
  }
  else if(mouseX>300){
  fill('gold');
} 
  else{
  fill(baseColor);
}
}
