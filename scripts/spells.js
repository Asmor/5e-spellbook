/* exported spells */
"use strict";

var spells = [
	{
		name: "Acid Splash",
		level: 0,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 211 },
			{ name: "Basic Rules v2", page: 83 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Aid",
		level: 2,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 211 },
			{ name: "Basic Rules v2", page: 83 },
		],
		classes: [
			"Cleric",
			"Paladin",
		],
	},
	{
		name: "Alarm",
		level: 1,
		school: "Abjuration",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 211 },
		],
		classes: [
			"Ranger",
			"Wizard",
		],
	},
	{
		name: "Alter Self",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 211 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Animal Friendship",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 212 },
		],
		classes: [
			"Bard",
			"Cleric:Nature",
			"Druid",
			"Ranger",
		],
	},
	{
		name: "Animal Messenger",
		level: 2,
		school: "Enchantment",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 212 },
		],
		classes: [
			"Bard",
			"Druid",
			"Ranger",
		],
	},
	{
		name: "Animal Shapes",
		level: 8,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 212 },
		],
		classes: [
			"Druid",
		],
	},
	{
		name: "Animate Dead",
		level: 3,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 212 },
		],
		classes: [
			"Cleric",
			"Wizard",
		],
	},
	{
		name: "Animate Objects",
		level: 5,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 213 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Antilife Shell",
		level: 5,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 213 },
		],
		classes: [
			"Druid",
		],
	},
	{
		name: "Antimagic Field",
		level: 8,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 213 },
			{ name: "Basic Rules v2", page: 83 },
		],
		classes: [
			"Cleric",
			"Wizard",
		],
	},
	{
		name: "Antipathy/Sympathy",
		level: 8,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 214 },
		],
		classes: [
			"Druid",
			"Wizard",
		],
	},
	{
		name: "Arcane Eye",
		level: 4,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 214 },
			{ name: "Basic Rules v2", page: 83 },
		],
		classes: [
			"Cleric:Knowledge",
			"Wizard",
		],
	},
	{
		name: "Arcane Gate",
		level: 6,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 214 },
		],
		classes: [
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Arcane Lock",
		level: 2,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 215 },
			{ name: "Basic Rules v2", page: 83 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Armor of Agathys",
		level: 1,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 215 },
		],
		classes: [
			"Warlock",
		],
	},
	{
		name: "Arms of Hadar",
		level: 1,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 215 },
		],
		classes: [
			"Warlock",
		],
	},
	{
		name: "Astral Projection",
		level: 9,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 215 },
			{ name: "Basic Rules v2", page: 84 },
		],
		classes: [
			"Cleric",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Augury",
		level: 2,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 215 },
			{ name: "Basic Rules v2", page: 84 },
		],
		classes: [
			"Cleric",
			"Cleric:Knowledge",
		],
	},
	{
		name: "Aura of Life",
		level: 4,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 216 },
		],
		classes: [
			"Paladin",
		],
	},
	{
		name: "Aura of Purity",
		level: 4,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 216 },
		],
		classes: [
			"Paladin",
		],
	},
	{
		name: "Aura of Vitality",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 216 },
		],
		classes: [
			"Paladin",
		],
	},
	{
		name: "Awaken",
		level: 5,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 216 },
		],
		classes: [
			"Bard",
			"Druid",
		],
	},
	{
		name: "Bane",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 216 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Paladin:Vengeance",
		],
	},
	{
		name: "Banishing Smite",
		level: 5,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 216 },
		],
		classes: [
			"Paladin",
		],
	},
	{
		name: "Banishment",
		level: 4,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 217 },
		],
		classes: [
			"Cleric",
			"Paladin",
			"Paladin:Vengeance",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Barkskin",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 217 },
		],
		classes: [
			"Cleric:Nature",
			"Druid",
			"Druid:Forest",
			"Ranger",
		],
	},
	{
		name: "Beacon of Hope",
		level: 3,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 217 },
			{ name: "Basic Rules v2", page: 84 },
		],
		classes: [
			"Cleric",
			"Cleric:Life",
			"Paladin:Devotion",
		],
	},
	{
		name: "Beast Sense",
		level: 2,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 217 },
		],
		classes: [
			"Druid",
			"Ranger",
		],
	},
	{
		name: "Bestow Curse",
		level: 3,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 218 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Wizard",
		],
	},
	{
		name: "Bigby's Hand",
		level: 5,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 218 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Blade Barrier",
		level: 6,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 218 },
			{ name: "Basic Rules v2", page: 84 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Blade Ward",
		level: 0,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 218 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Bless",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 219 },
			{ name: "Basic Rules v2", page: 85 },
		],
		classes: [
			"Cleric",
			"Cleric:Life",
			"Paladin",
		],
	},
	{
		name: "Blight",
		level: 4,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 219 },
		],
		classes: [
			"Druid",
			"Druid:Desert",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Blinding Smite",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 219 },
		],
		classes: [
			"Paladin",
		],
	},
	{
		name: "Blindness/Deafness",
		level: 2,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 219 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Sorcerer",
			"Warlock:Fiend",
			"Wizard",
		],
	},
	{
		name: "Blink",
		level: 3,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 219 },
		],
		classes: [
			"Cleric:Trickery",
			"Sorcerer",
			"Warlock:Archfey",
			"Wizard",
		],
	},
	{
		name: "Blur",
		level: 2,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 219 },
			{ name: "Basic Rules v2", page: 85 },
		],
		classes: [
			"Druid:Desert",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Branding Smite",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 219 },
		],
		classes: [
			"Paladin",
		],
	},
	{
		name: "Burning Hands",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 220 },
			{ name: "Basic Rules v2", page: 85 },
		],
		classes: [
			"Cleric:Light",
			"Sorcerer",
			"Warlock:Fiend",
			"Wizard",
		],
	},
	{
		name: "Call Lightning",
		level: 3,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 220 },
		],
		classes: [
			"Cleric:Tempest",
			"Druid",
			"Druid:Forest",
		],
	},
	{
		name: "Calm Emotions",
		level: 2,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 221 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Warlock:Archfey",
		],
	},
	{
		name: "Chain Lightning",
		level: 6,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 221 },
			{ name: "Basic Rules v2", page: 85 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Charm Person",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 221 },
			{ name: "Basic Rules v2", page: 85 },
		],
		classes: [
			"Bard",
			"Cleric:Trickery",
			"Druid",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Chill Touch",
		level: 0,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 221 },
		],
		classes: [
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Chromatic Orb",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 221 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Circle of Death",
		level: 6,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 221 },
		],
		classes: [
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Circle of Power",
		level: 5,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 221 },
		],
		classes: [
			"Paladin",
		],
	},
	{
		name: "Clairvoyance",
		level: 3,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 222 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Sorcerer",
			"Warlock:Great Old One",
			"Wizard",
		],
	},
	{
		name: "Clone",
		level: 8,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 222 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Cloud of Daggers",
		level: 2,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 222 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Cloudkill",
		level: 5,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 222 },
		],
		classes: [
			"Druid:Underdark",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Color Spray",
		level: 1,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 222 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Command",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 223 },
			{ name: "Basic Rules v2", page: 85 },
		],
		classes: [
			"Cleric",
			"Cleric:Knowledge",
			"Paladin",
			"Warlock:Fiend",
		],
	},
	{
		name: "Commune",
		level: 5,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 223 },
			{ name: "Basic Rules v2", page: 86 },
		],
		classes: [
			"Cleric",
			"Paladin:Devotion",
		],
	},
	{
		name: "Commune with Nature",
		level: 5,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 224 },
		],
		classes: [
			"Druid",
			"Druid:Arctic",
			"Druid:Forest",
			"Paladin:Ancients",
			"Ranger",
		],
	},
	{
		name: "Compelled Duel",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 224 },
		],
		classes: [
			"Paladin",
		],
	},
	{
		name: "Comprehend Languages",
		level: 1,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 224 },
			{ name: "Basic Rules v2", page: 86 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Compulsion",
		level: 4,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 224 },
		],
		classes: [
			"Bard",
		],
	},
	{
		name: "Cone of Cold",
		level: 5,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 224 },
			{ name: "Basic Rules v2", page: 86 },
		],
		classes: [
			"Druid:Arctic",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Confusion",
		level: 4,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 224 },
		],
		classes: [
			"Bard",
			"Cleric:Knowledge",
			"Druid",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Conjure Animals",
		level: 3,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 225 },
		],
		classes: [
			"Druid",
			"Ranger",
		],
	},
	{
		name: "Conjure Barrage",
		level: 3,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 225 },
		],
		classes: [
			"Ranger",
		],
	},
	{
		name: "Conjure Celestial",
		level: 7,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 225 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Conjure Elemental",
		level: 5,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 225 },
		],
		classes: [
			"Druid",
			"Druid:Coast",
			"Wizard",
		],
	},
	{
		name: "Conjure Fey",
		level: 6,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 226 },
		],
		classes: [
			"Druid",
			"Warlock",
		],
	},
	{
		name: "Conjure Minor Elementals",
		level: 4,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 226 },
		],
		classes: [
			"Druid",
			"Wizard",
		],
	},
	{
		name: "Conjure Volley",
		level: 5,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 226 },
		],
		classes: [
			"Ranger",
		],
	},
	{
		name: "Conjure Woodland Beings",
		level: 4,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 226 },
		],
		classes: [
			"Druid",
			"Ranger",
		],
	},
	{
		name: "Contact Other Plane",
		level: 5,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 226 },
		],
		classes: [
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Contagion",
		level: 5,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 227 },
		],
		classes: [
			"Cleric",
			"Druid",
		],
	},
	{
		name: "Contingency",
		level: 6,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 227 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Continual Flame",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 227 },
		],
		classes: [
			"Cleric",
			"Wizard",
		],
	},
	{
		name: "Control Water",
		level: 4,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 227 },
		],
		classes: [
			"Cleric",
			"Cleric:Tempest",
			"Druid",
			"Druid:Coast",
			"Wizard",
		],
	},
	{
		name: "Control Weather",
		level: 8,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 228 },
		],
		classes: [
			"Cleric",
			"Druid",
			"Wizard",
		],
	},
	{
		name: "Cordon of Arrows",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 228 },
		],
		classes: [
			"Ranger",
		],
	},
	{
		name: "Counterspell",
		level: 3,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 228 },
			{ name: "Basic Rules v2", page: 86 },
		],
		classes: [
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Create Food and Water",
		level: 3,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 229 },
		],
		classes: [
			"Cleric",
			"Druid:Desert",
			"Paladin",
		],
	},
	{
		name: "Create Undead",
		level: 6,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 229 },
		],
		classes: [
			"Cleric",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Create or Destroy Water",
		level: 1,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 229 },
		],
		classes: [
			"Cleric",
			"Druid",
		],
	},
	{
		name: "Creation",
		level: 5,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 229 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Crown of Madness",
		level: 2,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 229 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Crusader's Mantle",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 230 },
		],
		classes: [
			"Cleric:War",
			"Paladin",
		],
	},
	{
		name: "Cure Wounds",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 230 },
			{ name: "Basic Rules v2", page: 86 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Cleric:Life",
			"Druid",
			"Paladin",
			"Ranger",
		],
	},
	{
		name: "Dancing Lights",
		level: 0,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 230 },
			{ name: "Basic Rules v2", page: 86 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Darkness",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 230 },
			{ name: "Basic Rules v2", page: 86 },
		],
		classes: [
			"Druid:Swamp",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Darkvision",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 230 },
		],
		classes: [
			"Druid",
			"Ranger",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Daylight",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 230 },
		],
		classes: [
			"Cleric",
			"Cleric:Light",
			"Druid",
			"Druid:Grassland",
			"Paladin",
			"Ranger",
			"Sorcerer",
		],
	},
	{
		name: "Death Ward",
		level: 4,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 230 },
			{ name: "Basic Rules v2", page: 87 },
		],
		classes: [
			"Cleric",
			"Cleric:Life",
			"Paladin",
		],
	},
	{
		name: "Delayed Blast Fireball",
		level: 7,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 230 },
			{ name: "Basic Rules v2", page: 87 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Demiplane",
		level: 8,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 231 },
		],
		classes: [
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Destructive Smite",
		level: 5,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 231 },
		],
		classes: [
			"Cleric:Tempest",
			"Paladin",
		],
	},
	{
		name: "Detect Evil and Good",
		level: 1,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 231 },
		],
		classes: [
			"Cleric",
			"Paladin",
		],
	},
	{
		name: "Detect Magic",
		level: 1,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 231 },
			{ name: "Basic Rules v2", page: 87 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Druid",
			"Paladin",
			"Ranger",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Detect Poison and Disease",
		level: 1,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 231 },
		],
		classes: [
			"Cleric",
			"Druid",
			"Paladin",
			"Ranger",
		],
	},
	{
		name: "Detect Thoughts",
		level: 2,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 231 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock:Great Old One",
			"Wizard",
		],
	},
	{
		name: "Dimension Door",
		level: 4,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 233 },
			{ name: "Basic Rules v2", page: 87 },
		],
		classes: [
			"Bard",
			"Cleric:Trickery",
			"Paladin:Vengeance",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Disguise Self",
		level: 1,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 233 },
			{ name: "Basic Rules v2", page: 87 },
		],
		classes: [
			"Bard",
			"Cleric:Trickery",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Disintegrate",
		level: 6,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 233 },
			{ name: "Basic Rules v2", page: 88 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Dispel Evil and Good",
		level: 5,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 233 },
		],
		classes: [
			"Cleric",
			"Paladin",
		],
	},
	{
		name: "Dispel Magic",
		level: 3,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 234 },
			{ name: "Basic Rules v2", page: 88 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Cleric:Trickery",
			"Druid",
			"Paladin",
			"Paladin:Devotion",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Dissonant Whispers",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 234 },
		],
		classes: [
			"Bard",
			"Warlock:Great Old One",
		],
	},
	{
		name: "Divination",
		level: 4,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 234 },
			{ name: "Basic Rules v2", page: 88 },
		],
		classes: [
			"Cleric",
			"Druid:Forest",
			"Druid:Grassland",
		],
	},
	{
		name: "Divine Favor",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 234 },
		],
		classes: [
			"Cleric:War",
			"Paladin",
		],
	},
	{
		name: "Divine Word",
		level: 7,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 234 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Dominate Beast",
		level: 4,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 234 },
		],
		classes: [
			"Cleric:Nature",
			"Druid",
			"Sorcerer",
			"Warlock:Archfey",
			"Warlock:Great Old One",
		],
	},
	{
		name: "Dominate Monster",
		level: 8,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 235 },
			{ name: "Basic Rules v2", page: 88 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Dominate Person",
		level: 5,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 235 },
			{ name: "Basic Rules v2", page: 88 },
		],
		classes: [
			"Bard",
			"Cleric:Trickery",
			"Sorcerer",
			"Warlock:Archfey",
			"Warlock:Great Old One",
			"Wizard",
		],
	},
	{
		name: "Drawmij's Instant Summons",
		level: 6,
		school: "Conjuration",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 235 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Dream",
		level: 5,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 236 },
			{ name: "Basic Rules v2", page: 89 },
		],
		classes: [
			"Bard",
			"Druid:Grassland",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Druidcraft",
		level: 0,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 236 },
		],
		classes: [
			"Druid",
		],
	},
	{
		name: "Earthquake",
		level: 8,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 236 },
			{ name: "Basic Rules v2", page: 89 },
		],
		classes: [
			"Cleric",
			"Druid",
			"Sorcerer",
		],
	},
	{
		name: "Eldritch Blast",
		level: 0,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 237 },
		],
		classes: [
			"Warlock",
		],
	},
	{
		name: "Elemental Weapon",
		level: 3,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 237 },
		],
		classes: [
			"Paladin",
		],
	},
	{
		name: "Enhance Ability",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 237 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Druid",
			"Sorcerer",
		],
	},
	{
		name: "Enlarge/Reduce",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 237 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Ensnaring Strike",
		level: 1,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 237 },
		],
		classes: [
			"Paladin:Ancients",
			"Ranger",
		],
	},
	{
		name: "Entangle",
		level: 1,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 238 },
		],
		classes: [
			"Druid",
		],
	},
	{
		name: "Enthrall",
		level: 2,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 238 },
		],
		classes: [
			"Bard",
			"Warlock",
		],
	},
	{
		name: "Etherealness",
		level: 7,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 238 },
			{ name: "Basic Rules v2", page: 89 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Evard's Black Tentacles",
		level: 4,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 238 },
		],
		classes: [
			"Warlock:Great Old One",
			"Wizard",
		],
	},
	{
		name: "Expeditious Retreat",
		level: 1,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 238 },
		],
		classes: [
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Eyebite",
		level: 6,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 238 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Fabricate",
		level: 4,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 239 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Faerie Fire",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 239 },
			{ name: "Basic Rules v2", page: 90 },
		],
		classes: [
			"Bard",
			"Cleric:Light",
			"Druid",
			"Warlock:Archfey",
		],
	},
	{
		name: "False Life",
		level: 1,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 239 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Fear",
		level: 3,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 239 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Feather Fall",
		level: 1,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 239 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Feeblemind",
		level: 8,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 239 },
		],
		classes: [
			"Bard",
			"Druid",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Feign Death",
		level: 3,
		school: "Necromancy",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 240 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Druid",
			"Wizard",
		],
	},
	{
		name: "Find Familiar",
		level: 1,
		school: "Conjuration",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 240 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Find Steed",
		level: 2,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 240 },
		],
		classes: [
			"Paladin",
		],
	},
	{
		name: "Find Traps",
		level: 2,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 241 },
		],
		classes: [
			"Cleric",
			"Druid",
			"Ranger",
		],
	},
	{
		name: "Find the Path",
		level: 6,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 240 },
			{ name: "Basic Rules v2", page: 90 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Druid",
		],
	},
	{
		name: "Finger of Death",
		level: 7,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 241 },
			{ name: "Basic Rules v2", page: 90 },
		],
		classes: [
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Fire Bolt",
		level: 0,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 242 },
			{ name: "Basic Rules v2", page: 90 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Fire Shield",
		level: 4,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 242 },
		],
		classes: [
			"Warlock:Fiend",
			"Wizard",
		],
	},
	{
		name: "Fire Storm",
		level: 7,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 242 },
			{ name: "Basic Rules v2", page: 91 },
		],
		classes: [
			"Cleric",
			"Druid",
			"Sorcerer",
		],
	},
	{
		name: "Fireball",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 241 },
			{ name: "Basic Rules v2", page: 90 },
		],
		classes: [
			"Cleric:Light",
			"Sorcerer",
			"Warlock:Fiend",
			"Wizard",
		],
	},
	{
		name: "Flame Blade",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 242 },
		],
		classes: [
			"Druid",
		],
	},
	{
		name: "Flame Strike",
		level: 5,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 242 },
			{ name: "Basic Rules v2", page: 91 },
		],
		classes: [
			"Cleric",
			"Cleric:Light",
			"Cleric:War",
			"Paladin:Devotion",
			"Warlock:Fiend",
		],
	},
	{
		name: "Flaming Sphere",
		level: 2,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 242 },
			{ name: "Basic Rules v2", page: 91 },
		],
		classes: [
			"Cleric:Light",
			"Druid",
			"Wizard",
		],
	},
	{
		name: "Flesh to Stone",
		level: 6,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 243 },
		],
		classes: [
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Fly",
		level: 3,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 243 },
			{ name: "Basic Rules v2", page: 91 },
		],
		classes: [
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Fog Cloud",
		level: 1,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 243 },
		],
		classes: [
			"Cleric:Tempest",
			"Druid",
			"Ranger",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Forbiddance",
		level: 6,
		school: "Abjuration",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 243 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Forcecage",
		level: 7,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 243 },
		],
		classes: [
			"Bard",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Foresight",
		level: 9,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 244 },
			{ name: "Basic Rules v2", page: 91 },
		],
		classes: [
			"Bard",
			"Druid",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Freedom of Movement",
		level: 4,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 244 },
			{ name: "Basic Rules v2", page: 91 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Cleric:War",
			"Druid",
			"Druid:Arctic",
			"Druid:Coast",
			"Druid:Forest",
			"Druid:Grassland",
			"Druid:Swamp",
			"Paladin:Devotion",
			"Ranger",
		],
	},
	{
		name: "Friends",
		level: 0,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 244 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Gaseous Form",
		level: 3,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 244 },
		],
		classes: [
			"Druid:Underdark",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Gate",
		level: 9,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 244 },
			{ name: "Basic Rules v2", page: 91 },
		],
		classes: [
			"Cleric",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Geas",
		level: 5,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 244 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Druid",
			"Paladin",
			"Wizard",
		],
	},
	{
		name: "Gentle Repose",
		level: 2,
		school: "Necromancy",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 245 },
		],
		classes: [
			"Cleric",
			"Wizard",
		],
	},
	{
		name: "Giant Insect",
		level: 4,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 245 },
		],
		classes: [
			"Druid",
		],
	},
	{
		name: "Glibness",
		level: 8,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 245 },
		],
		classes: [
			"Bard",
			"Warlock",
		],
	},
	{
		name: "Globe of Invulnerability",
		level: 6,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 245 },
			{ name: "Basic Rules v2", page: 92 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Glyph of Warding",
		level: 3,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 245 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Wizard",
		],
	},
	{
		name: "Goodberry",
		level: 1,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 246 },
		],
		classes: [
			"Druid",
			"Ranger",
		],
	},
	{
		name: "Grasping Vines",
		level: 4,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 246 },
		],
		classes: [
			"Cleric:Nature",
			"Druid",
			"Ranger",
		],
	},
	{
		name: "Grease",
		level: 1,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 246 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Greater Invisibility",
		level: 4,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 246 },
			{ name: "Basic Rules v2", page: 92 },
		],
		classes: [
			"Bard",
			"Druid:Underdark",
			"Sorcerer",
			"Warlock:Archfey",
			"Wizard",
		],
	},
	{
		name: "Greater Restoration",
		level: 5,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 246 },
			{ name: "Basic Rules v2", page: 92 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Druid",
		],
	},
	{
		name: "Guardians of Faith",
		level: 4,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 246 },
			{ name: "Basic Rules v2", page: 92 },
		],
		classes: [
			"Cleric",
			"Cleric:Life",
			"Cleric:Light",
			"Paladin:Devotion",
		],
	},
	{
		name: "Guards and Wards",
		level: 6,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 248 },
		],
		classes: [
			"Bard",
			"Wizard",
		],
	},
	{
		name: "Guidance",
		level: 0,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 248 },
			{ name: "Basic Rules v2", page: 92 },
		],
		classes: [
			"Cleric",
			"Druid",
		],
	},
	{
		name: "Guiding Bolt",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 248 },
			{ name: "Basic Rules v2", page: 92 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Gust of Wind",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 248 },
		],
		classes: [
			"Cleric:Tempest",
			"Druid",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Hail of Thorns",
		level: 1,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 249 },
		],
		classes: [
			"Ranger",
		],
	},
	{
		name: "Hallow",
		level: 5,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 249 },
		],
		classes: [
			"Cleric",
			"Warlock:Fiend",
		],
	},
	{
		name: "Hallucinatory Terrain",
		level: 4,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 249 },
		],
		classes: [
			"Bard",
			"Druid",
			"Druid:Desert",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Harm",
		level: 6,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 249 },
			{ name: "Basic Rules v2", page: 93 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Haste",
		level: 3,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 250 },
			{ name: "Basic Rules v2", page: 93 },
		],
		classes: [
			"Druid:Grassland",
			"Paladin:Vengeance",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Heal",
		level: 6,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 250 },
			{ name: "Basic Rules v2", page: 93 },
		],
		classes: [
			"Cleric",
			"Druid",
		],
	},
	{
		name: "Healing Word",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 250 },
			{ name: "Basic Rules v2", page: 93 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Druid",
		],
	},
	{
		name: "Heat Metal",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 250 },
		],
		classes: [
			"Bard",
			"Druid",
		],
	},
	{
		name: "Hellish Rebuke",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 250 },
		],
		classes: [
			"Warlock",
		],
	},
	{
		name: "Heroes' Feast",
		level: 6,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 250 },
			{ name: "Basic Rules v2", page: 93 },
		],
		classes: [
			"Cleric",
			"Druid",
		],
	},
	{
		name: "Heroism",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 250 },
		],
		classes: [
			"Bard",
			"Paladin",
		],
	},
	{
		name: "Hex",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 251 },
		],
		classes: [
			"Warlock",
		],
	},
	{
		name: "Hold Monster",
		level: 5,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 251 },
		],
		classes: [
			"Bard",
			"Cleric:War",
			"Paladin:Vengeance",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Hold Person",
		level: 2,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 251 },
			{ name: "Basic Rules v2", page: 93 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Druid",
			"Druid:Arctic",
			"Paladin:Vengeance",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Holy Aura",
		level: 8,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 251 },
			{ name: "Basic Rules v2", page: 93 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Hunger of Hadar",
		level: 3,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 251 },
		],
		classes: [
			"Warlock",
		],
	},
	{
		name: "Hunter's Mark",
		level: 1,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 251 },
		],
		classes: [
			"Paladin:Vengeance",
			"Ranger",
		],
	},
	{
		name: "Hypnotic Pattern",
		level: 3,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 252 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Ice Storm",
		level: 4,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 252 },
			{ name: "Basic Rules v2", page: 94 },
		],
		classes: [
			"Cleric:Tempest",
			"Druid",
			"Druid:Arctic",
			"Paladin:Ancients",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Identify",
		level: 1,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 252 },
			{ name: "Basic Rules v2", page: 94 },
		],
		classes: [
			"Bard",
			"Cleric:Knowledge",
			"Wizard",
		],
	},
	{
		name: "Illusory Script",
		level: 1,
		school: "Illusion",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 252 },
		],
		classes: [
			"Bard",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Imprisonment",
		level: 9,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 252 },
			{ name: "Basic Rules v2", page: 94 },
		],
		classes: [
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Incendiary Cloud",
		level: 8,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 253 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Inflict Wounds",
		level: 1,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 253 },
			{ name: "Basic Rules v2", page: 94 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Insect Plague",
		level: 5,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 254 },
		],
		classes: [
			"Cleric",
			"Cleric:Nature",
			"Cleric:Tempest",
			"Druid",
			"Druid:Desert",
			"Druid:Grassland",
			"Druid:Swamp",
			"Druid:Underdark",
			"Sorcerer",
		],
	},
	{
		name: "Invisibility",
		level: 2,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 254 },
			{ name: "Basic Rules v2", page: 95 },
		],
		classes: [
			"Bard",
			"Druid:Grassland",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Jump",
		level: 1,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 254 },
		],
		classes: [
			"Druid",
			"Ranger",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Knock",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 254 },
			{ name: "Basic Rules v2", page: 95 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Legend Lore",
		level: 5,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 254 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Cleric:Knowledge",
			"Wizard",
		],
	},
	{
		name: "Leomund's Secret Chest",
		level: 4,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 254 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Leomund's Tiny Hut",
		level: 3,
		school: "Evocation",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 255 },
		],
		classes: [
			"Bard",
			"Wizard",
		],
	},
	{
		name: "Lesser Restoration",
		level: 2,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 255 },
			{ name: "Basic Rules v2", page: 95 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Cleric:Life",
			"Druid",
			"Paladin",
			"Paladin:Devotion",
			"Ranger",
		],
	},
	{
		name: "Levitate",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 255 },
			{ name: "Basic Rules v2", page: 95 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Light",
		level: 0,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 255 },
			{ name: "Basic Rules v2", page: 95 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Lightning Arrow",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 255 },
		],
		classes: [
			"Ranger",
		],
	},
	{
		name: "Lightning Bolt",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 255 },
			{ name: "Basic Rules v2", page: 95 },
		],
		classes: [
			"Druid:Mountain",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Locate Animals or Plants",
		level: 2,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 256 },
		],
		classes: [
			"Bard",
			"Druid",
			"Ranger",
		],
	},
	{
		name: "Locate Creature",
		level: 4,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 256 },
			{ name: "Basic Rules v2", page: 95 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Druid",
			"Druid:Swamp",
			"Paladin",
			"Ranger",
			"Wizard",
		],
	},
	{
		name: "Locate Object",
		level: 2,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 256 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Druid",
			"Paladin",
			"Ranger",
			"Wizard",
		],
	},
	{
		name: "Longstrider",
		level: 1,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 256 },
		],
		classes: [
			"Bard",
			"Druid",
			"Ranger",
			"Wizard",
		],
	},
	{
		name: "Mage Armor",
		level: 1,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 256 },
			{ name: "Basic Rules v2", page: 96 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Mage Hand",
		level: 0,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 256 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Magic Circle",
		level: 3,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 256 },
		],
		classes: [
			"Cleric",
			"Paladin",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Magic Jar",
		level: 6,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 257 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Magic Missile",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 257 },
			{ name: "Basic Rules v2", page: 96 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Magic Mouth",
		level: 2,
		school: "Illusion",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 257 },
		],
		classes: [
			"Bard",
			"Wizard",
		],
	},
	{
		name: "Magic Weapon",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 257 },
			{ name: "Basic Rules v2", page: 96 },
		],
		classes: [
			"Cleric:War",
			"Paladin",
			"Wizard",
		],
	},
	{
		name: "Major Image",
		level: 3,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 258 },
			{ name: "Basic Rules v2", page: 96 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Mass Cure Wounds",
		level: 5,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 258 },
			{ name: "Basic Rules v2", page: 96 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Cleric:Life",
			"Druid",
		],
	},
	{
		name: "Mass Heal",
		level: 9,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 258 },
			{ name: "Basic Rules v2", page: 97 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Mass Healing Ward",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 258 },
			{ name: "Basic Rules v2", page: 97 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Mass Suggestion",
		level: 6,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 258 },
			{ name: "Basic Rules v2", page: 97 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Maze",
		level: 8,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 258 },
			{ name: "Basic Rules v2", page: 97 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Meld into Stone",
		level: 3,
		school: "Transmuation",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 259 },
		],
		classes: [
			"Cleric",
			"Druid",
			"Druid:Mountain",
		],
	},
	{
		name: "Melf's Acid Arrow",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 259 },
		],
		classes: [
			"Druid:Swamp",
			"Wizard",
		],
	},
	{
		name: "Mending",
		level: 0,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 259 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Druid",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Message",
		level: 0,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 259 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Meteor Swarm",
		level: 9,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 259 },
			{ name: "Basic Rules v2", page: 97 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Mind Blank",
		level: 8,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 259 },
		],
		classes: [
			"Bard",
			"Wizard",
		],
	},
	{
		name: "Minor Illusion",
		level: 0,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 260 },
			{ name: "Basic Rules v2", page: 97 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Mirage Arcane",
		level: 7,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 260 },
		],
		classes: [
			"Bard",
			"Druid",
			"Wizard",
		],
	},
	{
		name: "Mirror Image",
		level: 2,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 260 },
		],
		classes: [
			"Cleric:Trickery",
			"Druid:Coast",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Mislead",
		level: 5,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 260 },
		],
		classes: [
			"Bard",
			"Wizard",
		],
	},
	{
		name: "Misty Step",
		level: 2,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 260 },
			{ name: "Basic Rules v2", page: 98 },
		],
		classes: [
			"Druid:Coast",
			"Paladin:Ancients",
			"Paladin:Vengeance",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Modify Memory",
		level: 5,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 261 },
		],
		classes: [
			"Bard",
			"Cleric:Trickery",
			"Wizard",
		],
	},
	{
		name: "Moonbeam",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 261 },
		],
		classes: [
			"Druid",
			"Paladin:Ancients",
		],
	},
	{
		name: "Mordenkainen's Faithful Hound",
		level: 4,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 261 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Mordenkainen's Magnificent Mansion",
		level: 7,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 261 },
		],
		classes: [
			"Bard",
			"Wizard",
		],
	},
	{
		name: "Mordenkainen's Private Sanctum",
		level: 4,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 262 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Mordenkainen's Sword",
		level: 7,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 262 },
			{ name: "Basic Rules v2", page: 98 },
		],
		classes: [
			"Bard",
			"Wizard",
		],
	},
	{
		name: "Move Earth",
		level: 6,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 263 },
		],
		classes: [
			"Druid",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Nondetection",
		level: 3,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 263 },
		],
		classes: [
			"Bard",
			"Cleric:Knowledge",
			"Ranger",
			"Wizard",
		],
	},
	{
		name: "Nystul's Magic Aura",
		level: 2,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 263 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Otiluke's Freezing Sphere",
		level: 6,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 263 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Otiluke's Resilient Sphere",
		level: 4,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 264 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Otto's Irresistible Dance",
		level: 6,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 264 },
			{ name: "Basic Rules v2", page: 98 },
		],
		classes: [
			"Bard",
			"Wizard",
		],
	},
	{
		name: "Pass without Trace",
		level: 2,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 264 },
		],
		classes: [
			"Cleric:Trickery",
			"Druid",
			"Druid:Grassland",
			"Ranger",
		],
	},
	{
		name: "Passwall",
		level: 5,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 264 },
			{ name: "Basic Rules v2", page: 98 },
		],
		classes: [
			"Druid:Mountain",
			"Wizard",
		],
	},
	{
		name: "Phantasmal Force",
		level: 2,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 264 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock:Archfey",
			"Warlock:Great Old One",
			"Wizard",
		],
	},
	{
		name: "Phantasmal Killer",
		level: 4,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 265 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Phantom Steed",
		level: 3,
		school: "Illusion",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 265 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Planar Ally",
		level: 6,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 265 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Planar Binding",
		level: 5,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 265 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Druid",
			"Wizard",
		],
	},
	{
		name: "Plane Shift",
		level: 7,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 266 },
		],
		classes: [
			"Cleric",
			"Druid",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Plant Growth",
		level: 3,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 266 },
		],
		classes: [
			"Cleric:Nature",
			"Druid",
			"Druid:Forest",
			"Paladin:Ancients",
			"Ranger",
			"Warlock:Archfey",
		],
	},
	{
		name: "Poison Spray",
		level: 0,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 266 },
			{ name: "Basic Rules v2", page: 98 },
		],
		classes: [
			"Druid",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Polymorph",
		level: 4,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 266 },
		],
		classes: [
			"Bard",
			"Cleric:Trickery",
			"Druid",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Power Word Heal",
		level: 9,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 266 },
		],
		classes: [
			"Bard",
		],
	},
	{
		name: "Power Word Kill",
		level: 9,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 266 },
			{ name: "Basic Rules v2", page: 98 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Power Word Stun",
		level: 8,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 267 },
			{ name: "Basic Rules v2", page: 98 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Prayer of Healing",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 267 },
			{ name: "Basic Rules v2", page: 98 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Prestidigitation",
		level: 0,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 267 },
			{ name: "Basic Rules v2", page: 99 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Prismatic Spray",
		level: 7,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 267 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Prismatic Wall",
		level: 9,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 267 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Produce Flame",
		level: 0,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 269 },
		],
		classes: [
			"Druid",
		],
	},
	{
		name: "Programmed Illusion",
		level: 6,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 269 },
		],
		classes: [
			"Bard",
			"Wizard",
		],
	},
	{
		name: "Project Image",
		level: 7,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 270 },
		],
		classes: [
			"Bard",
			"Wizard",
		],
	},
	{
		name: "Protection from Energy",
		level: 3,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 270 },
			{ name: "Basic Rules v2", page: 99 },
		],
		classes: [
			"Cleric",
			"Druid",
			"Druid:Desert",
			"Paladin:Ancients",
			"Paladin:Vengeance",
			"Ranger",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Protection from Evil and Good",
		level: 1,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 270 },
		],
		classes: [
			"Cleric",
			"Paladin",
			"Paladin:Devotion",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Protection from Poison",
		level: 2,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 270 },
		],
		classes: [
			"Cleric",
			"Druid",
			"Paladin",
			"Ranger",
		],
	},
	{
		name: "Purify Food and Drink",
		level: 1,
		school: "Transmuation",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 270 },
		],
		classes: [
			"Cleric",
			"Druid",
			"Paladin",
		],
	},
	{
		name: "Raise Dead",
		level: 5,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 270 },
			{ name: "Basic Rules v2", page: 99 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Cleric:Life",
			"Paladin",
		],
	},
	{
		name: "Rary's Telepathic Bond",
		level: 5,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 270 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Ray of Enfeeblement",
		level: 2,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 271 },
		],
		classes: [
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Ray of Frost",
		level: 0,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 271 },
			{ name: "Basic Rules v2", page: 99 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Ray of Sickness",
		level: 1,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 271 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Regenerate",
		level: 7,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 271 },
			{ name: "Basic Rules v2", page: 99 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Druid",
		],
	},
	{
		name: "Reincarnate",
		level: 5,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 271 },
		],
		classes: [
			"Druid",
		],
	},
	{
		name: "Remove Curse",
		level: 3,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 271 },
			{ name: "Basic Rules v2", page: 99 },
		],
		classes: [
			"Cleric",
			"Paladin",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Resistance",
		level: 0,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 272 },
			{ name: "Basic Rules v2", page: 99 },
		],
		classes: [
			"Cleric",
			"Druid",
		],
	},
	{
		name: "Resurrection",
		level: 7,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 272 },
			{ name: "Basic Rules v2", page: 100 },
		],
		classes: [
			"Bard",
			"Cleric",
		],
	},
	{
		name: "Reverse Gravity",
		level: 7,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 272 },
		],
		classes: [
			"Druid",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Revivify",
		level: 3,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 272 },
			{ name: "Basic Rules v2", page: 100 },
		],
		classes: [
			"Cleric",
			"Cleric:Life",
			"Paladin",
		],
	},
	{
		name: "Rope Trick",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 272 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Sacred Flame",
		level: 0,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 272 },
			{ name: "Basic Rules v2", page: 100 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Sanctuary",
		level: 1,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 272 },
			{ name: "Basic Rules v2", page: 100 },
		],
		classes: [
			"Cleric",
			"Paladin:Devotion",
		],
	},
	{
		name: "Scorching Ray",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 273 },
		],
		classes: [
			"Cleric:Light",
			"Sorcerer",
			"Warlock:Fiend",
			"Wizard",
		],
	},
	{
		name: "Scrying",
		level: 5,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 273 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Cleric:Knowledge",
			"Cleric:Light",
			"Druid",
			"Druid:Coast",
			"Druid:Swamp",
			"Paladin:Vengeance",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Searing Flame",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 274 },
		],
		classes: [
			"Paladin",
		],
	},
	{
		name: "See Invisibility",
		level: 2,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 274 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Seeming",
		level: 5,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 274 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock:Archfey",
			"Wizard",
		],
	},
	{
		name: "Sending",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 274 },
		],
		classes: [
			"Cleric",
			"Warlock:Great Old One",
			"Wizard",
		],
	},
	{
		name: "Sequester",
		level: 7,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 274 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Shapechange",
		level: 9,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 274 },
		],
		classes: [
			"Druid",
			"Wizard",
		],
	},
	{
		name: "Shatter",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 275 },
			{ name: "Basic Rules v2", page: 100 },
		],
		classes: [
			"Bard",
			"Cleric:Tempest",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Shield",
		level: 1,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 275 },
			{ name: "Basic Rules v2", page: 100 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Shield of Faith",
		level: 1,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 275 },
			{ name: "Basic Rules v2", page: 100 },
		],
		classes: [
			"Cleric",
			"Cleric:War",
			"Paladin",
			"Sorcerer",
		],
	},
	{
		name: "Shillelagh",
		level: 0,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 275 },
		],
		classes: [
			"Druid",
		],
	},
	{
		name: "Shocking Grasp",
		level: 0,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 275 },
			{ name: "Basic Rules v2", page: 101 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Silence",
		level: 2,
		school: "Illusion",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 275 },
			{ name: "Basic Rules v2", page: 101 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Druid:Desert",
			"Ranger",
		],
	},
	{
		name: "Silent Image",
		level: 1,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 276 },
			{ name: "Basic Rules v2", page: 101 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Simulacrum",
		level: 7,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 276 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Sleep",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 276 },
			{ name: "Basic Rules v2", page: 101 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock:Archfey",
			"Wizard",
		],
	},
	{
		name: "Sleet Storm",
		level: 3,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 276 },
		],
		classes: [
			"Cleric:Tempest",
			"Druid",
			"Druid:Arctic",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Slow",
		level: 3,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 277 },
		],
		classes: [
			"Druid:Arctic",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Spare the Dying",
		level: 0,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 277 },
			{ name: "Basic Rules v2", page: 101 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Speak with Animals",
		level: 1,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 277 },
		],
		classes: [
			"Bard",
			"Cleric:Nature",
			"Druid",
			"Paladin:Ancients",
			"Ranger",
		],
	},
	{
		name: "Speak with Dead",
		level: 3,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 277 },
			{ name: "Basic Rules v2", page: 101 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Cleric:Knowledge",
		],
	},
	{
		name: "Speak with Plants",
		level: 3,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 277 },
		],
		classes: [
			"Bard",
			"Druid",
			"Ranger",
		],
	},
	{
		name: "Spider Climb",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 277 },
			{ name: "Basic Rules v2", page: 102 },
		],
		classes: [
			"Druid:Forest",
			"Druid:Mountain",
			"Druid:Underdark",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Spike Growth",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 277 },
		],
		classes: [
			"Cleric:Nature",
			"Druid",
			"Druid:Arctic",
			"Druid:Mountain",
			"Ranger",
		],
	},
	{
		name: "Spirit Guardians",
		level: 3,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 278 },
			{ name: "Basic Rules v2", page: 102 },
		],
		classes: [
			"Cleric",
			"Cleric:War",
		],
	},
	{
		name: "Spiritual Weapon",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 278 },
			{ name: "Basic Rules v2", page: 102 },
		],
		classes: [
			"Cleric",
			"Cleric:Life",
			"Cleric:War",
		],
	},
	{
		name: "Staggering Smite",
		level: 4,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 278 },
		],
		classes: [
			"Paladin",
		],
	},
	{
		name: "Stinking Cloud",
		level: 3,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 278 },
		],
		classes: [
			"Bard",
			"Druid:Swamp",
			"Druid:Underdark",
			"Sorcerer",
			"Warlock:Fiend",
			"Wizard",
		],
	},
	{
		name: "Stone Shape",
		level: 4,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 278 },
		],
		classes: [
			"Cleric",
			"Druid",
			"Druid:Mountain",
			"Druid:Underdark",
			"Wizard",
		],
	},
	{
		name: "Stoneskin",
		level: 4,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 278 },
			{ name: "Basic Rules v2", page: 102 },
		],
		classes: [
			"Cleric:War",
			"Druid",
			"Druid:Mountain",
			"Paladin:Ancients",
			"Ranger",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Storm of Vengeance",
		level: 9,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 279 },
		],
		classes: [
			"Druid",
		],
	},
	{
		name: "Suggestion",
		level: 2,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 279 },
			{ name: "Basic Rules v2", page: 102 },
		],
		classes: [
			"Bard",
			"Cleric:Knowledge",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Sunbeam",
		level: 6,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 279 },
		],
		classes: [
			"Druid",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Sunburst",
		level: 8,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 279 },
			{ name: "Basic Rules v2", page: 102 },
		],
		classes: [
			"Druid",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Swift Quiver",
		level: 5,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 279 },
		],
		classes: [
			"Ranger",
		],
	},
	{
		name: "Symbol",
		level: 7,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 280 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Wizard",
		],
	},
	{
		name: "Tasha's Hideous Laughter",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 280 },
		],
		classes: [
			"Bard",
			"Warlock:Great Old One",
			"Wizard",
		],
	},
	{
		name: "Telekinesis",
		level: 5,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 280 },
		],
		classes: [
			"Sorcerer",
			"Warlock:Great Old One",
			"Wizard",
		],
	},
	{
		name: "Telepathy",
		level: 8,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 281 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Teleport",
		level: 7,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 281 },
			{ name: "Basic Rules v2", page: 103 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Teleportation Circle",
		level: 5,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 282 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Tenser's Floating Orb",
		level: 1,
		school: "Conjuration",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 282 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Thaumaturgy",
		level: 0,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 282 },
			{ name: "Basic Rules v2", page: 103 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Thorn Whip",
		level: 0,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 282 },
		],
		classes: [
			"Druid",
		],
	},
	{
		name: "Thunderous Smite",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 282 },
		],
		classes: [
			"Paladin",
		],
	},
	{
		name: "Thunderwave",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 282 },
			{ name: "Basic Rules v2", page: 103 },
		],
		classes: [
			"Bard",
			"Cleric:Tempest",
			"Druid",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Time Stop",
		level: 9,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 283 },
			{ name: "Basic Rules v2", page: 104 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Tongues",
		level: 3,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 283 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Transport via Plants",
		level: 6,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 283 },
		],
		classes: [
			"Druid",
		],
	},
	{
		name: "Tree Stride",
		level: 5,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 283 },
		],
		classes: [
			"Cleric:Nature",
			"Druid",
			"Druid:Forest",
			"Paladin:Ancients",
			"Ranger",
		],
	},
	{
		name: "True Polymorph",
		level: 9,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 283 },
		],
		classes: [
			"Bard",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "True Resurrection",
		level: 9,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 284 },
			{ name: "Basic Rules v2", page: 104 },
		],
		classes: [
			"Cleric",
			"Druid",
		],
	},
	{
		name: "True Seeing",
		level: 6,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 284 },
			{ name: "Basic Rules v2", page: 104 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "True Strike",
		level: 0,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 284 },
		],
		classes: [
			"Bard",
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Tsunami",
		level: 8,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 284 },
		],
		classes: [
			"Druid",
		],
	},
	{
		name: "Unseen Servant",
		level: 1,
		school: "Conjuration",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 284 },
		],
		classes: [
			"Bard",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Vampiric Touch",
		level: 3,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 285 },
		],
		classes: [
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Vicious Mockery",
		level: 0,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 285 },
		],
		classes: [
			"Bard",
		],
	},
	{
		name: "Wall of Fire",
		level: 4,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 285 },
			{ name: "Basic Rules v2", page: 104 },
		],
		classes: [
			"Cleric:Light",
			"Druid",
			"Sorcerer",
			"Warlock:Fiend",
			"Wizard",
		],
	},
	{
		name: "Wall of Force",
		level: 5,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 285 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Wall of Ice",
		level: 6,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 285 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Wall of Stone",
		level: 5,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 287 },
			{ name: "Basic Rules v2", page: 104 },
		],
		classes: [
			"Druid",
			"Druid:Desert",
			"Druid:Mountain",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Wall of Thorns",
		level: 6,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 287 },
		],
		classes: [
			"Druid",
		],
	},
	{
		name: "Warding Bond",
		level: 2,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 287 },
			{ name: "Basic Rules v2", page: 105 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Water Breathing",
		level: 3,
		school: "Transmuation",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 287 },
		],
		classes: [
			"Druid",
			"Druid:Coast",
			"Ranger",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Water Walk",
		level: 3,
		school: "Transmuation",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 287 },
		],
		classes: [
			"Cleric",
			"Druid",
			"Druid:Coast",
			"Druid:Swamp",
			"Ranger",
			"Sorcerer",
		],
	},
	{
		name: "Web",
		level: 2,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 287 },
			{ name: "Basic Rules v2", page: 105 },
		],
		classes: [
			"Druid:Underdark",
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Weird",
		level: 9,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 288 },
		],
		classes: [
			"Wizard",
		],
	},
	{
		name: "Wind Walk",
		level: 6,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 288 },
		],
		classes: [
			"Druid",
		],
	},
	{
		name: "Wind Wall",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 288 },
		],
		classes: [
			"Cleric:Nature",
			"Druid",
			"Ranger",
		],
	},
	{
		name: "Wish",
		level: 9,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 288 },
		],
		classes: [
			"Sorcerer",
			"Wizard",
		],
	},
	{
		name: "Witch Bolt",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 289 },
		],
		classes: [
			"Sorcerer",
			"Warlock",
			"Wizard",
		],
	},
	{
		name: "Word of Recall",
		level: 6,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 289 },
		],
		classes: [
			"Cleric",
		],
	},
	{
		name: "Wrathful Smite",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 289 },
		],
		classes: [
			"Paladin",
		],
	},
	{
		name: "Zone of Truth",
		level: 2,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 289 },
		],
		classes: [
			"Bard",
			"Cleric",
			"Paladin",
			"Paladin:Devotion",
		],
	},
];