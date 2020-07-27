import { SCREEN_H, SCREEN_W, ctx } from './index.js';

export function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class Hanabi {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.size = 10;

		const angle = randomInt(1, 360) * Math.PI / 180;
		this.vx = Math.sin(angle) * randomInt(1, 50);
		this.vy = Math.cos(angle) * randomInt(1, 50);

		this.kill = false;
	}
	update() {
		this.x += this.vx / 10;
		this.y += this.vy / 10;

		if (this.x < 0 || SCREEN_W < this.x || this.y < 0 || SCREEN_H < this.y) this.kill = true;
	}
	draw() {
		ctx.fillStyle = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
		ctx.fillRect(this.x, this.y, this.size, this.size);
	}
}