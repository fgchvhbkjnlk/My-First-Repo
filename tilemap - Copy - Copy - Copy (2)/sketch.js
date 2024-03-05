 let tilemap =[];
 let tileSize = 50;
 let numAcross = 24;
 let numDown = 16;
 let textures =[];

 let graphicsMap =[
//   0  1  2  3  4  5  6  7  8  9  10 11
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

 ]

 let tileRules =[
//   0  1  2  3  4  5  6  7  8  9  10 11
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 ]

 let player;
 let playerSprite;
 let xSpeed =5;
 let ySpeed = 10;
 let jumpHeight = 100;
 let playerSize = tileSize;

 function preload(){
    textures[0] = loadImage("clear.png");
    textures[1] = loadImage("wood.jpg");

    playerSprite = loadImage("avatar1.png");
 }

 function setup(){
    createCanvas(1200,800);
    let tileID= 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            //Setting Texture For Tile
            let textureNum = graphicsMap[down][across];
    
            //Initialising Tile
            tilemap[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID); // THIS LINE CREATES OUR NEW TILE!

            tileID++;
        }
    } //Tile creation finished

    player = new Player(playerSprite,300,200,tileSize, xSpeed, ySpeed, jumpHeight, tileSize, tileRules);

 }

 function draw(){
    background(255);
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].display(); // runs display() method for each tile!
            //tilemap[across][down].debug(); // runs debug() method for each tile!
        }
    }
    player.display();
    player.update();
 }

function keyPressed(){
    if (!player.isJumping && !player.isFalling && player.isGrounded) { //checks if player.isJUMPING = false, player.isFalling = false, AND player.isGrounded = true
        //Check if key is space bar (our jump button).
        if (key === " ") {
            player.isJumping = true;
            player.jumpTarget = player.yPos - player.jumpHeight;
            console.log(player.jumpTarget);
        }
    }
}

class Player{
    constructor(sprite, startAcross, startDown, size, xSpeed, ySpeed, jumpHeight, tileSize, tileRules) {
        this.sprite = sprite;
        this.across = startAcross;
        this.down = startDown;
        this.xPos = this.across*tileSize;
        this.yPos = this.down*tileSize;
        this.size = size;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.tileRules = tileRules;
        this.tileSize = tileSize;
        this.dirX = 0;
        this.dirY = 0;
        this.jumpHeight = jumpHeight;
        this.jumpTarget;
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
    }

    update(){
        this.trackCorners();
        this.setXdirection();
        this.checkJump();
        this.collisions();
        this.move();
        this.display();
        


    }

   

    trackCorners(){
        this.playerLeft = this.xPos + this.collisionXPadding;
        this.playerRight = this.xPos + this.tileSize - 1 - this.collisionXPadding;
        this.playerTop = this.yPos + this.collisionYPadding;
        this.playerBottom = this.yPos + this.tileSize - 1;
        
        this.topLeft = {
            x: this.playerLeft,
            y: this.playerTop
        }
        this.topRight = {
            x: this.playerRight,
            y: this.playerTop
        }
        this.bottomLeft = {
            x: this.playerLeft,
            y: this.playerBottom
        }
        this.bottomRight = {
            x: this.playerRight,
            y: this.playerBottom
        }

    }

    checkJump(){
        if(this.yPos === this.jumpTarget){
            this.isFalling = true;
            this.isJumping = false;
        }

    }

    setXdirection(){
        if (keyIsDown("37")){
            this.dirX= -1;
        }
        
        if (keyIsDown("39")){
            this.dirX = 1;
        }

        if(!keyIsDown("37")&& !keyIsDown("39")){
            this.dirX = 0;
        }
    }
    setYDirection() {
        if (this.isGrounded) {
            this.dirY = 0;
        }
        
        if (this.isJumping) {
            this.dirY = -1;
        }

        if (this.isFalling) {
            this.dirY = 0.5;
        }
    }
    collisions(){
        this.setYDirection();

        let velX = this.dirX *this.xSpeed;
        let velY = this.dirY *this.ySpeed;

        if (this.collisionCheck(velX, 0)){
            this.dirX=0;
            velX = this.dirX * this.xSpeed;
        }

        if(this.overlapCollision(this.topLeft.x, this.topLeft.y +velY)||
        this.overlapCollision(this.topRight.x, this.topRight.y + velY)){
            this.isJumping = false;
            this.isFalling = true;

            this.setYDirection();
            velY = this. dirY * this.ySpeed;
        }

        if (this.overlapGround(this.bottomRight.x, this.bottomRight.y) ||
        this.overlapGround((this.bottomRight.x, this.bottomRight.y))){
            this.yPos -= this.ySpeed;

        }
        if (this.overlapGround(this.bottomLeft.x, this.bottomLeft.y + 1) ||
            this.overlapGround(this.bottomRight.x, this.bottomRight.y + 1)) {
                //console.log("Player is on the ground");
                this.isGrounded = true;
                this.isFalling = false;

                this.setYDirection();
                velY = this.dirY * this.ySpeed;
            } else {
                //console.log("Player is in the air");
                this.isGrounded = false;
                
    
                if (!this.isJumping) {
                    this.isFalling = true;
                }

            this.setYDirection();
            velY = this.dirY * this.ySpeed;
        }
    }

    move() {
        this.yPos += this.ySpeed * this.dirY;
        this.xPos += this.xSpeed * this.dirX;
    }



       
    
    collisionCheck(velX,velY){
        if (this.overlapCollision(this.topLeft.x + velX, this.topLeft.y + velY) ||
        this.overlapCollision(this.bottomLeft.x + velX, this.bottomLeft.y + velY) ||
        this.overlapCollision(this.topRight.x + velX, this.topRight.y + velY) ||
        this.overlapCollision(this.bottomRight.x + velX, this.bottomRight.y + velY)) {
        //COLLISION ON X AXIS
        return true;
    } 

    
    else {
        return false;
    }  
    }

   /* overlapCollision(pointX,pointY){
        let tileX = Math.floor(pointX / this.tileSize);
        let tileY = Math.floor(pointY / this.tileSize);
        console.log(tileY);
        return this.tileRules[tileY][tileX] != 0;
    }

    overlapGround(pointX,pointY){
        let tileX = Math.floor(pointX / this.tileSize);
        let tileY = Math.floor(pointY / this.tileSize);
        console.log(tileY);
       // console.log(tileX);
        return this.tileRules[tileY][tileX] === 1;
    }
*/
isWithinBounds(tileX, tileY) {
    return tileY >= 0 && tileY < this.tileRules.length && tileX >= 0 && tileX < this.tileRules[0].length;
}

overlapCollision(pointX, pointY) {
    let tileX = Math.floor(pointX / this.tileSize);
    let tileY = Math.floor(pointY / this.tileSize);
    if (!this.isWithinBounds(tileX, tileY)) {
        return false; // Out of bounds, return false
    }
    return this.tileRules[tileY][tileX] !== 0;
}

overlapGround(pointX, pointY) {
    let tileX = Math.floor(pointX / this.tileSize);
    let tileY = Math.floor(pointY / this.tileSize);
    if (!this.isWithinBounds(tileX, tileY)) {
        return false; // Out of bounds, return false
    }
    return this.tileRules[tileY][tileX] === 1;
}


    display() {
        imageMode(CORNER);
        image(this.sprite, this.xPos, this.yPos, this.size, this.size);
    }
}

class Tile {
    constructor(texture, across, down, tileSize, tileID) {
        this.texture = texture;
        this.across = across; // new values!
        this.down = down; // new values!
        this.xPos = across * tileSize; // pixel value generated from across
        this.yPos = down * tileSize; // pixel value generated from down
        this.tileSize = tileSize;
        this.tileID = tileID;
    }

    display() {
        //Displays the texture of instance of NPC class
        noStroke();
        image(this.texture, this.xPos, this.yPos, this.tileSize, this.tileSize)
    }

    debug() {
        //TILE
        stroke(245);
        noFill();
        rect(this.xPos, this.yPos, this.tileSize, this.tileSize);

        //LABEL
        noStroke();
        fill(255);
        textAlign(LEFT, TOP);
        text(this.tileID, this.xPos, this.yPos);
    } // I've hidden the DEBUG method but this is where the code for it goes!
}
