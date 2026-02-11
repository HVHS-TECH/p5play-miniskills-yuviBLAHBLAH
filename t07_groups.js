/*******************************************************/
// P5.play: t07_groups
// Create aliens and add to a group on mouse click
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
	blecktangle.friction = 2;
	blecktangle.drag = 10;
	blecktangle.bounciness = 100;
	wallLH = new Sprite(0, height / 2, 8, height, 'k');
	wallLH.color = 'black';

	wallRH = new Sprite(width, height / 2, 8, height, 'k');

	wallTop = new Sprite(width / 2, 0, width, 8, 'k');

	wallBot = new Sprite(width / 2, height, width, 8, 'k');
	ball_dot5 = new Sprite(width / 2, height / 2, 25, 'd');
	ball_1 = new Sprite(width / 2, height / 2, 50, 'd');
	ball_1dot5 = new Sprite(width / 2, height / 2, 75, 'd');
	ball_2 = new Sprite(width / 2, height / 2, 100, 'd');
	ball_3 = new Sprite(width / 2, height / 2, 150, 'd');
	ball_4 = new Sprite(width / 2, height / 2, 200, 'd');
	ball_5 = new Sprite(width / 2, height / 2, 250, 'd');
	ball_6 = new Sprite(width / 2, height / 2, 300, 'd');

	alienGroup = new Group();

	for (i = 10; i < 10; i++) {

		alien = new Sprite(500, 300, 50, 50);

		alien.vel.x = 3;

		alien.vel.y = 4;

		alien.bounciness = 1;

		alien.friction = 0;

		alienGroup.add(alien);

	}
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
background("black")
}

/*******************************************************/
//  END OF APP
/*******************************************************/