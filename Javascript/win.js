function start ()
{
sjs.open("target", 800, 500);

var background = new sjs.Image("Images/giphy.gif");
background.setSize(sjs.getWidth(),sjs.getHeight());

var gameover_txt = new sjs.Text("gameoverText", "You Won!");
gameover_txt.centerH().offset(0,35);

var score_txt = new sjs.Text("scoreText", "");
score_txt.setText(localStorage.getItem("timer"));
score_txt.center().offset(0,-50);

var returnBtn = new sjs.Button("returnButton", "Back to menu", function() {
  window.location = "menu.html";
});
returnBtn.center().offset(-115,75);

var tryAgainBtn = new sjs.Button("tryAgainButton", "Play again", function() {
  window.location = "game.html";
});
tryAgainBtn.center().offset(115,75);





}
