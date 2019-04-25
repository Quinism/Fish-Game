function start() {
 var instructions = "How to play";
 var info1 = "Created by Zach Woods";
 var info2 = "Click here for source code";

 sjs.open("target", 800, 500);

 // Background Image
 var background = new sjs.Image("Images/giphy.gif");
 background.setSize(sjs.getWidth(), sjs.getHeight());

 // Text
 var menu_txt = new sjs.Text("menuText", "MENU");
 menu_txt.centerH().offset(0, 50);

 var game_txt = new sjs.Button("gameText", instructions, function() {
window.location = "instructions.html";
 });
 game_txt.center().offset(0,50);

 var info_txt = new sjs.Text("infoText", info1);
 info_txt.centerH().bottom().offset(0,-55);

 var infoBtn = new sjs.Button("infoButton", info2, function () {
 });
 infoBtn.centerH().bottom().offset(0,-10);

 // Start Button
 var startBtn = new sjs.Button("startBtn", "START", function() {
  window.location = "game.html"
 });
 startBtn.center().offset(0, -40);


}
