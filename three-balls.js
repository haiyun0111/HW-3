var ballY = 0;
var ballSpeed = 4;

var ballY2 = 0;
var ballSpeed2 = 6;

var ballY3 = 0;
var ballSpeed3 = 5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('#fae');
  
  ellipse(100, ballY, 70);
  ellipse(300, ballY2, 50);
  ellipse(400, ballY3, 60);

  ballY = ballY + ballSpeed;
  ballY2 = ballY2 + ballSpeed2;
  ballY3 = ballY3 + ballSpeed3;
  
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
}
