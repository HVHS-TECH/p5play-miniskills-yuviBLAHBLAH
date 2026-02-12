/*******************************************************/
// P5.play: t50_extension
// Extension tasks
// Written by ??
/*******************************************************/

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
width = random(300,600);
height = random(300,600);

// and the sprites keep changing too!
spriteX= random(50,150);
spriteY=  random(50,150);  ;

cnv = new Canvas(width, height);


red = new Sprite(spriteX/2, spriteY/2, spriteX, spriteY);
red.color = 'red';

green = new Sprite( width-50, spriteY/2 , spriteX, spriteY);
green.color = 'green';

blue = new Sprite( width-50, height-50, spriteX, spriteY);
blue.color = 'blue';

yellow = new Sprite( spriteX/2, height-50,  spriteX, spriteY);
yellow.color = 'yellow';

purple = new Sprite( width/2, height/2 ,  spriteX, spriteY);
purple.color = 'purple';
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("cyan");
}

/*******************************************************/
//  END OF APP
/*******************************************************/