"use strict";

const prompt = require("prompt-sync")({ sigint: true });

let inventory = [];

function gameTime() {
	let bossRoom = Math.floor(Math.random() * 100);
	if (bossRoom >= 50) {
		bossRoom = "B";
	} else {
		bossRoom = "A";
	}

	console.log("Welcome to game-world!");
	//randomizeBoss();
	getName();
	chooseRoom(bossRoom);
}

//   Enter Name
function getName() {
	let name = prompt("Enter your name: ");

	console.log(`Safe Journies ${name}`);
}

//   Room Choice
function chooseRoom(bossRoom) {
	let choice = prompt("Choose a door (A or B): ").toUpperCase();

	switch (choice) {
		case "A":
			if (choice == bossRoom) {
				choice = prompt(
					"There is a Giant Troll! (Fight or Leave): "
				).toUpperCase();

				if (choice == "FIGHT") {
					fightBoss();
				} else {
					chooseRoom(bossRoom);
				}
			} else {
				choice = prompt(
					"It is a dark room. (Search or Leave): "
				).toUpperCase();

				if (choice == "SEARCH") {
					searchRoom();
				} else {
					chooseRoom(bossRoom);
				}
			}
			break;
		case "B":
			if (choice == bossRoom) {
				choice = prompt(
					"There is a Giant Troll! (Fight or Leave): "
				).toUpperCase();

				if (choice == "FIGHT") {
					fightBoss();
				} else {
					chooseRoom(bossRoom);
				}
			} else {
				choice = prompt(
					"It is a dark room. (Search or Leave): "
				).toUpperCase();

				if (choice == "SEARCH") {
					searchRoom();
				} else {
					chooseRoom(bossRoom);
				}
			}
			break;
	}
}

function searchRoom(bossRoom) {
	let pickUp = prompt(
		"You Found a Sword! Take Sword? (Yes or No): "
	).toUpperCase();

	if (pickUp == "YES") {
		inventory.push("Sword");
		chooseRoom(bossRoom);
	} else {
		chooseRoom(bossRoom);
	}
}

function fightBoss() {
	if (inventory.includes("Sword")) {
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
