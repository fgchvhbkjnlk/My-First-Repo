let player;
let platforms = [];
let boxes = [];

// Timer + Sophie's code
let totalTime = 0; 
let timeLimit = 60; 
let timerInterval; // Variable to hold the interval ID
let timerRunning = true; // Boolean to control the timer

function setup() {
  createCanvas(600, 400);
  player = new Player();
  
  // Create platforms
  platforms.push(new Platform(width / 2, height - 10, width, 20));
  platforms.push(new Platform(100, height - 80, 80, 15));
  platforms.push(new Platform(260, height - 150, 150, 15));
  platforms.push(new Platform(50, height - 200, 120, 15));
  platforms.push(new Platform(230, height - 270, 90, 15));
  platforms.push(new Platform(500, height - 230, 200, 15));
  
  // Create boxes 
  boxes.push(new Box(width / 2, height - 70));
  boxes.push(new Box(100, height - 100));
  boxes.push(new Box(250, height - 170));
  boxes.push(new Box(50, height - 220));
  boxes.push(new Box(300, height - 280));

  // Start the timer interval + Sophie's code
  timerInterval = setInterval(updateTimer, 1000);
}

function draw() {
  background(220);
  totalTime = millis(); // Start timer + Sophie's code
  
  // Display "Level One" text
  fill(0, 0, 255); // Blue color
  textSize(20);
  textAlign(LEFT, TOP);
  text("Level 1", 15, 12);
  
  // Update and display the player
  player.update();
  player.display();
  
  // Display platforms
  for (let platform of platforms) {
    platform.display();
    player.checkCollision(platform);
  }
  
  // Display boxes
  for (let box of boxes) {
    box.display();
    
    // Check for collision with player
    if (player.checkCollisionBox(box)) {
      box.isTouched = true;
    }
  }
  // Timer + Sophie's code
  totalTime = int(totalTime/1000); // Converts it into seconds and integers
  fill(255,0, 0); // Red colour
  textSize(20);
  textAlign(RIGHT);
  text('Time Left:', 550, 12);
  text(timeLimit - totalTime, 580, 12); // Displays the countdown

  // Check if time limit has been reached + Sophie's code
    if (totalTime >= timeLimit) {
        fill(255,0, 0);
        textAlign(CENTER);
        textSize(40);
        text('YOU FAILED', 300, 180);
        stopTimer(); 
      }
}

function keyPressed() {
  if (keyCode === 87) { // w key
    player.jump();
  }
}

function updateTimer() { // Function to update the timer + Sophie's code
  if (timerRunning) {
    totalTime++;
  }
}

class Player {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 20;
    this.speedX = 3;
    this.speedY = 0;
    this.gravity = 0.2;
    this.isJumping = false;
    this.jumpHeight = -5.7;
  }
  
  update() {
    // gravity
    this.speedY += this.gravity;
    this.y += this.speedY;
    
    // horizontal movement
    if (keyIsDown(65)) { // a key
      this.x -= this.speedX;
    }
    if (keyIsDown(68)) { // d key
      this.x += this.speedX;
    }
    
    
    // constrain player within the canvas
    this.x = constrain(this.x, 0 + this.size / 2, width - this.size / 2);
    this.y = constrain(this.y, 0 + this.size / 2, height - this.size / 2);
  }
  
  display() {
    fill(255, 0, 0);
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }
  
  // collision with platform
  checkCollision(platform) {
    if (this.y + this.size / 2 >= platform.y - platform.height / 2 &&
        this.y - this.size / 2 <= platform.y + platform.height / 2 &&
        this.x >= platform.x - platform.width / 2 &&
        this.x <= platform.x + platform.width / 2) {
      // If collided with the top of the platform
      if (this.y + this.size / 2 <= platform.y - platform.height / 2 + this.speedY) {
        this.y = platform.y - platform.height / 2 - this.size / 2;
        this.speedY = 0;
        this.isJumping = false;
      } else { // If collided with the bottom of the platform
        this.y = platform.y + platform.height / 2 + this.size / 2;
        this.speedY = 0;
      }
    }
  }
  
  // check for collision with box
  checkCollisionBox(box) {
    let distance = dist(this.x, this.y, box.x, box.y);
    if (distance < this.size / 2 + box.size / 2) {
      return true;
    }
    return false;
  }
  
  jump() {
    if (!this.isJumping) {
      this.speedY = this.jumpHeight;
      this.isJumping = true;
    }
  }
}

class Platform {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  
  display() {
    fill(0);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
  }
}

class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.isTouched = false;
  }
  
  display() {
    if (!this.isTouched) {
      fill(255, 255, 0); // Yellow color
      rectMode(CENTER);
      rect(this.x, this.y, this.size, this.size);
    }
  }
}
