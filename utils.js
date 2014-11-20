Array.prototype.first = function() {
	return this[0];
}

Array.prototype.last = function() {
	return this[this.length - 1];
}

Array.prototype.remove = function(value) {
	var idx = this.indexOf(value);
	if (idx != -1) {
		return this.splice(idx, 1);
	}
	return false;
}