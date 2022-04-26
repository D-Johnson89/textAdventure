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
	console.log("Welcome to game-world!");

	//randomizeBoss();

	getName();
	chooseRoom(bossRoom);
}

//   Enter Name
function getName() {
	let name = prompt("Enter your name: ");

	let player1 = new Player(name);
	console.log(`Safe Journies ${name}`);
	return player1;
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
					searchRoom(bossRoom, player1);
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
					searchRoom(bossRoom, player1);
				} else {
					chooseRoom(bossRoom, player1);
				}
			}
			break;
	}
}

function searchRoom(bossRoom, player1) {
	let pickUp = prompt(
		"You Found a Sword! Take Sword? (Yes or No): "
	).toUpperCase();

	if (pickUp == "YES") {
		player1.inventory.push("Sword");
		chooseRoom(bossRoom);
	} else {
		chooseRoom(bossRoom);
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
		gameTime();
	}
}

gameTime();
