var ballY = 0;
var ballSpeed = 4;

var ballX = 0;
var ballSpeed4 = 4;

var ballY2 = 0;
var ballSpeed2 = 6;

var ballX2 = 0;
var ballSpeed5 = 6;

var ballY3 = 0;
var ballSpeed3 = 5;

var ballX3 = 0;
var ballSpeed6 = 5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('#fae');
  
  ellipse(100, ballY, 70);
  ellipse(300, ballY2, 50);
  ellipse(400, ballY3, 60);
  ellipse(ballX, 100, 70);
  ellipse(ballX2, 200, 50);
  ellipse(ballX3, 300, 60);
  

  ballY = ballY + ballSpeed;
  ballY2 = ballY2 + ballSpeed2;
  ballY3 = ballY3 + ballSpeed3;
   ballX = ballX + ballSpeed4;
  ballX2 = ballX2 + ballSpeed5;
  ballX3 = ballX3 + ballSpeed6;
  
  if (ballY > height) {
    ballSpeed = -ballSpeed;
  }
  
  if (ballY == 0) {
    ballSpeed = -ballSpeed;
  }
  
  if (ballY2 > height) {
    ballSpeed2 = -ballSpeed2;
  }
  
  if (ballY2 == 0) {
    ballSpeed2 = -ballSpeed2;
  }
  
  if (ballY3 > height) {
    ballSpeed3 = -ballSpeed3;
  }
  
  if (ballY3 == 0) {
    ballSpeed3 = -ballSpeed3;
  }
  
  if (ballX > width) {
    ballSpeed4 = -ballSpeed4;
  }
  
  if (ballX == 0) {
    ballSpeed4 = -ballSpeed4;
  }
  
  if (ballX2 > width) {
    ballSpeed5 = -ballSpeed5;
  }
  
  if (ballX2 == 0) {
    ballSpeed5 = -ballSpeed5;
  }
  
  if (ballX3 > width) {
    ballSpeed6 = -ballSpeed6;
  }
  
  if (ballX3 == 0) {
    ballSpeed6 = -ballSpeed6;
  }
}
