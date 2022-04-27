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
	}
}

//   Enter Name
function getName() {
	console.log("Welcome to game-world!");
	let name = prompt("Enter your name: ");

	var player1 = new Player(name);

	gameTime(player1);
}

function gameTime(player1) {
	console.log(`Safe Journies ${player1.name}`);

	chooseRoom(bossRoom, player1);
}

//   Room Choice
function chooseRoom(bossRoom, player1) {
	let choice = prompt("Choose a door (A or B): ").toUpperCase();

	switch (choice) {
		case "A":
			if (choice == bossRoom) {
				choice = prompt(
					"There is a Giant Troll! (Fight or Leave): "
				).toUpperCase();

				if (choice == "FIGHT") {
					fightBoss(player1);
				} else {
					chooseRoom(bossRoom, player1);
				}
			} else {
				choice = prompt(
					"It is a dark room. (Search or Leave): "
				).toUpperCase();

				if (choice == "SEARCH") {
					searchRoom(player1);
				} else {
					chooseRoom(bossRoom, player1);
				}
			}
			break;
		case "B":
			if (choice == bossRoom) {
				choice = prompt(
					"There is a Giant Troll! (Fight or Leave): "
				).toUpperCase();

				if (choice == "FIGHT") {
					fightBoss(player1);
				} else {
					chooseRoom(bossRoom, player1);
				}
			} else {
				choice = prompt(
					"It is a dark room. (Search or Leave): "
				).toUpperCase();

				if (choice == "SEARCH") {
					searchRoom(player1);
				} else {
					chooseRoom(bossRoom, player1);
				}
			}
			break;
	}
	//return player1;
}

function searchRoom(player1) {
	let pickUp = prompt(
		"You Found a Sword! Take Sword? (Yes or No): "
	).toUpperCase();

	if (pickUp == "YES") {
		player1.inventory = ["Sword"];
		chooseRoom(bossRoom, player1);
	} else {
		chooseRoom(bossRoom, player1);
	}
}

function fightBoss(player1) {
	if (player1.inventory.includes("Sword")) {
		console.log("You Have Defeated The Giant Troll");
	} else {
		console.log("You Have Been Defeated");
	}

	let endGame = prompt(
		"Would You Like to Play Again? (Yes or No): "
	).toUpperCase();

	if (endGame == "YES") {
		delete player1;
		let bossRoom = Math.floor(Math.random() * 100);
		if (bossRoom >= 50) {
			bossRoom = "B";
		} else {
			bossRoom = "A";
		}

		getName();
	}
}

getName();
