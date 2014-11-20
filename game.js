var FRAME_RATE = 60;

var playerCanvas;
var playerContext;
var player;
var controller;

function init() {
	playerCanvas = document.getElementById('playerCanvas');
	playerContext = playerCanvas.getContext('2d');
	player = new Player(playerContext);
	controller = new Controller(player);
	setInterval(gameLoop, 1000 / FRAME_RATE);
}

function gameLoop() {
	playerContext.clearRect(0, 0, playerCanvas.width, playerCanvas.height);
	controller.update();
	player.update();
	player.draw();
}