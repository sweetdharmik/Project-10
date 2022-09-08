var box;
var box2;
var box3;
var box4;
var box5;
var box6;
function setup() {
createCanvas(400,400);
background(51)

//i tried to make a smiley face but it meeded a curve so I didn't. It's just the box-mouth face for now!
box = createSprite(150,100,10,60);
box2 = createSprite(250,100, 10,60);
box3 = createSprite(200, 200, 200, 10);
box4 = createSprite(100, 250, 10, 100);
box5 = createSprite(200, 300, 200, 10);
box6 = createSprite(300, 250, 10, 100);
}

function draw() 
{

box.shapeColor = " white";
box2.shapeColor = " white";
box3.shapeColor = " white";
box4.shapeColor = " white";
box5.shapeColor = " white";
box6.shapeColor = " white";
 
text("Press the different arrow keys to change the background color!", 25, 350);

if(keyIsDown(RIGHT_ARROW))
{
background("blue");
}
 
if(keyIsDown(LEFT_ARROW))
{
background("purple");
}

if(keyIsDown(UP_ARROW))
{
background("green");
}

if(keyIsDown(DOWN_ARROW))
{
background("red");
}

drawSprites();
}