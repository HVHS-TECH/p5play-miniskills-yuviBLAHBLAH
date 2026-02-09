/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(1000, 1000);
	world.gravity.y = 10;
	blecktangle = new Sprite(700, 200, 100, 100, 'd');
	blecktangle.color = 'blue';
	blecktangle.rotationSpeed = 5;
	blecktangle.vel.x = -5;
	blecktangle.bounciness = 2;
	platform_1 = new Sprite(350, 500, 100, 10, 'k');
	platform_2 = new Sprite(600, 700, 100, 10, 'k');
	platform_67 = new Sprite(350, 900, 100, 10, 'k');}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("white");
}

/*******************************************************/
//  END OF APP
/*******************************************************/