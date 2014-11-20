Controller = function(movable) {
	this.LEFT = 65;
	this.RIGHT = 68;
	this.UP = 87;
	this.DOWN = 83;
	
	this.isKeyPressed = {};
	this.isKeyPressed[this.LEFT] = 0;
	this.isKeyPressed[this.RIGHT] = 0;
	this.isKeyPressed[this.UP] = 0;
	this.isKeyPressed[this.DOWN] = 0;
	
	this.horizontalKeys = [];
	this.verticalKeys = [];
	
	this.movable = movable;
	this.horizontal = 0;
	this.vertical = 0;
	
	addEventListener("keydown", this.keyDown.bind(this), false);
	addEventListener("keyup", this.keyUp.bind(this), false);
}

Controller.prototype.update = function() {
	if (this.horizontalKeys.length > 0) {
		this.movable.x += (this.horizontalKeys.last() == this.LEFT ? -5 : 5);
		console.log(this.movable.x);
	}
	if (this.verticalKeys.length > 0) {
		this.movable.y += (this.verticalKeys.last() == this.UP ? -5 : 5);
	}
}

Controller.prototype.keyDown = function(key) {
	if (this.isKeyPressed[key.which] == 0) {
		switch (key.which) {
		case this.LEFT:
		case this.RIGHT:
			this.horizontalKeys.push(key.which);
		break;
		case this.UP:
		case this.DOWN:
			this.verticalKeys.push(key.which);
		break;
		}
		this.isKeyPressed[key.which] = 1;
	}
}

Controller.prototype.keyUp = function(key) {
	this.isKeyPressed[key.which] = 0;
	switch (key.which) {
	case this.LEFT:
	case this.RIGHT:
		this.horizontalKeys.remove(key.which);
	break;
	case this.UP:
	case this.DOWN:
		this.verticalKeys.remove(key.which);
	break;
	}
}