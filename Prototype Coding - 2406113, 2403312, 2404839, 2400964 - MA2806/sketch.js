//Motivating Mysha 
/*Credit: We based our code on Hugh Hammonds found on his github repository for the class
changed it to suit our needs. We commented over it ourselves, changed some of the functions
and developed it to fit the aims of our game (e.g. collecting items).

Bugs: 
(1)The player is able to run out of the canvas (it does not return after this)
to fix this we will add boundaries to the canvas.

Improvements:
(1)We aim to make our canvas/tilemap bigger and make platforms smaller.
We attempted this on our own, but were unsuccessful; we hope to do this
with the help of our tutor.

Notes:
We divided commenting among ourselves, so there may be slight inconsistencies in
the comment styles. */
let tilemap =[];
let tilemap2 =[];
let tilemap3 = [];
 const tileSize = 80;
 let playerStartingX = 1; // X position for the player to start
 let playerStartingY = 6; // Y position for the player to start
 let numAcross = 15;
 let numDown = 10;
 let textures =[];
 let boxes = [];
 let timer = 45; // Sets the timer to 60 seconds
 let timer2 = 30;
 let timer3 = 20;
 let level = 0;
 let font;

 // Creates the graphics map
 let graphicsMap =[
//  0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//2
    [0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 3, 0, 0, 0],//3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//4
    [0, 2, 1, 1, 1, 3, 0, 0, 0, 0, 0, 2, 1, 1, 3],//5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//6
    [0, 0, 0, 0, 0, 2, 1, 1, 3, 0, 0, 0, 0, 0, 0],//7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//8
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],//9
 ];

 let graphicsMap2 =[
//  0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//2
    [0, 4, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],//3
    [0, 0, 0, 0, 0, 0, 0, 4, 5, 5, 6, 0, 0, 0, 0],//4
    [0, 0, 0, 0, 0, 0, 4, 5, 5, 5, 5, 6, 0, 0, 0],//5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 5, 6],//7
    [0, 4, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//8
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],//9
];

let graphicsMap3 =[
//  0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//2
    [0, 0, 0, 0, 0, 0, 7, 8, 8, 8, 8, 8, 9, 0, 0],//3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//4
    [0, 7, 8, 8, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0],//5
    [0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 9, 0, 0, 0, 0],//6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 8, 8],//7
    [0, 0, 0, 7, 8, 8, 8, 9, 0, 0, 7, 8, 8, 8, 8],//8  
    [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],//9
];

 // Creates the rules for the tiles / platforms
 let tileRules =[
//  0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],//0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//2
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],//3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//4
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],//5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//6
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],//7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//8
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],//9
];

 let tileRules2 =[
//  0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],//0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//2
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//3
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],//4
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],//5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],//7
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//8
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],//9
];

 let tileRules3 =[
//  0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],//0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//2
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],//3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//4
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//5
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],//6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],//7
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],//8  
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],//9
 ];

 // Player information
 let player;
 let playerSprite;
 let xSpeed = 5;
 let ySpeed = 10;
 let jumpHeight = 250;
 let playerSize = tileSize;
 let jumpsound = null;

// Loads all the assets
 function preload(){
    textures[0] = loadImage("clear.png");
    textures[1] = loadImage("middleshelf.png");
    textures[2] = loadImage("leftshelf.png");
    textures[3] = loadImage("rightshelf.png");
    textures[4] = loadImage("leftshelf2.png");
    textures[5] = loadImage("middleshelf2.png");
    textures[6] = loadImage("rightshelf2.png");
    textures[7] = loadImage("leftshelf3.png");
    textures[8] = loadImage("middleshelf3.png");
    textures[9] = loadImage("rightshelf3.png");
    bg = loadImage("background.jpg");
    bg2 = loadImage("background2.png");
    bg3 = loadImage("background3.jpg");
    playerSprite = loadImage("avatargif.gif");
    inverseSprite = loadImage("avatargif2.gif");
    toothbrushImage = loadImage("toothbrush.png");
    coffeeImage = loadImage("coffee.png");
    cerealImage = loadImage("cereal.png");
    bookImage = loadImage("books.png");
    laptopImage = loadImage("laptop.png");
    phoneImage = loadImage("phone.png");
    honeyImage = loadImage("honey.png");
    familyImage = loadImage("family.png");
    moonImage = loadImage("moon.png");
    jumpsound = new Audio('jumpsound.mp3');
    font =loadFont('pixelfont.TTF');
 }

function setup(){
let cnv = createCanvas(1200,800);
cnv.center('horizontal');
let tileID= 0;
for (let across = 0; across < numAcross; across++) {
    tilemap[across] = [];
    for (let down = 0; down < numDown; down++) {
    // Setting Texture For Tile
        let textureNum = graphicsMap[down][across];
    // Initialising Tile
        tilemap[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID); // THIS LINE CREATES OUR NEW TILE!
  
        tileID++;
     }
  } // Tile creation finished

for (let across = 0; across < numAcross; across++) {
    tilemap2[across] = [];
    for (let down = 0; down < numDown; down++) {
        // Setting Texture For Tile
    let textureNum = graphicsMap2[down][across];
        // Initialising Tile
    tilemap2[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID); // THIS LINE CREATES OUR NEW TILE!
      
    tileID++;
         }
      } // Tile creation finished

for (let across = 0; across < numAcross; across++) {
    tilemap3[across] = [];
    for (let down = 0; down < numDown; down++) {
            // Setting Texture For Tile
        let textureNum = graphicsMap3[down][across];
            // Initialising Tile
        tilemap3[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID); // THIS LINE CREATES OUR NEW TILE!
          
        tileID++;
    }
} // Tile creation finished
    
  // Create boxes / the collectibles
  boxes.push(new Box(280, 320 , toothbrushImage));
  boxes.push(new Box(1010, 320, coffeeImage));
  boxes.push(new Box(680, 175, cerealImage));
  boxes.push(new Box(400, 650, bookImage));
  boxes.push(new Box(240, 180, laptopImage));
  boxes.push(new Box(800, 330, phoneImage));
  boxes.push(new Box(240, 325, honeyImage));
  boxes.push(new Box(720, 170, familyImage));
  boxes.push(new Box(1040, 475, moonImage));
  player = new Player(playerSprite, playerStartingX, playerStartingY, tileSize, xSpeed, ySpeed, jumpHeight, tileSize, tileRules);
  player2 = new Player(playerSprite, playerStartingX, playerStartingY, tileSize, xSpeed, ySpeed, jumpHeight, tileSize, tileRules2);
  player3 = new Player(playerSprite, playerStartingX, playerStartingY, tileSize, xSpeed, ySpeed, jumpHeight, tileSize, tileRules3);    
}
function draw(){
textFont(font);
if(level== 0){
    fill(235);
}
if(level== 1){
    background(bg);
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].display(); // runs display() method for each tile!
            //tilemap[across][down].debug(); // runs debug() method for each tile!
        }
    }
    player.display();
    player.update();
    for (let i =0; i<3; i++) {
      boxes[i].display();
      
      // Check for collision with player
      if (player.checkCollisionBox(boxes[i])) {
        boxes[i].isTouched = true;
      }
    }

    // Creates the timer
    push();
    textAlign(RIGHT);
    fill(255);
    textSize(40);
    text("Time left: "+ timer, 1175, 40);
    text("Next level ->",1172,770);
    pop();
     // Displays the amount of points in the left hand corner and the timer in the right hand corner
     if (frameCount % 60 == 0 && timer>0){
        timer--;
    }
    if(timer==0){
        level = 4;
    }
    // Displays a failed 'screen' to the player if they don't finish the level in time
    if(boxes[0].isTouched && boxes[1].isTouched && boxes[2] && player.xPos >=1100){
     level = 2;
   }
}
if(level==2){
    background(bg2);
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap2[across][down].display(); // runs display() method for each tile!
            //tilemap[across][down].debug(); // runs debug() method for each tile!
            }
        }

    player2.display();
    player2.update();
    for (let i =3; i<6; i++) {
        boxes[i].display();
        
        // Check for collision with player
        if (player2.checkCollisionBox(boxes[i])) {
          boxes[i].isTouched = true;
        }
      }
        
    // Creates the timer
    push();
    textAlign(RIGHT);
    fill(255);
    textSize(40);
    text("Time left: "+ timer2, 1175, 40);
    text("Next level ->",1172,770);
    pop();
    // Displays the amount of points in the left hand corner and the timer in the right hand corner
    if (frameCount % 60 == 0 && timer2>0){
        timer2--;
    }
    if(timer2==0){
        level = 4;
    }
    // Displays a failed 'screen' to the player if they don't finish the level in time
    if(boxes[3].isTouched && boxes[4].isTouched && boxes[5] && player2.xPos >=1100){
     level = 3;
   }
}

if(level==3){
    background(bg3);
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap3[across][down].display(); // runs display() method for each tile!
            //tilemap[across][down].debug(); // runs debug() method for each tile!
        }
    }
    player3.display();
    player3.update();
    for (let i =6; i<9; i++) {
        boxes[i].display();
        
        // Check for collision with player
        if (player3.checkCollisionBox(boxes[i])) {
          boxes[i].isTouched = true;
        }
      }
        // Creates the timer
    push();
    textAlign(RIGHT);
    fill(255);
    textSize(40);
    text("Time left: "+ timer3, 1175, 40);
    text("Next level ->",1172,770);
    pop();    
    // Displays the amount of points in the left hand corner and the timer in the right hand corner
    if (frameCount % 60 == 0 && timer3>0){
        timer3--;
    }

    if(timer3==0){
        level = 4;
    }
    // Displays a failed 'screen' to the player if they don't finish the level in time
    if(boxes[6].isTouched && boxes[7].isTouched && boxes[8] && player3.xPos >=1100){
     level = 5;
   }
}

if (level == 4){
background(200);
textAlign(CENTER);
push();
fill(255);
textSize(65);
text("You failed!", 600, 400);
pop();
}

if (level == 5){
    background(200);
    textAlign(CENTER);
    push();
    fill(255);
    textSize(65);
    text("Congratulations!", 600, 400);
    pop();
    }
    
}


function keyPressed(){
    if (!player.isJumping && !player.isFalling && player.isGrounded) { //checks if player.isJUMPING = false, player.isFalling = false, AND player.isGrounded = true
        //Check if key is space bar (our jump button).
        if (key === " ") {
            player.isJumping = true;
            player.jumpTarget = player.yPos - player.jumpHeight;
            console.log(player.jumpTarget);
            jumpsound.play();
        }

    }
    if (!player2.isJumping && !player2.isFalling && player2.isGrounded) { //checks if player.isJUMPING = false, player.isFalling = false, AND player.isGrounded = true
        //Check if key is space bar (our jump button).
        if (key === " ") {
            player2.isJumping = true;
            player2.jumpTarget = player2.yPos - player2.jumpHeight;
            console.log(player2.jumpTarget);
            jumpsound.play();
        }
    }

    if (!player3.isJumping && !player3.isFalling && player3.isGrounded) { //checks if player.isJUMPING = false, player.isFalling = false, AND player.isGrounded = true
        //Check if key is space bar (our jump button).
        if (key === " ") {
            player3.isJumping = true;
            player3.jumpTarget = player3.yPos - player3.jumpHeight;
            console.log(player3.jumpTarget);
            jumpsound.play();
        }
    }
}


class Player{//creating player class
    constructor(sprite, startAcross, startDown, size, xSpeed, ySpeed, jumpHeight, tileSize, tileRules) {
        //constructing values to pass through the class
        this.sprite = sprite;
        this.across = startAcross;
        this.down = startDown;
        this.xPos = this.across*tileSize;
        this.yPos = this.down*tileSize;
        //values that track players location on the canvas
        this.size = size;
        //value for the size of the player sprite
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.tileRules = tileRules;
        this.tileSize = tileSize;
        this.dirX = 0;
        this.dirY = 0;
        //values that will be included in calculations for the players horizontal movements
        this.jumpHeight = jumpHeight;
        this.jumpTarget;
        //values that track the progress of the players jumping
        this.playerLeft;
        this.playerRight;
        this.playerTop;
        this.playerBottom;
        this.topLeft = {};
        this.topRight = {};
        this.bottomLeft = {};
        this.bottomRight = {};
        this.collisionXPadding = 10;
        this.collisionYPadding = 5;
        //values that will be included in calculations to check for collisions between player and tiles
    }

    checkCollisionBox(box) { //function to check if the player is colliding with an item
      let distance = dist(this.xPos, this.yPos, box.x, box.y);
      if (distance < this.size / 2 + box.size / 2) {
        return true;
      }
      return false;
      //measures the distance between the center of the item and the center of the player sprite and if it is less than
      //the distance when the sprite and item are just touching, it returns true
    }

    update(){
        this.trackCorners();
        this.setXdirection();
        this.checkJump();
        this.collisions();
        this.move();
        this.display();
        //this class updates the status of the player's values (created in the construct) based on all of the called functions
        //within the player class.


    }

   

    trackCorners(){
        this.playerLeft = this.xPos + this.collisionXPadding;
        this.playerRight = this.xPos + this.tileSize - 1 - this.collisionXPadding;
        this.playerTop = this.yPos + this.collisionYPadding;
        this.playerBottom = this.yPos + this.tileSize - 1;
        // this defines each corner of the player sprite using the x and y coordinates and adding padding inside the margin of the player sprite
        this.topLeft = {
            x: this.playerLeft,
            y: this.playerTop
        }
        //stores the x and y coordinates of top left corner under one variable
        this.topRight = {
            x: this.playerRight,
            y: this.playerTop
        }
        //stores the x and y coordinates of top right corner under one variable
        this.bottomLeft = {
            x: this.playerLeft,
            y: this.playerBottom
        }
        //stores the x and y coordinates of bottom left corner under one variable
        this.bottomRight = {
            x: this.playerRight,
            y: this.playerBottom
        }
        //stores the x and y coordinates of bottom right corner under one variable


    }

    checkJump(){ //creating function to track if the jump has been completed
        if(this.yPos === this.jumpTarget){
            this.isFalling = true;
            this.isJumping = false;
        }
        //checks if the vertical location of the player has reached the extent of the vertical
        //jumping distance, if it has then it switches isFalling to true and isJumping to false

    }

    setXdirection(){//creating function to track the horizontal direction the player is moving in
        if (keyIsDown("37")){
            this.dirX= -1.25;
            this.sprite = inverseSprite;
        }
        //if the left arrow key is down, the player will move to the left
        if (keyIsDown("39")){
            this.dirX = 1.25;
            this.sprite = playerSprite;
        }
        //if the right arrow is down, the player will move to the right

        if(!keyIsDown("37")&& !keyIsDown("39")){
            this.dirX = 0;
        }
        //if neither the left nor right arrow keys are down, the player does not move horizontally at all
    }

    setYDirection() {//creating function to check the vertical direction the player is moving in
        if (this.isGrounded) {
            this.dirY = 0;
        }
        //if the player is grounded, the player will not move vertically at all
        
        if (this.isJumping) {
            this.dirY = -1;
        }
        //if the player is jumping, the player will move upwards
        if (this.isFalling) {
            this.dirY = 0.75;
        }
        //if the player is falling, the player will move downwards
    }
    
    collisions(){//creating function to check for any collisions between the player and other elements
        this.setYDirection();
        //resetting the y direction to the current one
        let velX = this.dirX *this.xSpeed;
        let velY = this.dirY *this.ySpeed;
        //defines the velocities of the x and y coordinates as the direction multiplied by each respective speed
        if (this.collisionCheck(velX, 0)){
            this.dirX=0;
            velX = this.dirX * this.xSpeed;
        }
        //detects collisions between the player and the x axis

        if(this.overlapCollision(this.topLeft.x, this.topLeft.y +velY)||
        this.overlapCollision(this.topRight.x, this.topRight.y + velY)){
            this.isJumping = false;
            this.isFalling = true;
            //checks if the character is colliding with an above tile, if it is, it sends the character back down
            this.setYDirection();
            velY = this. dirY * this.ySpeed;
            //resets the y velocity after these changes
        }

        if (this.overlapGround(this.bottomRight.x, this.bottomRight.y) ||
        this.overlapGround((this.bottomRight.x, this.bottomRight.y))){
            this.yPos -= this.ySpeed;
            //checks if the player is sinking into the ground tiles, if it is, pushes it back on top of the ground tiles
        }
        if (this.overlapGround(this.bottomLeft.x, this.bottomLeft.y + 1) ||
            this.overlapGround(this.bottomRight.x, this.bottomRight.y + 1)) {
                this.isGrounded = true;
                this.isFalling = false;
                //if the player is on top of the ground or a platform, switches grounded to true
                this.setYDirection();
                velY = this.dirY * this.ySpeed;
                //resets the y velocity after these changes
            } else {
                this.isGrounded = false;
                //if the previous condition is not true, then the player is not grounded
    
                if (!this.isJumping) {
                    this.isFalling = true;
                }
                //if the player isnt grounded and it isnt jumping, then the player will fall down

            this.setYDirection();
            velY = this.dirY * this.ySpeed;
            //resets the y velocity after these changes
        }
    }

    move(){//creating a function to move the player sprite
        // Calculate the next position
        let nextX = this.xPos + this.xSpeed * this.dirX;
        let nextY = this.yPos + this.ySpeed * this.dirY;
        
        // Check if the next position is within the canvas boundaries
        if (nextX >= 0 && nextX + this.size <= width) {
            this.xPos = nextX; // Update X position if within canvas boundaries
        }
        if (nextY >= 0 && nextY + this.size <= height) {
            this.yPos = nextY; // Update Y position if within canvas boundaries
            
        }
    }

    collisionCheck(velX,velY){//creating a function to check for collisions between two points
        if (this.overlapCollision(this.topLeft.x + velX, this.topLeft.y + velY) ||
        this.overlapCollision(this.bottomLeft.x + velX, this.bottomLeft.y + velY) ||
        this.overlapCollision(this.topRight.x + velX, this.topRight.y + velY) ||
        this.overlapCollision(this.bottomRight.x + velX, this.bottomRight.y + velY)) {
        return true;
        //checks if the two points are colliding, if they are, returns true
    } 

    else {
        return false;
        //if this condition is not true, returns false
    }  
    }

isWithinBounds(tileX, tileY) {//creating a function to check if the tile is in bounds of movement
    return tileY >= 0 && tileY < this.tileRules.length && tileX >= 0 && tileX < this.tileRules[0].length;
}

overlapCollision(pointX, pointY) {
    let tileX = Math.floor(pointX / this.tileSize);
    let tileY = Math.floor(pointY / this.tileSize);
    //keeps the number produced by calculations as an integer so it can be processed as a position in an array
    if (!this.isWithinBounds(tileX, tileY)) {
        return false;
        //returns whether the condition is true or false
    }
    return this.tileRules[tileY][tileX] !== 0;
    //returns that the position in the tileRules array is not 0
}

overlapGround(pointX, pointY) {
    let tileX = Math.floor(pointX / this.tileSize);
    let tileY = Math.floor(pointY / this.tileSize);
    //keeps the number produced by calculations as an integer so it can be processed as a position in an array
    if (!this.isWithinBounds(tileX, tileY)) {
        return false; //returns whether the condition is true or false
    }
    return this.tileRules[tileY][tileX] === 1;
    //returns that the position in the tileRules array is 1
}


display() {
    imageMode(CORNER);
    image(this.sprite, this.xPos, this.yPos, this.size, this.size);
    //displays the player sprite image and updates it with every movement
    }
}

class Tile {
    //initializing tile objects
    constructor(texture, across, down, tileSize, tileID) {  
        this.texture = texture; 
        this.across = across; 
        this.down = down; 
        //calculates the y posiiton of the tile which is based on the vertical position and size
        this.xPos = across * tileSize; // pixel value generated from across
        this.yPos = down * tileSize; // pixel value generated from down
        this.tileSize = tileSize; 
        this.tileID = tileID; 
    }

    display() {
        //Displays the texture of instance of NPC class
        noStroke(); 
        image(this.texture, this.xPos, this.yPos, this.tileSize, this.tileSize); // diaplays the texture image of of the tile of its posiiton and size
    }
    debug() {
        //TILE
        stroke(245);
        noFill();
        rect(this.xPos, this.yPos, this.tileSize, this.tileSize);

        //LABEL
        //displays the ID of the tile for the debug purpose
        noStroke();
        fill(255);
        textAlign(LEFT, TOP);
        text(this.tileID, this.xPos, this.yPos);
    } // I've hidden the DEBUG method but this is where the code for it goes!
}

// defines a class 'box' with the constructor function 
class Box {
    constructor(x, y, image) {
      this.x = x;
      this.y = y;
      this.size = 80;
      this.image = image;
      this.isTouched = false; //initializes the touched state of the box to false
    }
    
    display() {
      if (!this.isTouched) { // check the box not have been touched 
        push();
        imageMode(LEFT); 
        image(this.image, this.x, this.y, this.size, this.size); // diaplays the position and the size of the image 
        pop();
        }
       }
      }
