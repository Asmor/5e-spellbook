/* exported classes */
/* exported findClass */
/* exported findSubclass */
"use strict";

var classes = [
	{
		name: "Bard",
	},
	{
		name: "Cleric",
		subtypeName: "Domain",
		subtypes: [
			{ name: "Knowledge", source: "Player's Handbook" },
			{ name: "Life", source: "Player's Handbook" },
			{ name: "Light", source: "Player's Handbook" },
			{ name: "Nature", source: "Player's Handbook" },
			{ name: "Tempest", source: "Player's Handbook" },
			{ name: "Trickery", source: "Player's Handbook" },
			{ name: "War", source: "Player's Handbook" },
		],
	},
	{
		name: "Druid",
		subtypeName: "Circle",
		subtypes: [
			{ name: "Arctic", source: "Player's Handbook" },
			{ name: "Coast", source: "Player's Handbook" },
			{ name: "Desert", source: "Player's Handbook" },
			{ name: "Forest", source: "Player's Handbook" },
			{ name: "Grassland", source: "Player's Handbook" },
			{ name: "Mountain", source: "Player's Handbook" },
			{ name: "Swamp", source: "Player's Handbook" },
			{ name: "Underdark", source: "Player's Handbook" },
		],
	},
	{
		name: "Paladin",
		subtypeName: "Oath",
		subtypes: [
			{ name: "Ancients", source: "Player's Handbook" },
			{ name: "Devotion", source: "Player's Handbook" },
			{ name: "Vengeance", source: "Player's Handbook" },
		],
	},
	{
		name: "Ranger",
	},
	{
		name: "Sorcerer",
	},
	{
		name: "Warlock",
		subtypeName: "Pact",
		subtypes: [
			{ name: "Archfey", source: "Player's Handbook" },
			{ name: "Fiend", source: "Player's Handbook" },
			{ name: "Great Old One", source: "Player's Handbook" },
		],
	},
	{
		name: "Wizard",
	},
];

function findClass(className) {
	className = className.replace(/[+_]/g, " ").toLowerCase();
	for ( var i = 0; i < classes.length; i++ ) {
		if (classes[i].name.toLowerCase() === className) {
			return classes[i];
		}
	}
}

function findSubclass(classObj, subclassName) {
	subclassName = subclassName.replace(/[+_]/g, " ").toLowerCase();
	for ( var i = 0; i < classObj.subtypes.length; i++ ) {
		if (classObj.subtypes[i].name.toLowerCase() === subclassName) {
			return classObj.subtypes[i];
		}
	}
}