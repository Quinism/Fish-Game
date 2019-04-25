function start()
{
	sjs.open("target", 800, 500);

	// Background Object and Properties
	var background = new sjs.Image("Images/giphy.gif");
	background.setSize(sjs.getWidth(), sjs.getHeight());

	// Background Music
	var playMusic = new Audio("Music/only.mp3");
	var toggle = true;
	var musicOn = false;

	sjs.keyDown(SPACE_KEY, function() {
		if(toggle == true){
if(musicOn == false){
playMusic.play();
musicOn = true;
} else {
playMusic.pause();
musicOn = false;
}
toggle = false;
setTimeout(function(){
toggle=true;
},100);
}
	});

// I would put the extra credit text telling users they can disable music here, however I have already explained how to do this in the instructions page.


	// Player Object and Properties
	var player = new sjs.Image("Images/BLACK_TO_LEFT.gif");
	player.type = "player";
	player.setSize(100, 50)
	player.scaleSize(0.6);
	player.friction = .25;
	player.accel = .25;
	player.center();

	// Moving Variables
	var left = false;
	var right = false;

	// Reset Variables when a key is released
	document.addEventListener('keyup', function ()
	{
		left = false;
		right = false;
	});

	// Moving Left
	sjs.keyDown(LEFT_KEY, function ()
	{
		player.pushLeft();
		if (!left)
		{
			left = true;
			player.setImage("Images/BLACK_TO_LEFT.gif");
		}
	});

	// Moving Right
	sjs.keyDown(RIGHT_KEY, function ()
	{
		player.pushRight();
		if (!right)
		{
			right = true;
			player.setImage("Images/BLACK_TO_RIGHT.gif");
		}
	});

	// Moving Up
	sjs.keyDown(UP_KEY, function ()
	{
		player.pushUp();
	});

	// Moving Down
	sjs.keyDown(DOWN_KEY, function ()
	{
		player.pushDown();
	});

	// Powerups
	setInterval(function ()
	{
		var x = Math.floor(Math.random() * 775);
		var y = Math.floor(Math.random() * 475);

		var powerUp = new sjs.Image("Images/food.png");

		powerUp.type = "powerUp";
		powerUp.setGravity();
		powerUp.setSize(25, 25);
		powerUp.noBounds = true;
		powerUp.moveTo(x, y);
		powerUp.friction = 0.25;
		powerUp.accel = 0.5;

	}, 5000);

	sjs.onHit("powerUp", "bottom_screen", function (x, y)
	{
		x.destroy;
	});

	sjs.onHit("player", "powerUp", function (x, y)
	{
		x.grow(100, 50);
		setTimeout(function ()
		{
			x.grow(-100, -50);
		}, 4000);
		y.destroy();
	});


	// Enemies
	setInterval(function ()
	{
		var speed = Math.round(1 + Math.random() * 10);

		// Random image for left moving enemies
		var leftFish = ['Images/BLUE_LEFT.gif', 'Images/PURPLE_LEFT.gif', 'Images/RED_LEFT.gif', 'Images/YELLOW_LEFT.gif', 'Images/GREEN_LEFT.gif'];
		var leftImage = leftFish[Math.floor(Math.random() * leftFish.length)];

		// Random image for right facing enemies
		var rightFish = ['Images/BLUE_RIGHT.gif', 'Images/PURPLE_RIGHT.gif', 'Images/RED_RIGHT.gif', 'Images/YELLOW_RIGHT.gif', 'Images/GREEN_RIGHT.gif'];
		var rightImage = rightFish[Math.floor(Math.random() * rightFish.length)];

		if (Math.random() > 0.5)
		{

			var enemy = new sjs.Image(leftImage);
			enemy.type = "enemy";
			enemy.friction = 0;
			enemy.setSize(100, 50);
			enemy.noBounds = true;
			enemy.scaleSize(.5 + Math.random() * 1.2);
			enemy.moveTo(-enemy.getWidth(), Math.random() * (enemy.getClamp().y))
			enemy.pushRight(speed)
		}
		else
		{
			var enemy = new sjs.Image(rightImage);
			enemy.type = "enemy";
			enemy.friction = 0;
			enemy.setSize(100, 50);
			enemy.noBounds = true;
			enemy.pushLeft(speed);
			enemy.scaleSize(.5 + Math.random() * 1.2);
			enemy.moveTo(sjs.getWidth(), Math.random() * (enemy.getClamp().y));

		}
	}, 1000);

	var timerMs = 0;
	setInterval(function () {

	timerMs = timerMs + 1;

	var timer = timerMs / 100 ;

	var formatting = "You became the biggest by eating 20 fish<br> in "+timer + " seconds";
	localStorage.setItem("timer", formatting);

}, 10);


	sjs.left_screen.offset(-500);
	sjs.right_screen.offset(500);


	// Keeping Score
	var score = 0;
	localStorage.setItem("score", score);
	var score_txt = new sjs.Text("scoreText", "Fish Eaten: 0");
	score_txt.centerH().offset(0, 10);


	// Hit Detection
	sjs.onHit("enemy", ["left_screen", "right_screen"], function (x, y)
	{
		x.destroy;
	});

	sjs.onHit("player", "enemy", function (x, y)
	{
		if (x.getWidth() > y.getWidth() && x.getHeight() > y.getHeight())
		{
			score++;
			score_txt.setText("Fish Eaten: " + score);
			localStorage.setItem("score", score);
			x.grow(10, 5);
			if (score >= 20)
			{
			window.location = "win.html";
			}
		}
		else
		{
			x.destroy();
			window.location = "gameover.html"
		}
		y.destroy();
	});

} // End Start

function reset() {
	score = 0;
}
