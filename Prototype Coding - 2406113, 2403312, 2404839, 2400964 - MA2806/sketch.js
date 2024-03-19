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
let tilemap =[]; //creating tilemap array for first level.
let tilemap2 =[];//creating tilemap array for second level.
let tilemap3 = [];//creating tilemap array for third level.
 const tileSize = 80;// setting the tilesize for the tilemaps, this is a constant, so the value will not change.
 let playerStartingX = 1; // X position for the player to start
 let playerStartingY = 8; // Y position for the player to start
 let numAcross = 15;// The number of tiles in rows of the tilemap.
 let numDown = 10;//The number of tiles in columns of the tilemap.
 let textures =[];// Creating an array for the textures to be displayed in the graphics map.
 let boxes = [];//Creating an array to store the collectible assets in.
 let timer = 45; // Sets the level 1 timer to 45 seconds.
 let timer2 = 30;// Sets the level 2 timer to 30 seconds.
 let timer3 = 20;// Sets the level 3 timer to 20 seconds.
 let level = 0;//sets the level to 0, so that when the game loads, it begins with the title screen.
 let font;//creating font variable to declare later.
 let firstY= 450;//setting the initial y coordinate on two of the images on the title screen.
 let secondY= 650;//setting the initial y coordinate on two of the images on the title screen.
 let firstSpeed= 1;//setting the speed at which two of the images on the title screen will move.
 let secondSpeed=-1;//setting the speed at which two of the images on the title screen will move.

// Creates the graphics map for the first level
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
    //0s will load a transparent png, 1s will load the middle of a platform, 2s and 3s load the ends of a platform.
 ];
// Creates the graphics map for the second level.
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
    //0s will load a transparent png, 5s will load the middle of a platform, 4s and 6s load the ends of a platform.
];
// Creates the graphics map for the third level.
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
    //0s will load a transparent png, 8s will load the middle of a platform, 7s and 9s load the ends of a platform.
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
    //0s will allow the player to pass through them, 1s will block the player from moving through them.
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
    //0s will allow the player to pass through them, 1s will block the player from moving through them.
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
    //0s will allow the player to pass through them, 1s will block the player from moving through them.
 ];

 // Player information
 let player;//creating a variable for the level 1 player.
 let player2;//creating a variable for the level 2 player.
 let player3; //creating a variable for the level 3 player.
 let playerSprite;//creating a variable for the playersprite (e.g. the image that will be displayed for the player.)
 let xSpeed = 5;//creating a variable for the speed at which the player moves on the x axis.
 let ySpeed = 10;//creating a variable for the speed at which the player moves on the y axis.
 let jumpHeight = 185;//creating a variable for the height the player jumps by.
 let playerSize = tileSize;//setting the player size to equal that of the tile size.
 let jumpsound = null;//setting the jumpsound to null initially (will not automatically play).


 function preload(){
    //Preloading all needed assets so that they are ready to be called in draw.
    textures[0] = loadImage("clear.png");
    //preloading the clear png that will be represented by 0 in the graphics map.
    textures[1] = loadImage("middleshelf.png");
    textures[2] = loadImage("leftshelf.png");
    textures[3] = loadImage("rightshelf.png");
    //preloading the left, middle and right sections of the platforms for level 1.
    textures[4] = loadImage("leftshelf2.png");
    textures[5] = loadImage("middleshelf2.png");
    textures[6] = loadImage("rightshelf2.png");
    //preloading the left, middle and right sections of the platforms for level 2.
    textures[7] = loadImage("leftshelf3.png");
    textures[8] = loadImage("middleshelf3.png");
    textures[9] = loadImage("rightshelf3.png");
    //preloading the left, middle and right sections of the platforms for level 3.
    bg = loadImage("background.jpg");
    bg2 = loadImage("background2.jpg");
    bg3 = loadImage("background3.jpg");
    //loading the images to be set as the background for each level respectively.
    playerImage = loadImage("avatar.png");
    //loading the image of the player to be used in the title screen.
    playerSprite = loadImage("avatargif.gif");
    inverseSprite = loadImage("avatargif2.gif");
    //loading gifs of the player that face left and right for each direction the player moves.
    toothbrushImage = loadImage("toothbrush.png");
    coffeeImage = loadImage("coffee.png");
    cerealImage = loadImage("cereal.png");
    bookImage = loadImage("books.png");
    laptopImage = loadImage("laptop.png");
    phoneImage = loadImage("phone.png");
    honeyImage = loadImage("honey.png");
    familyImage = loadImage("family.png");
    moonImage = loadImage("moon.png");
    //loading images of the collectibles to be used on each level and also featured on the title screen.
    jumpsound = new Audio('jumpsound.mp3');
    backgroundSound = new Audio('backgroundmusic.mp3');
    failSound = new Audio('failtrumpet.mp3');
    successSound = new Audio('succestrumpet.mp3');
    //loading sounds to use throughout the game for jumping, fail scene, success scene and the background music.
    font =loadFont('pixelfont.TTF');
    //loading the font to be used throughout the game
 }

function setup(){
let cnv = createCanvas(1200,800);
cnv.center('horizontal');
//creating a canvas that is 1200px wide and 800px tall and positioning it to the center of the window.
let tileID= 0;
//setting the ID of the very first tile as 0.
for (let across = 0; across < numAcross; across++) {
    tilemap[across] = [];
    //for the amount of tiles there will be across the map, create an array.
    for (let down = 0; down < numDown; down++) {
    //within the across array of the tilemap, for the amount of tiles there will be down the map, create an array.
        let textureNum = graphicsMap[down][across];
    //setting the texture to the value of the equivalent placement within the graphics map.
        tilemap[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID);
    //creates a new tile using the texture, its position in the map, its size and its ID.
        tileID++;
    //increase the ID with each iteration of the loop
    }
} // Tile creation finished

for (let across = 0; across < numAcross; across++) {
    tilemap2[across] = [];
     //for the amount of tiles there will be across the map, create an array.
    for (let down = 0; down < numDown; down++) {
    //within the across array of the tilemap, for the amount of tiles there will be down the map, create an array.
        let textureNum = graphicsMap2[down][across];
     //setting the texture to the value of the equivalent placement within the graphics map.
        tilemap2[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID); 
    //creates a new tile using the texture, its position in the map, its size and its ID.
        tileID++;
    //increase the ID with each iteration of the loop
    }
} // Tile creation finished

for (let across = 0; across < numAcross; across++) {
    tilemap3[across] = [];
    //for the amount of tiles there will be across the map, create an array.
    for (let down = 0; down < numDown; down++) {
    //within the across array of the tilemap, for the amount of tiles there will be down the map, create an array.
        let textureNum = graphicsMap3[down][across];
    //setting the texture to the value of the equivalent placement within the graphics map.       
        tilemap3[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID);
    //creates a new tile using the texture, its position in the map, its size and its ID.      
        tileID++;
    //increase the ID with each iteration of the loop
    }
} // Tile creation finished

boxes.push(new Box(280, 320 , toothbrushImage));
boxes.push(new Box(1010, 320, coffeeImage));
boxes.push(new Box(680, 175, cerealImage));
boxes.push(new Box(400, 650, bookImage));
boxes.push(new Box(240, 180, laptopImage));
boxes.push(new Box(800, 330, phoneImage));
boxes.push(new Box(240, 325, honeyImage));
boxes.push(new Box(720, 170, familyImage));
boxes.push(new Box(1040, 475, moonImage));
//each of these lines creates a new 'box' (collectible) to put in the boxes array, using the box class and setting the coordinates and image of the box.
player = new Player(playerSprite, playerStartingX, playerStartingY, tileSize, xSpeed, ySpeed, jumpHeight, tileSize, tileRules);
player2 = new Player(playerSprite, playerStartingX, playerStartingY, tileSize, xSpeed, ySpeed, jumpHeight, tileSize, tileRules2);
player3 = new Player(playerSprite, playerStartingX, playerStartingY, tileSize, xSpeed, ySpeed, jumpHeight, tileSize, tileRules3);
//each of these lines creates a player for each level, using the player class, and setting the values created above to determine how the player is represented visually and how they move and interact with objects.    
}

function draw(){
background(0);
//sets the background of the canvas to black.
textFont(font);
//sets the font to the one we created in the preload function.
backgroundSound.play();
//plays the background music.
if(level== 0){//everything inside this if statement contributes to the title screen.
    background(247,71,142);
    //setting the colour of the background for the title screen.
    push();
    fill(255);
    textSize(75);
    textAlign(CENTER);
    text("Motivating Mysha!", 600, 100);
    fill(255, 204, 229);
    textSize(30);
    text("Aims:", 600, 170);
    text("Collect all the tokens", 600, 200); 
    text("on each level before the time runs out.", 600, 230);
    text("Controls:", 600, 270);
    text("Right and Left arrows to move,", 600, 300);
    text("Space bar to jump.", 600, 330);
    textSize(25);
    text("Click anywhere to Start.", 600, 770);
    pop();
    //displaying text on the title screen (name, aims, controls, etc.)
    imageMode(CENTER);
    image(playerImage, 250, 550, 400, 400);
    image(honeyImage, 500, firstY, 200, 200);
    image(coffeeImage, 650, secondY, 180, 180);
    image(bookImage, 850, firstY, 210, 210);
    image(moonImage, 1000, secondY, 180, 180);
    //displays the player and 4 of the collectibles 
    firstY= firstY+firstSpeed;
    secondY= secondY+secondSpeed;
    //changes the values of the y coordinates for the collectible images
    if(firstY==650){
        firstSpeed = -1;
    }
    if(firstY==450){
        firstSpeed = 1;
    }
    //sets a upper and lower barrier for the y coordinate, at this point the direction it moves will be reversed.
    if(secondY==450){
        secondSpeed = 1;
    }
    if(secondY==650){
        secondSpeed = -1;
    }
    //sets a upper and lower barrier for the y coordinate, at this point the direction it moves will be reversed.
}
if(level== 1){// everything inside of this if statement contributes to level 1.
    image(bg, 0,0, 1200,800);
    //sets the first background image as the background
    for (let across = 0; across < numAcross; across++) {
        //continue this iteration for the amount of tiles across the tielmap
        for (let down = 0; down < numDown; down++) {
        //continue this iteration for the amount of tiles across the tielmap
            tilemap[across][down].display();
        //displays the tiles assigned texture
        }
    }
    player.display();
    player.update();
    //displays the player and updates how it will be displayed with movement by calling functions within the class
    for (let i =0; i<3; i++) {
      boxes[i].display();
      //displays the first 3 'boxes' that are featured on the first level.
      if (player.checkCollisionBox(boxes[i])) {
        boxes[i].isTouched = true;
        //checks whether the player collides with each collectible using the function within the box class, and if so sets the value to true.
      }
    }

    push();
    textAlign(RIGHT);
    fill(255);
    textSize(40);
    text("Time left: "+ timer, 1175, 40);
    text("Next level ->",1172,770);
    pop();
    //displays the timer in the corner of the screen, as well as some text directing the player to the next level.
    if (frameCount % 60 == 0 && timer>0){
        timer--;
    //for every time the framecount is divisible by 60 (every second), the timer will decrease by 1.
    }
    if(timer==0){
        level = 4;
    // Displays a failed screen to the player if they don't finish the level in time
    }
    if(boxes[0].isTouched && boxes[1].isTouched && boxes[2] && player.xPos >=1100){
     level = 2;
    //if all of the collectibles have been collected and the player has reached the right side of the screen, change to level 2.
   }
}
if(level==2){// everything inside of this if statement contributes to level 1.
    image(bg2, 0,0, 1200,800);
     //sets the second background image as the background
    for (let across = 0; across < numAcross; across++) {
    //continue this iteration for the amount of tiles across the tielmap
        for (let down = 0; down < numDown; down++) {
    //continue this iteration for the amount of tiles down the tielmap
            tilemap2[across][down].display();
    //displays the tiles assigned texture
            }
        }
    player2.display();
    player2.update();
    //displays the player and updates how it will be displayed with movement by calling functions within the class
    for (let i =3; i<6; i++) {
        boxes[i].display();
        //displays the next 3 'boxes' that are featured on the second level.
        // Check for collision with player
        if (player2.checkCollisionBox(boxes[i])) {
          boxes[i].isTouched = true;
          //checks whether the player collides with each collectible using the function within the box class, and if so sets the value to true.
        }
      }

    push();
    textAlign(RIGHT);
    fill(255);
    textSize(40);
    text("Time left: "+ timer2, 1175, 40);
    text("Next level ->",1172,770);
    pop();
    //displays the timer in the corner of the screen, as well as some text directing the player to the next level.
    if (frameCount % 60 == 0 && timer2>0){
        timer2--;
    //for every time the framecount is divisible by 60 (every second), the timer will decrease by 1.
    }
    if(timer2==0){
        level = 4;
    // Displays a failed screen to the player if they don't finish the level in time
    }
    // Displays a failed 'screen' to the player if they don't finish the level in time
    if(boxes[3].isTouched && boxes[4].isTouched && boxes[5] && player2.xPos >=1100){
     level = 3;
    //if all of the collectibles have been collected and the player has reached the right side of the screen, change to level 2.
   }
}

if(level==3){// everything inside of this if statement contributes to level 3.
    image(bg3, 0,0, 1200,800);
    //sets the third background image as the background
    for (let across = 0; across < numAcross; across++) {
        //continue this iteration for the amount of tiles across the tielmap
        for (let down = 0; down < numDown; down++) {
            //continue this iteration for the amount of tiles down the tielmap
            tilemap3[across][down].display();
            //displays the tiles assigned texture
        }
    }
    player3.display();
    player3.update();
        //displays the player and updates how it will be displayed with movement
    for (let i =6; i<9; i++) {
        boxes[i].display();
        //displays the next 3 'boxes' that are featured on the third level.
        if (player3.checkCollisionBox(boxes[i])) {
          boxes[i].isTouched = true;
        //checks whether the player collides with each collectible using the function within the box class, and if so sets the value to true.
        }
      }
    
    push();
    textAlign(RIGHT);
    fill(255);
    textSize(40);
    text("Time left: "+ timer3, 1175, 40);
    text("Finish ->",1172,770);
    pop();    
    //displays the timer in the corner of the screen, as well as some text directing the player to the next level.
    if (frameCount % 60 == 0 && timer3>0){
        timer3--;
    //for every time the framecount is divisible by 60 (every second), the timer will decrease by 1.
    }

    if(timer3==0){
        level = 4;
    // Displays a failed screen to the player if they don't finish the level in time
    }
    if(boxes[6].isTouched && boxes[7].isTouched && boxes[8] && player3.xPos >=1100){
     level = 5;
    //if all of the collectibles have been collected and the player has reached the right side of the screen, change to level 2.
   }
}

if (level == 4){//everything inside of this if statement contributes to the fail screen.
    backgroundSound.pause();
    //stops playing the background music
    failSound.play();
    //plays the fail sound (sad trumpets)
    background(247, 71, 142);
    //sets background colour of fail scene
    textAlign(CENTER);
    push();
    fill(255);
    textSize(65);
    text("You failed!", 600, 250);
    textSize(40);
    text("Click anywhere to Restart.", 600, 400);
    pop();
    //displays the text on the fail screen
    if(mousePressed== true){
        level=1;
        //if the player presses the mouse, the game will restart at level 1.
    }
}

if (level == 5){//everything inside of this if statement contributes to the end congratulations scene.
    backgroundSound.pause();
    //stops playing the background music
    successSound.play();
    //plays the success sound (happy trumpet fanfare)
    background(247, 71, 142);
    //sets background colour of congratulations scene
    textAlign(CENTER);
    push();
    fill(255);
    textSize(65);
    text("Congratulations!", 600, 400);
    pop();
    //displays the text on the congratulations scene.
    }
    
}

function keyPressed(){//this function determines actions that will happen if the player presses a key
    if (!player.isJumping && !player.isFalling && player.isGrounded) {//checks if the player is jumping, and it isnt falling, and it is grounded
        if (key === " ") {// if the space bar is pressed, the below happens.
            player.isJumping = true;//jumping is set to true
            player.jumpTarget = player.yPos - player.jumpHeight;//assigns a new target tile for the jump mechanic, using the players current position and subtracting the jump height
            console.log(player.jumpTarget);//logs the jump target in the console
            jumpsound.play();//plays the jumping sound
        }

    }
    if (!player2.isJumping && !player2.isFalling && player2.isGrounded) {//checks if the second player is jumping, and it isnt falling, and it is grounded
        if (key === " ") {// if the space bar is pressed, the below happens.
            player2.isJumping = true;//jumping is set to true
            player2.jumpTarget = player2.yPos - player2.jumpHeight;//assigns a new target tile for the jump mechanic, using the players current position and subtracting the jump height
            console.log(player2.jumpTarget);//logs the jump target in the console
            jumpsound.play();//plays the jumping sound
        }
    }

    if (!player3.isJumping && !player3.isFalling && player3.isGrounded) {//checks if the third player is jumping, and it isnt falling, and it is grounded
        if (key === " ") {// if the space bar is pressed, the below happens.
            player3.isJumping = true;//jumping is set to true
            player3.jumpTarget = player3.yPos - player3.jumpHeight;//assigns a new target tile for the jump mechanic, using the players current position and subtracting the jump height
            console.log(player3.jumpTarget);//logs the jump target in the console
            jumpsound.play();//plays the jumping sound
        }
    }
}

class Player{//creating the player class
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
        //speeds that the player moves at in the x and y axis
        this.tileRules = tileRules;
        //value to determine if a tile can be passed through or not
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
        //values of each 'side' of the player sprite image
        this.topLeft = {};
        this.topRight = {};
        this.bottomLeft = {};
        this.bottomRight = {};
        //values to hold the x and y coordinates of each corner of the player sprite image
        this.collisionXPadding = 20;
        this.collisionYPadding = 20;
        //padding around the character so that it doesn't get stuck on the corner of tiles
    }

    checkCollisionBox(box) { //function to check if the player is colliding with 'box'/collectible
      let distance = dist(this.xPos, this.yPos, box.x, box.y);//creates a distance variable with the value of the distance between the x and y coordinates of the player and the box
      if (distance < this.size / 2 + box.size / 2) {// checks if the box is less than the value of half of the players width plus half of the boxs width
        return true; //if so it returns true
      }
      return false;//if not it returns false
    }

    update(){//function to update the way in which the player is being displayed
        this.trackCorners();//function that tracks corners of the player
        this.setXdirection();//function that sets the direction the player is moving along the x axis
        this.checkJump();//function that checks if the player is jumping, and what to do if so
        this.collisions();//functiion that checks if the player is colliding with tiles
        this.move();//function that dictates what the controls mean regarding the players movement
        this.display();//function that displays the player sprite
        //this class updates the status of the player's values (created in the construct) based on all of the called functions
        //within the player class.
    }

   trackCorners(){
        this.playerLeft = this.xPos + this.collisionXPadding;//calculates the x coordinate of the left side of the player using the sprites x coordinate and the padding assigned previously
        this.playerRight = this.xPos + this.tileSize - 2 - this.collisionXPadding;//calculates the x coordinate of the right side of the player using the sprites x coordinate and the padding assigned previously
        this.playerTop = this.yPos + this.collisionYPadding;//calculates the y coordinate of the top side of the player  using the sprites y coordinate and the padding assigned previously
        this.playerBottom = this.yPos + this.tileSize - 1;//calculates the y coordinate of the bottom side of the player  using the sprites y coordinate and the padding assigned previously
        // this defines each side r of the player sprite using the x and y coordinates and adding padding inside the margin of the player sprite
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
        if(this.yPos === this.jumpTarget){//checks if the vertical location of the player has reached the target tile of the jump
            this.isFalling = true;//if so set falling to true
            this.isJumping = false;//if so set jumping to false
        }
    }

    setXdirection(){//creating function to track the horizontal direction the player is moving in
        if (keyIsDown("37")){//checks if the left arrow key is down
            this.dirX= -2;//if so moves the moves the x coordinate by subtracting 2 (moving left)
            this.sprite = inverseSprite;//changes the sprite to the one where the character faces left
        }
        if (keyIsDown("39")){//checks if the right arrow key is down
            this.dirX = 2;//if so moves the moves the x coordinate by adding 2 (moving right)
            this.sprite = playerSprite;//changes the sprite to the one where the character faces right
        }
        if(!keyIsDown("37")&& !keyIsDown("39")){//checks if both the left and right arrow keys are down at the same time
            this.dirX = 0;//if so sets the direction to stay still by setting the value as 0
        }
    }

    setYDirection() {//creating function to check the vertical direction the player is moving in
        if (this.isGrounded) {//checks if the player is grounded
            this.dirY = 0;//if so sets the direction to stay still by setting the value as 0
        }
        if (this.isJumping) {//checks if the player is jumping
            this.dirY = -1.5;//if so move the player up by setting the directional value to a negative
        }
        if (this.isFalling) {//checks if the player is falling
            this.dirY = 1.5;//if so move the player down by setting the directional value to a positive
        }
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
        this.overlapCollision(this.topRight.x, this.topRight.y + velY)){//checks if the top left x and y coordinates (plus the y velocity) or if the top right x and y coordinates (plus the y velocity) are overlapping with the bottom of tile
            this.isJumping = false;
            this.isFalling = true;
            //if so the player no longer jumps, but begins falling
            this.setYDirection();
            velY = this. dirY * this.ySpeed;
            //resets the y velocity after these changes
        }

        if (this.overlapGround(this.bottomRight.x, this.bottomRight.y) ||
        this.overlapGround((this.bottomRight.x, this.bottomRight.y))){//checks if the bottom right x and y coordinates (plus the y velocity) are overlapping with the top of a tile
            this.yPos -= this.ySpeed;//if so the y coordinate will move downwards (this acts as a form of gravity as the tilerules will prevent it from slipping through grounded tiles )
        }
        if (this.overlapGround(this.bottomLeft.x, this.bottomLeft.y + 1) ||
            this.overlapGround(this.bottomRight.x, this.bottomRight.y + 1)) {//checks if the bottom left x and y coordinates (plus the y velocity) are overlapping with the top of a tile
                this.isGrounded = true;//if so set grounded to true
                this.isFalling = false;//if so set falling to false
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
        let nextX = this.xPos + this.xSpeed * this.dirX; //the next x coordinate is the current x coordinate plus the speed multiplied by the directional value
        let nextY = this.yPos + this.ySpeed * this.dirY; //the next y coordinate is the current y coordinate plus the speed multiplied by the directional value
        if (nextX >= 0 && nextX + this.size <= width) {//checks if the next x coordinate will be within the canvas boundaries
            this.xPos = nextX; // Update X position if within canvas boundaries
        }
        if (nextY >= 0 && nextY + this.size <= height) {//checks if the next y coordinate will be within the canvas boundaries
            this.yPos = nextY; // Update Y position if within canvas boundaries
            
        }
    }

    collisionCheck(velX,velY){//creating a function to check for collisions between two points
    if (this.overlapCollision(this.topLeft.x + velX, this.topLeft.y + velY) ||
    this.overlapCollision(this.bottomLeft.x + velX, this.bottomLeft.y + velY) ||
    this.overlapCollision(this.topRight.x + velX, this.topRight.y + velY) ||
    this.overlapCollision(this.bottomRight.x + velX, this.bottomRight.y + velY)) {
        //checks if there is an overlap with the top left, bottom left, top right or bottom right coordinates
        return true;//if any of these conditions are true, it returns true
    } 
    else {//if none of these conditions are true
        return false;//it returns false
    }  
    }

isWithinBounds(tileX, tileY) {//creating a function to check if the tile is in bounds of movement
    return tileY >= 0 && tileY < this.tileRules.length && tileX >= 0 && tileX < this.tileRules[0].length;
    //returns if the tile is within the canvas and if the tile is within the tilerules array
}

overlapCollision(pointX, pointY) {//creating a function to determine if there is a collision between two points for tile collisions 
    let tileX = Math.floor(pointX / this.tileSize);//converting x coordinate to a tile
    let tileY = Math.floor(pointY / this.tileSize);//converting y coordinate to a tile
    //keeps the number produced by calculations as an integer so it can be processed as a position in an array
    if (!this.isWithinBounds(tileX, tileY)) {
        return false;
    //returns whether the condition is true or false
    }
    return this.tileRules[tileY][tileX] !== 0;
    //returns that the position in the tileRules array is not 0
}

overlapGround(pointX, pointY) {//creating a function to determine if there is a collision between two points for ground collisions
    let tileX = Math.floor(pointX / this.tileSize);//converting x coordinate to a tile
    let tileY = Math.floor(pointY / this.tileSize);//converting y coordinate to a tile
    //keeps the number produced by calculations as an integer so it can be processed as a position in an array
    if (!this.isWithinBounds(tileX, tileY)) {
        return false; //returns whether the condition is true or false
    }
    return this.tileRules[tileY][tileX] === 1;
    //returns that the position in the tileRules array is 1
}


display() {//creating a function to display the character sprite
    imageMode(CORNER);//draws the character from the top left corner
    image(this.sprite, this.xPos, this.yPos, this.size, this.size);
    //displays the player sprite image and updates it with every movement
    }
}

class Tile {//creating a class that will dictate how tiles are presented and interacted with
    constructor(texture, across, down, tileSize, tileID) {  
        this.texture = texture; //texture assigned by graphics map
        this.across = across; //its column in the tilemap
        this.down = down; //its row in the tilemap
        this.xPos = across * tileSize; // converts pixel value to an x tile position
        this.yPos = down * tileSize; // converts the pixel value to a y tile position
        this.tileSize = tileSize; //assigned tilesize
        this.tileID = tileID; //assigned tile id
    }

    display() {//creating function to display the tiles
        noStroke(); //makes sure there is no outline
        image(this.texture, this.xPos, this.yPos, this.tileSize, this.tileSize); // diaplays the texture image of of the tile of its posiiton and size
    }
    debug() {//creates a function to debug any issues with the tiles
        stroke(245);
        noFill();
        rect(this.xPos, this.yPos, this.tileSize, this.tileSize);
        noStroke();
        fill(255);
        textAlign(LEFT, TOP);
        text(this.tileID, this.xPos, this.yPos);
        //this will display the tiles with an outline and display each tile id in the corner of its tile
    } 
}

class Box {//creates a class to dictate how 'boxes'/collectibles are displayed and interacted with
    constructor(x, y, image) {
      this.x = x;//the assigned x coordinate
      this.y = y;//the assigned y coordinate
      this.size = 80;//the size of the image
      this.image = image;//the image that will be displayed
      this.isTouched = false; //initializes the touched state of the box to false
    }
    
    display() {
      if (!this.isTouched) { // check the box not have been touched 
        push();
        imageMode(CORNER); 
        image(this.image, this.x, this.y, this.size, this.size); // displays the image in its assigned position
        pop();
        }
       }
      }

function mousePressed(){
    if(level === 0){//checks if the level is 0 (title screen)
        level = 1;//if so the result of pressing the mouse is to go to level 1
    }
    if(level === 4){//checks if the level is 4 (fail screen)
        level =1;//if so the result of pressing the mouse is to restart by going to level 1 
    }
}
