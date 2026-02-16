/*******************************************************/
// P5.play: t08_colliders
// Work with colliders
// Written by ???
/*******************************************************/

/*******************************************************/
// setup()
/*******************************************************/
function deleteBall() {
	console.log("colliding: ");

}
function setup() {

		//create a new group for the aliens and define the properties of the aliens

	alienGroup = new Group();
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;
	blecktangle = new Sprite(700, 200, 100, 100, 'd');
	blecktangle.color = 'blue';
	blecktangle.rotationSpeed = 5;
	blecktangle.vel.x = -5;
	blecktangle.friction = 2;
	blecktangle.drag = 1;
	blecktangle.bounciness = 10;
	wallLH = new Sprite(0, height / 2, 8, height, 'k');
	wallLH.color = 'black';

	wallRH = new Sprite(width, height / 2, 8, height, 'k');

	wallTop = new Sprite(width / 2, 0, width, 8, 'k');

	wallBot = new Sprite(width / 2, height, width, 8, 'k');

	//defines the properties of new aliens and creates them and adds them to the group

	for (i = 10; i < 20; i++) {

		let alien = new Sprite(windowWidth/2, windowHeight/4, 50, 50);

		alien.vel.x = 3;

		alien.vel.y = 4;

		alien.bounciness = 1;

		alien.friction = 0;

		alienGroup.add(alien);

		alienGroup.collides(blecktangle, deleteBall);


	}
}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("red");

	function deleteBall(_blecktangle,_ssss ) {

// Delete the alien which was hit

_ssss.remove();

}
}

/*******************************************************/
//  END OF APP
/*******************************************************/