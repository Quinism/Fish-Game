function start() {
  sjs.open("target", 800, 500);


  var background = new sjs.Image("Images/giphy.gif");
  background.setSize(sjs.getWidth(),sjs.getHeight());

  var instruct_txt = new sjs.Text("instructText", "You are a fish that wants nothing more than to be the biggest fish around. However, you have no patience... You vow to become the biggest fish around as fast as you possibly can, Even if it means a risk of being eaten. <br> <br> Use the arrow keys on your keyboard to control your fish. Eat fish smaller than you to grow, and avoid being eaten. <br> You win by growing enough that no other fish could possibly eat you (Eating 20 fish should get you there), and your score is the time it took to do so.");

  instruct_txt.center().offset(0,-35);

  var title_txt = new sjs.Text("titleText", "Instructions");

  title_txt.centerH().top().offset(0,5);

  var returnBtn = new sjs.Button("returnButton", "Back to menu", function() {
    window.location = "menu.html";
  });
  returnBtn.center().bottom().offset(0,-25);

  var controls = new sjs.Image("Images/controls.png");
  var controls2 = new sjs.Image("Images/controls.png");

  var controls_space = new sjs.Image("Images/controls2.png");
  controls_space.setSize(150,40);
  controls_space.centerV().right().offset(-25,40);

  var powerup_txt = new sjs.Text("powerupText", "Powerups look like this: <br> <br> <br> Eat them and you'll get a temporary boost in size!");
powerup_txt.centerV().left().top().offset(50,80);

var powerup = new sjs.Image("Images/food.png");
powerup.setSize(25, 25);

powerup.offset(85,150);
  var music_txt = new sjs.Text("musicText", "You can mute and unmute the game's sound by using the spacebar!");
  music_txt.centerV().right().top().offset(-50,80);

  controls.setSize(200,200);
  controls.centerV().bottom();

  controls2.setSize(200,200);
  controls2.centerV().right().bottom();


}
