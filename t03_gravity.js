/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by ???
/*******************************************************/

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(1000, 1000);
	world.gravity.y = 5;
	rectangle = new Sprite(400, 200, 67, 67, 'd');
	rectangle.color = 'red';
	rectangle.rotationSpeed = -5;
	rectangle.bouncieness = 2;

	blecktangle = new Sprite(700, 200, 100, 100, 'd');
	blecktangle.color = 'blue';
	blecktangle.rotationSpeed = 5;
	blecktangle.vel.x = -5;
	blecktangle.bouncieness = 2;
	wallLH = new Sprite(0, height / 2, 8, height, 'k');
	wallLH.color = 'black';

	wallRH = new Sprite(width, height / 2, 8, height, 'k');

	wallTop = new Sprite(width / 2, 0, width, 8, 'k');

	wallBot = new Sprite(width / 2, height, width, 8, 'k');

}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("white");
}

/*******************************************************/
//  END OF APP
/*******************************************************/