import { Hanabi, randomInt } from './hanabi.js';

export const SCREEN_W = window.innerWidth;
export const SCREEN_H = window.innerHeight;
const hanabiCount = 500;

const canvas = document.querySelector("canvas");
canvas.width = SCREEN_W;
canvas.height = SCREEN_H;
canvas.style.backgroundColor = "black";
export const ctx = canvas.getContext("2d");

const hanabis = [];

function mainLoop() {
	ctx.clearRect(0, 0, SCREEN_W, SCREEN_H);

	hanabis.forEach(hanabi => {
		hanabi.update();
		hanabi.draw();
	});

	for (let i = hanabis.length - 1; i >= 0; i--) {
		if (hanabis[i].kill) hanabis.splice(i, 1);
	}

	ctx.fillStyle = "#ffffff"
	ctx.font = "30pt Verdana";
	ctx.fillText(`花火の数：${hanabis.length}`, 100, 100, 300);

	window.requestAnimationFrame(mainLoop);
}
mainLoop();

document.addEventListener("keydown", e => {
	if (e.key === " ") {
		const x = randomInt(0, SCREEN_W);
		const y = randomInt(0, SCREEN_H);

		for (let i = 0; i < hanabiCount; i++) {
			hanabis.push(new Hanabi(x, y));
		}
	}
});
