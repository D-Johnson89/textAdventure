"use strict";

const prompt = require("prompt-sync")({ sigint: true });

let bossRoom = Math.floor(Math.random() * 100);
if (bossRoom >= 50) {
	bossRoom = "B";
} else {
	bossRoom = "A";
}

class Player {
	constructor(name) {
		this.name = name;
		this.inventory = [];
	}
}

function gameTime() {
	console.log("Welcome to Game-World!");

	getPlayers();
	//chooseRoom(bossRoom);
}

//   Get Player Name
function getPlayers() {
	let name = prompt("Enter your name: ");

	let player1 = new Player(name);
	console.log(`Safe Journies ${name}`);
	console.log(player1);
}

gameTime();
