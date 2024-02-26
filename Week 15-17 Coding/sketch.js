//Tilemaps-Graphics
//INITIALISE TILEMAP VARIABLES
let tilemap = [];
let numDown = 10;
let numAcross = 10;
let tileSize = 50;
let textures =[];
let graphicsMap = [
    [0,0,0,0,0,0,0,0,1,0], //0
    [0,0,0,0,0,0,0,0,0,0],//1
    [0,0,0,1,0,0,0,0,0,0],//2
    [0,0,0,0,0,0,0,0,0,0],//3
    [0,0,0,0,0,0,1,0,0,0],//4
    [0,0,0,0,0,0,0,0,0,0],//5
    [0,1,0,0,0,0,0,0,0,0],//6
    [0,0,0,0,0,0,0,1,0,0],//7
    [0,0,0,0,0,0,0,0,0,0],//8
    [0,0,0,0,0,0,0,0,0,0],//9
];

let tileRules = [
  [0,0,0,0,0,0,0,0,1,0], //0
  [0,0,0,0,0,0,0,0,0,0],//1
  [0,0,0,1,0,0,0,0,0,0],//2
  [0,0,0,0,0,0,0,0,0,0],//3
  [0,0,0,0,0,0,1,0,0,0],//4
  [0,0,0,0,0,0,0,0,0,0],//5
  [0,1,0,0,0,0,0,0,0,0],//6
  [0,0,0,0,0,0,0,1,0,0],//7
  [0,0,0,0,0,0,0,0,0,0],//8
  [0,0,0,0,0,0,0,0,0,0],//9
];

let player;
let playerSprite;
let playerSpeed = 5;
let playerSize = tileSize;

function preload(){
  textures[0] = loadImage("grassy.png");
  textures[1] = loadImage("stone.png");
  playerSprite = loadImage("enemy.png"); // Load player sprite
}

function setup() {
  createCanvas(500,500);

  let tileID = 0;

  for(let across = 0; across < numAcross; across++){
    tilemap[across] = [];
    for (let down = 0; down < numDown; down++){
        //let x = across * tileSize;
        //let y = down * tileSize;
        tilemap[across][down] = new Tile(across, down, tileSize, tileID, textures[graphicsMap[down][across]]);
        tileID++; 
    }
  }
  // Create player object
  player = new Player(playerSprite, 3, 4, tileSize, playerSpeed, tileSize, tileRules);
}
  
function draw() {
  background(0);
  
  for (let across = 0; across < numAcross; across++) {
      for (let down = 0; down < numDown; down++) {
          tilemap[across][down].display();
          tilemap[across][down].debug();
      }
  }
  player.display();
  player.move();
}

function keyPressed(){
  player.setDirection();

}

class Player {
  constructor(sprite, startAcross, startDown, size, speed, tileSize, tileRules) {
      this.sprite = sprite;
      this.acrose = startAcross;
      this.down = startDown;
      this.xPos = startAcross * tileSize;
      this.yPos = startDown * tileSize;
      this.size = size;
      this.speed = speed;
      this.tileSize = tileSize;
      this.tileRules = tileRules;
      this.dirX = 0;
      this.dirY = 0;
      this.isMoving = false;
      this.tx = this.xPos;
      this.ty = this.yPos;
  }

  setDirection() {
    if (!this.isMoving) {
       

        //UP
        if (key === "w") {
            this.dirX = 0;
            this.dirY = -1; 
        }

        //DOWN
        if (key === "s") {
            this.dirX = 0;
            this.dirY = 1; 
        }

        //LEFT
        if (key === "a") {
            this.dirX = -1; 
            this.dirY = 0; 
        }

        //RIGHT
        if (key === "d") {
            this.dirX = 1; 
            this.dirY = 0;
        }

        
        this.checkTargetTile();
    }
}


checkTargetTile() {
    this.across = Math.floor(this.xPos / this.tileSize);
    this.down = Math.floor(this.yPos / this.tileSize);
    let nextTileHorizontal = this.across + this.dirX;
    let nextTileVertical = this.down + this.dirY;

    if (
        
        nextTileHorizontal >= 0 && //top of map
        nextTileHorizontal < numAcross && //bottom of map
        nextTileVertical >= 0 && //left edge of map
        nextTileVertical < numDown //right edge of map
    ) {
        
        if (this.tileRules[nextTileVertical][nextTileHorizontal] != 1) { 
            this.ty = nextTileVertical * this.tileSize;
            this.tx = nextTileHorizontal * this.tileSize;
            this.isMoving = true;
        }
    }
}


  move(){
    if(this.isMoving){
      this.xPos += this.speed * this.dirX;
      this.yPos += this.speed * this.dirY;
  
      if(this.xPos === this.tx && this.yPos === this.ty){
        this.isMoving = false;
        this.dirX = 0;
        this.dirY = 0;
      }
    }
  }  

  display() {
    imageMode(CORNER);
    image(this.sprite, this.xPos, this.yPos, this.size, this.size);
  }
}

class Tile {
  constructor(across, down, tileSize, tileID, texture) {
    this.texture = texture;
    this.across = across;
    this.down = down;
    this.xPos = across * tileSize;
    this.yPos = down * tileSize;
    this.tileSize = tileSize;
    this.tileID = tileID;

  }

  display() {
    noStroke();
    image(this.texture, this.xPos, this.yPos, this.tileSize, this.tileSize);
  }

  debug() {
      //TILE
      //stroke(245);
      //fill(55);
      //rect(this.x, this.y, this.tileSize, this.tileSize);

      //LABEL
      noStroke();
      fill(245);
      textAlign(LEFT, TOP);
      text(this.tileID, this.xPos, this.yPos);
  }
}


