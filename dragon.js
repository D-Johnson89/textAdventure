//"use strict";

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

//   Get Player Name
function getPlayers() {
	console.log("Welcome to Game-World!");
	let name = prompt("Enter your name: ");

	var player = new Player(name);

	gameTime(player);
}

function gameTime(player) {
	console.log(`Safe Journies ${name}`);

	chooseRoom(bossRoom, player);
	//chooseRoom(bossRoom);
}
