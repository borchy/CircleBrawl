Player = function(ctx) {
	this.ctx = ctx;
	this.radius = 50;
	this.x = document.getElementById('playerCanvas').width / 2;
	this.y = document.getElementById('playerCanvas').height - this.radius - 15;
	this.fists = [
		{
			'radius': 15,
			'x': this.x - this.radius,
			'y': this.y - this.radius
		},
		{
			'radius': 15,
			'x': this.x + this.radius,
			'y': this.y - this.radius
		},
	];
	this.attackProgress = 0;
}

Player.prototype.attack = function() {
	if (this.attackProgress === 0) {
		this.attackProgress = 10;
	}
}

Player.prototype.update = function() {
	if (this.attackProgress !== 0) {
		moveFists();
	}
}

Player.prototype.draw = function() {
	this.ctx.beginPath();
	this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
	this.ctx.fillStyle = '#00FFFF';
	this.ctx.fill();
	this.ctx.lineWidth = 5;
	this.ctx.strokeStyle = '#FF0000';
	this.ctx.stroke();
	this.ctx.closePath();

	for (var i = 0; i < this.fists.length; i++) {
		this.ctx.beginPath();
		this.ctx.arc(this.fists[i].x, this.fists[i].y, this.fists[i].radius, 0, 2 * Math.PI, false);
		this.ctx.fillStyle = '#00FFFF';
		this.ctx.fill();
		this.ctx.lineWidth = 3;
		this.ctx.strokeStyle = '#FF0000';
		this.ctx.stroke();
		this.ctx.closePath();
	}
}

function moveFists() {
	console.log("?");
	this.attackProgress--;
}