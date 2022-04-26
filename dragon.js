"use strict";

const prompt = require("prompt-sync")({ sigint: true });

class Player {
	constructor(name) {
		this.name = name;
		this.inventory = [];
	}
}

function getName() {
	let name = prompt("Enter your name: ");

	let player1 = new Player(name);
	console.log(`Safe Journies ${name}`);
	console.log(player1);
}

getName();
