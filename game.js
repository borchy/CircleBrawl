var FRAME_RATE = 60;

var playerCanvas;
var playerContext;
var player;

function init() {
	playerCanvas = document.getElementById('playerCanvas');
	playerContext = playerCanvas.getContext('2d');
	player = new Player(playerContext);
	setInterval(gameLoop, 1000 / FRAME_RATE);
}

function gameLoop() {
	playerContext.clearRect(0, 0, playerCanvas.width, playerCanvas.height);
	player.update();
	player.draw();
}