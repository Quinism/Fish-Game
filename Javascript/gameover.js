function start () {

sjs.open("target", 800, 500);

var background = new sjs.Image("Images/giphy.gif");
background.center().setSize(sjs.getWidth(),sjs.getHeight());


var gameover_txt = new sjs.Text("gameoverText", "Game Over!");
gameover_txt.centerH().offset(0,85);

var score_txt = new sjs.Text("scoreText", "Score: ");
score_txt.setText("Fish Eaten: "+localStorage.getItem("score"));
score_txt.center().offset(0,-25);

var returnBtn = new sjs.Button("returnButton", "Back to menu", function() {
  window.location = "menu.html";
});
returnBtn.center().offset(-115,75);

var tryAgainBtn = new sjs.Button("tryAgainButton", "Try again", function() {
  window.location = "game.html";
});
tryAgainBtn.center().offset(115,75);






}
