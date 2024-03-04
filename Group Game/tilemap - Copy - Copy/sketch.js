let player;
let platforms = [];
let boxes = [];

let totalTime = 0;
let timeLimit = 10;
let timer = 60;

const tileSize = 22; // Size of each tile in the tilemap
let woodImage; // Image of wood for the tilemap
let avatar;
// Define the tilemap grid
const tileMap = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  
];

function preload() {
  woodImage = loadImage('wood.jpg'); // Load the wood image
  avatar = loadImage('avatar1.png');
}

function setup() {
  createCanvas(600, 400);
  player = new Player();
  
  // Create platforms based on the tilemap
  for (let row = 0; row < tileMap.length; row++) {
    for (let col = 0; col < tileMap[row].length; col++) {
      if (tileMap[row][col] === 1) {
        let x = col * tileSize;
        let y = row * tileSize;
        platforms.push(new Platform(x + tileSize / 2, y + tileSize / 2, tileSize, tileSize));
      }
    }
  }

  // Create boxes 
  boxes.push(new Box(width / 2, height - 70));
  boxes.push(new Box(100, height - 110));
  boxes.push(new Box(250, height - 175));
  boxes.push(new Box(50, height - 220));
  boxes.push(new Box(300, height - 280));
}

function draw() {
  background(220);
  totalTime = millis();
  
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
    textAlign(CENTER);
    fill(255,0,0);
    text("Time left: "+ timer, 530, 12);
    //displays the amount of points in the left hand corner and the timer in the right hand corner
    if (frameCount % 60 == 0 && timer>0){
        timer--;
    }
    if(timer ==0){
      textAlign(CENTER);
      fill(255,0,0);
      textSize(40);
      text("You failed!", 300, 200);
    }

  
  }


function keyPressed() {
  if (keyCode === 32 ) { // w key
    player.jump();
  }
}

class Player {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 50;
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
    if (keyIsDown(37)) { // a key
      this.x -= this.speedX;
    }
    if (keyIsDown(39)) { // d key
      this.x += this.speedX;
    }
    
    
    // constrain player within the canvas
    this.x = constrain(this.x, 0 + this.size / 2, width - this.size / 2);
    this.y = constrain(this.y, 0 + this.size / 2, height - this.size / 2);
  }
  
  display() {
    fill(255, 0, 0);
    push();
    imageMode(CENTER);
    image(avatar,this.x, this.y, this.size,this.size);
    console.log(this.y);
    pop();
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
        this.speedY = -0.3;
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
    // Draw grass image as the tilemap
    for (let row = 0; row < this.height / tileSize; row++) {
      for (let col = 0; col < this.width / tileSize; col++) {
        push();
        imageMode(CORNER);
        image(woodImage, this.x - this.width / 2 + col * tileSize, this.y - this.height / 2 + row * tileSize, tileSize, tileSize);
        pop();
      }
    }
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