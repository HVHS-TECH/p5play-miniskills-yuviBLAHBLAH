/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by ???
/*******************************************************/

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
	blecktangle = new Sprite(700, 200, 100, 100, 'd');
	blecktangle.color = 'blue';
	blecktangle.rotationSpeed = 65;
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

	blecktangle.moveTowards(mouseX, mouseY, 1);

	if (mouse.presses()) {

		blecktangle.moveTo(0, windowHeight / 2, 1000000);

	}
	background("white");
}

/*******************************************************/
//  END OF APP
/*******************************************************/