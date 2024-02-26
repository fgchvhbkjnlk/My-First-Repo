let lavatar;
let ravatar;
let avatar;
let flame;
let flame2;
let bg;
let font;
let papericon;
let pencil;
//creating variables for images
let xpos =[100,200,300,500,600,700];
let speeds = [1,1.5,1.5,3,3,5];
//creating arrays to select random elements from
let ypaper=[];
let xpaper =[];
let paperSpeed =[];
let rects=[];
let colours=[];
//creating empty arrays that will be added to in draw function
let interval = 2;
let papers=0;
let direction = 1;
let timer = 30;
let points =0;
let avatarx=400;
let startScreen =0;
let pencily=235;
let pencilSpeed= 1;
let changer = 1;
let music = null; 
//creating variables to be used in following functions
function preload(){
    flame = loadImage('flame.png');
    flame2 = loadImage('flame2.png');
    lavatar = loadImage('avatar.png');
    ravatar = loadImage('avatar1.png');
    bg = loadImage('background.jpg');
    papericon = loadImage('paper.png');
    pencil = loadImage('pencil.png');
    //assigning images to the premade variables
    font =loadFont('pixelfont.TTF');
    //preloading a font to use in the game
    music = new Audio('music.mp3');
    //preloading background music
}
//preloading images so that they are ready to be called when setup function begins
function setup() {
    let cnv = createCanvas(800, 600);
    cnv.center('horizontal');
    //ensures that the canvas will be at the horizontal center of a window of any size
    background(bg); 
    //sets the image called 'bg' as the background
    createPaper();
    //starts running the createPaper function
}
function createPaper(){
    xpaper[papers] = random(xpos);
    //assigns random x coordinate to the current element of the xpaper array
    ypaper[papers] = 600;
    //assigns y coordinate of 600 to every element of the ypaper array
    paperSpeed[papers]=random(speeds);
    //assigns random speed to current element of the paperSpeed array
    papers++;
    //moves on to the next value of 'papers' variable
    setTimeout(createPaper,5000);
    //executes the function every 3 seconds
}
function draw(){
music.play();
//background music begins playing
textFont(font);
//calling the preloaded font to be used in following text
if(startScreen ==0){
    push();
    background(204,153,255);
    textAlign(CENTER,CENTER);
    textSize(40);
    fill(153,51,255);
    text("Cursed Coursework",400,100);
    textSize(10);
    text("By Yasmin Awoyemi",400,150);
    imageMode(CENTER);
    image(ravatar,200,300,300,300);
    image(papericon,575,300,300,300);
    image(pencil,450,pencily,200,200);
    pencily=pencily+pencilSpeed;
    if(pencily==375){
        pencilSpeed = -1;
    }
    if(pencily==235){
        pencilSpeed = 1;
    }
    textSize(20);
    text("Controls: Use right and left arrows to move",400,500);
    textSize(10);
    text("Click anywhere to start",400,550);
    pop();
    //creates start screen to display before the game begins
    //start screen displays title and controls
}
if(startScreen ==1){
    //when the value of startScreen changes, the game begins
    background(bg);
    //recalling background image to remove trails of any moving objects
    push();
    stroke(192,192,192);
    fill(255);
    beginShape();
        vertex(100,150);
        vertex(300,150);
        vertex(300,100);
        vertex(270,100);
        vertex(270,80);
        vertex(220,80);
        vertex(220,60);
        vertex(130,60);
        vertex(130,80);
        vertex(100,80);
    endShape(CLOSE);
    //creates a pixel style cloud and fills it with white
    beginShape();
        vertex(500,150);
        vertex(700,150);
        vertex(700,100);
        vertex(670,100);
        vertex(670,80);
        vertex(620,80);
        vertex(620,60);
        vertex(530,60);
        vertex(530,80);
        vertex(500,80);
    endShape(CLOSE);
    pop();
    //creates a pixel style cloud and fills it with white
    fill(0);
    textSize(16);
    textAlign(CENTER,CENTER);
    textStyle(BOLD);
    text("Points ="+points, 75, 50);
    text( timer, 750, 50);
    //displays the amount of points in the left hand corner and the timer in the right hand corner
    if (frameCount % 60 == 0 && timer>0){
        timer--;
    }
    //decreases timer value by 1 every time the framecount is divisible by 60 (meaning a second has passed)
    rectMode(CENTER);
    stroke(0);
    for(let i=0;i<25;i++){
        if(
            (xpaper[i]-37.5)<(avatarx+50)
            &&
            (xpaper[i]+37.5)>(avatarx-50)
            &&
            (ypaper[i]-50)<(330+50)
            &&
            (ypaper[i]+50)>(330-50)
        //method used in Rectangle Collision by rjgilmour used here.
        //I dont understand it completely, but I know that it identifies two rectangular objects as touching when their halfwidths and halfheights interact in a certain way
        ){
            colours[i]=0;
            points = points +1;
            xpaper[i] = random(xpos);
            ypaper[i] = 600;
            //help from tutor used here. If condition is true, sets the opacity to 0, adds 1 point and repositions the object to the bottom of the screen
        }
        else{
            colours[i]=255;
            //if the condition is not true, the object continues to move with full opacity
        }    
        fill(255,255,255,colours[i]);
        rects[i]=  rect(xpaper[i],ypaper[i],75,100);
        push();
        noStroke();
        textSize(8);
        textStyle(NORMAL);
        fill(0);
        text("Coursework",xpaper[i],(ypaper[i]+5));
        pop();
        ypaper[i] = ypaper[i]-paperSpeed[i];
        //for every i value a rectangle is created with a random x coordinate and speed from the xpaper and paperSpeed arrays
    }
    push();
        imageMode(CENTER);
        if (timer % 2 ==0){
            image(flame,400,500,800,200)
        }
        if(timer % 2 != 0){
            image(flame2,400,500,800,200)
        }
        //adds the effect of moving flames by switching the image every second
    pop();
    //displays png image at the bottom of the screen
    noStroke();
    push();
        imageMode(CENTER);
        if(direction == 1){
            image(lavatar,avatarx,330,100,100);
            //avatar image faces left
        }
        if(direction == -1){
            image(ravatar,avatarx,330,100,100);
            //avatar image faces right
        }
    pop();
    //when the value of direction changes, the avatar image changes to face the assigned direction
    if(keyIsDown(RIGHT_ARROW)){
        avatarx=avatarx+5;
        //moves the avatar image to the right when the key is held down
    }
    if(keyIsDown(LEFT_ARROW)){
        avatarx=avatarx-5;
        //moves the avatar image to the left when the key is held down
    }
    if(avatarx>800){
        avatarx = 0;
        //if the avatar reaches the right edge, it appears at the left edge
    }
    if(avatarx<0){
        avatarx =800;
        //if the avatar reaches the left edge, it appears at the right edge
    }
    if(timer==0){
        music.pause();
        //when the timer runs out, the music starts
        noLoop();
        //stops the draw function from executing
        textSize(20);
        textAlign(CENTER,CENTER);
        if (points==0){
            fill(0);
            text("Sorry, you failed", 400, 200);
        }
        else if(points>0 && points<=10){
            fill(204,102,0);
            text("Congratulations! You got a bronze score of "+points, 400, 200);
        }
        else if (points>10 && points<=30){
            fill(160,160,160);
            text("Congratulations! You got a silver score of "+points, 400, 200);
        }
        else if (points>30){
            fill(233,191,23);
            text("Congratulations! You got a gold score of "+points, 400, 200);}
        }
        //displays a different message depending on the players score
}
}
function keyPressed(){
if(keyCode === LEFT_ARROW){
    direction=1;
}
if(keyCode ===RIGHT_ARROW){
    direction =-1;
}
//changes the value of direction depending on which key is pressed
}
function mousePressed(){
startScreen=1;
//changes valuue of startScreen when mouse is pressed
}