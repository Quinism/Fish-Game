function start() {
 var instructions = "Use the Arrow Keys to Control the Player. Only eat enemies smaller than you!";
 var information = "Created by Zach Woods. Click for source code.";

 sjs.open("target", 800, 500);

 // Background Image
 var background = new sjs.Image("Images/giphy.gif");
 background.setSize(sjs.getWidth(), sjs.getHeight());

 // Text
 var menu_txt = new sjs.Text("menuText", "MENU");
 menu_txt.centerH().offset(0, 25);

 var game_txt = new sjs.Text("gameText", instructions);
 game_txt.centerH().offset(0, 125);

 var info_txt = new sjs.Text("infoText", information);
 info_txt.centerH().offset(0, 350);

 // Start Button
 var startBtn = new sjs.Button("startBtn", "START", function() {
  window.location = "game.html"
 });
 startBtn.center().offset(0, 0);
}
