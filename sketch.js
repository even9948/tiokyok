function setup() {
  angleMode(DEGREES);
  createCanvas(400,400);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);



 let hr = hour();
 let mn = minute();
 let sc = second();



 noFill();
 stroke("red");
 strokeWeight(8);
 let secondAngle = map(sc,0,60,0,360);
 arc(0, 0, 300, 300, 0, secondAngle);
 push();
 rotate(secondAngle);
 stroke("red");
 line(0,0,100,0);
 pop();


 stroke("green");
 strokeWeight(8);
 let minuteAngle = map(mn,0,60,0,360);
 arc(0, 0, 280, 280, 0, minuteAngle);
push();
 rotate(minuteAngle);
 stroke("green");
 line(0,0,75,0);
 pop();



 stroke("blue");
 strokeWeight(8);
 let hourAngle = map(hr % 12, 0, 12, 0, 360);
 arc(0, 0, 260, 260, 0, hourAngle);
 push();
 rotate(minuteAngle);
 stroke("green");
 line(0,0,75,0);
 pop();
 push();
 rotate(hourAngle);
 stroke("blue");


 drawSprites();
}