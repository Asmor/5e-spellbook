/* exported register */
/* exported spells */
/* exported spellsByName */
"use strict";

var spells, spellsByName = {}, i;

spells = [
	{
		name: "Acid Splash",
		level: 0,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 211 },
			{ name: "Basic Rules v2", page: 83 },
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
	},
	{
		name: "Alarm",
		level: 1,
		school: "Abjuration",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 211 },
		],
	},
	{
		name: "Alter Self",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 211 },
		],
	},
	{
		name: "Animal Friendship",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 212 },
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
	},
	{
		name: "Animal Shapes",
		level: 8,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 212 },
		],
	},
	{
		name: "Animate Dead",
		level: 3,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 212 },
		],
	},
	{
		name: "Animate Objects",
		level: 5,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 213 },
		],
	},
	{
		name: "Antilife Shell",
		level: 5,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 213 },
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
	},
	{
		name: "Antipathy/Sympathy",
		level: 8,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 214 },
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
	},
	{
		name: "Arcane Gate",
		level: 6,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 214 },
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
	},
	{
		name: "Armor of Agathys",
		level: 1,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 215 },
		],
	},
	{
		name: "Arms of Hadar",
		level: 1,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 215 },
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
	},
	{
		name: "Aura of Life",
		level: 4,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 216 },
		],
	},
	{
		name: "Aura of Purity",
		level: 4,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 216 },
		],
	},
	{
		name: "Aura of Vitality",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 216 },
		],
	},
	{
		name: "Awaken",
		level: 5,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 216 },
		],
	},
	{
		name: "Bane",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 216 },
		],
	},
	{
		name: "Banishing Smite",
		level: 5,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 216 },
		],
	},
	{
		name: "Banishment",
		level: 4,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 217 },
		],
	},
	{
		name: "Barkskin",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 217 },
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
	},
	{
		name: "Beast Sense",
		level: 2,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 217 },
		],
	},
	{
		name: "Bestow Curse",
		level: 3,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 218 },
		],
	},
	{
		name: "Bigby's Hand",
		level: 5,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 218 },
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
	},
	{
		name: "Blade Ward",
		level: 0,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 218 },
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
	},
	{
		name: "Blight",
		level: 4,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 219 },
		],
	},
	{
		name: "Blinding Smite",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 219 },
		],
	},
	{
		name: "Blindness/Deafness",
		level: 2,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 219 },
		],
	},
	{
		name: "Blink",
		level: 3,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 219 },
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
	},
	{
		name: "Branding Smite",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 219 },
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
	},
	{
		name: "Call Lightning",
		level: 3,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 220 },
		],
	},
	{
		name: "Calm Emotions",
		level: 2,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 221 },
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
	},
	{
		name: "Charm Person",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 221 },
			{ name: "Basic Rules v2", page: 85 },
		],
	},
	{
		name: "Chill Touch",
		level: 0,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 221 },
		],
	},
	{
		name: "Chromatic Orb",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 221 },
		],
	},
	{
		name: "Circle of Death",
		level: 6,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 221 },
		],
	},
	{
		name: "Circle of Power",
		level: 5,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 221 },
		],
	},
	{
		name: "Clairvoyance",
		level: 3,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 222 },
		],
	},
	{
		name: "Clone",
		level: 8,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 222 },
		],
	},
	{
		name: "Cloud of Daggers",
		level: 2,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 222 },
		],
	},
	{
		name: "Cloudkill",
		level: 5,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 222 },
		],
	},
	{
		name: "Color Spray",
		level: 1,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 222 },
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
	},
	{
		name: "Commune with Nature",
		level: 5,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 224 },
		],
	},
	{
		name: "Compelled Duel",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 224 },
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
	},
	{
		name: "Compulsion",
		level: 4,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 224 },
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
	},
	{
		name: "Confusion",
		level: 4,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 224 },
		],
	},
	{
		name: "Conjure Animals",
		level: 3,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 225 },
		],
	},
	{
		name: "Conjure Barrage",
		level: 3,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 225 },
		],
	},
	{
		name: "Conjure Celestial",
		level: 7,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 225 },
		],
	},
	{
		name: "Conjure Elemental",
		level: 5,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 225 },
		],
	},
	{
		name: "Conjure Fey",
		level: 6,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 226 },
		],
	},
	{
		name: "Conjure Minor Elementals",
		level: 4,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 226 },
		],
	},
	{
		name: "Conjure Volley",
		level: 5,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 226 },
		],
	},
	{
		name: "Conjure Woodland Beings",
		level: 4,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 226 },
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
	},
	{
		name: "Contagion",
		level: 5,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 227 },
		],
	},
	{
		name: "Contingency",
		level: 6,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 227 },
		],
	},
	{
		name: "Continual Flame",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 227 },
		],
	},
	{
		name: "Control Water",
		level: 4,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 227 },
		],
	},
	{
		name: "Control Weather",
		level: 8,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 228 },
		],
	},
	{
		name: "Cordon of Arrows",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 228 },
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
	},
	{
		name: "Create Food and Water",
		level: 3,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 229 },
		],
	},
	{
		name: "Create Undead",
		level: 6,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 229 },
		],
	},
	{
		name: "Create or Destroy Water",
		level: 1,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 229 },
		],
	},
	{
		name: "Creation",
		level: 5,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 229 },
		],
	},
	{
		name: "Crown of Madness",
		level: 2,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 229 },
		],
	},
	{
		name: "Crusader's Mantle",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 230 },
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
	},
	{
		name: "Dancing Lights",
		level: 0,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 230 },
			{ name: "Basic Rules v2", page: 86 },
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
	},
	{
		name: "Darkvision",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 230 },
		],
	},
	{
		name: "Daylight",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 230 },
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
	},
	{
		name: "Delayed Blast Fireball",
		level: 7,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 230 },
			{ name: "Basic Rules v2", page: 87 },
		],
	},
	{
		name: "Demiplane",
		level: 8,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 231 },
		],
	},
	{
		name: "Destructive Smite",
		level: 5,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 231 },
		],
	},
	{
		name: "Detect Evil and Good",
		level: 1,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 231 },
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
	},
	{
		name: "Detect Poison and Disease",
		level: 1,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 231 },
		],
	},
	{
		name: "Detect Thoughts",
		level: 2,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 231 },
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
	},
	{
		name: "Disguise Self",
		level: 1,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 233 },
			{ name: "Basic Rules v2", page: 87 },
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
	},
	{
		name: "Dispel Evil and Good",
		level: 5,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 233 },
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
	},
	{
		name: "Dissonant Whispers",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 234 },
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
	},
	{
		name: "Divine Favor",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 234 },
		],
	},
	{
		name: "Divine Word",
		level: 7,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 234 },
		],
	},
	{
		name: "Dominate Beast",
		level: 4,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 234 },
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
	},
	{
		name: "Dominate Person",
		level: 5,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 235 },
			{ name: "Basic Rules v2", page: 88 },
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
	},
	{
		name: "Dream",
		level: 5,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 236 },
			{ name: "Basic Rules v2", page: 89 },
		],
	},
	{
		name: "Druidcraft",
		level: 0,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 236 },
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
	},
	{
		name: "Eldritch Blast",
		level: 0,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 237 },
		],
	},
	{
		name: "Elemental Weapon",
		level: 3,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 237 },
		],
	},
	{
		name: "Enhance Ability",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 237 },
		],
	},
	{
		name: "Enlarge/Reduce",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 237 },
		],
	},
	{
		name: "Ensnaring Strike",
		level: 1,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 237 },
		],
	},
	{
		name: "Entangle",
		level: 1,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 238 },
		],
	},
	{
		name: "Enthrall",
		level: 2,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 238 },
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
	},
	{
		name: "Evard's Black Tentacles",
		level: 4,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 238 },
		],
	},
	{
		name: "Expeditious Retreat",
		level: 1,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 238 },
		],
	},
	{
		name: "Eyebite",
		level: 6,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 238 },
		],
	},
	{
		name: "Fabricate",
		level: 4,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 239 },
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
	},
	{
		name: "False Life",
		level: 1,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 239 },
		],
	},
	{
		name: "Fear",
		level: 3,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 239 },
		],
	},
	{
		name: "Feather Fall",
		level: 1,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 239 },
		],
	},
	{
		name: "Feeblemind",
		level: 8,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 239 },
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
	},
	{
		name: "Find Familiar",
		level: 1,
		school: "Conjuration",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 240 },
		],
	},
	{
		name: "Find Steed",
		level: 2,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 240 },
		],
	},
	{
		name: "Find Traps",
		level: 2,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 241 },
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
	},
	{
		name: "Finger of Death",
		level: 7,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 241 },
			{ name: "Basic Rules v2", page: 90 },
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
	},
	{
		name: "Fire Shield",
		level: 4,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 242 },
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
	},
	{
		name: "Fireball",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 241 },
			{ name: "Basic Rules v2", page: 90 },
		],
	},
	{
		name: "Flame Blade",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 242 },
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
	},
	{
		name: "Flaming Sphere",
		level: 2,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 242 },
			{ name: "Basic Rules v2", page: 91 },
		],
	},
	{
		name: "Flesh to Stone",
		level: 6,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 243 },
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
	},
	{
		name: "Fog Cloud",
		level: 1,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 243 },
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
	},
	{
		name: "Forcecage",
		level: 7,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 243 },
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
	},
	{
		name: "Freedom of Movement",
		level: 4,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 244 },
			{ name: "Basic Rules v2", page: 91 },
		],
	},
	{
		name: "Friends",
		level: 0,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 244 },
		],
	},
	{
		name: "Gaseous Form",
		level: 3,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 244 },
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
	},
	{
		name: "Geas",
		level: 5,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 244 },
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
	},
	{
		name: "Giant Insect",
		level: 4,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 245 },
		],
	},
	{
		name: "Glibness",
		level: 8,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 245 },
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
	},
	{
		name: "Glyph of Warding",
		level: 3,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 245 },
		],
	},
	{
		name: "Goodberry",
		level: 1,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 246 },
		],
	},
	{
		name: "Grasping Vines",
		level: 4,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 246 },
		],
	},
	{
		name: "Grease",
		level: 1,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 246 },
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
	},
	{
		name: "Greater Restoration",
		level: 5,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 246 },
			{ name: "Basic Rules v2", page: 92 },
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
	},
	{
		name: "Guards and Wards",
		level: 6,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 248 },
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
	},
	{
		name: "Guiding Bolt",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 248 },
			{ name: "Basic Rules v2", page: 92 },
		],
	},
	{
		name: "Gust of Wind",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 248 },
		],
	},
	{
		name: "Hail of Thorns",
		level: 1,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 249 },
		],
	},
	{
		name: "Hallow",
		level: 5,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 249 },
		],
	},
	{
		name: "Hallucinatory Terrain",
		level: 4,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 249 },
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
	},
	{
		name: "Haste",
		level: 3,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 250 },
			{ name: "Basic Rules v2", page: 93 },
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
	},
	{
		name: "Healing Word",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 250 },
			{ name: "Basic Rules v2", page: 93 },
		],
	},
	{
		name: "Heat Metal",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 250 },
		],
	},
	{
		name: "Hellish Rebuke",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 250 },
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
	},
	{
		name: "Heroism",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 250 },
		],
	},
	{
		name: "Hex",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 251 },
		],
	},
	{
		name: "Hold Monster",
		level: 5,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 251 },
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
	},
	{
		name: "Holy Aura",
		level: 8,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 251 },
			{ name: "Basic Rules v2", page: 93 },
		],
	},
	{
		name: "Hunger of Hadar",
		level: 3,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 251 },
		],
	},
	{
		name: "Hunter's Mark",
		level: 1,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 251 },
		],
	},
	{
		name: "Hypnotic Pattern",
		level: 3,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 252 },
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
	},
	{
		name: "Illusory Script",
		level: 1,
		school: "Illusion",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 252 },
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
	},
	{
		name: "Incendiary Cloud",
		level: 8,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 253 },
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
	},
	{
		name: "Insect Plague",
		level: 5,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 254 },
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
	},
	{
		name: "Jump",
		level: 1,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 254 },
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
	},
	{
		name: "Legend Lore",
		level: 5,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 254 },
		],
	},
	{
		name: "Leomund's Secret Chest",
		level: 4,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 254 },
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
	},
	{
		name: "Lesser Restoration",
		level: 2,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 255 },
			{ name: "Basic Rules v2", page: 95 },
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
	},
	{
		name: "Light",
		level: 0,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 255 },
			{ name: "Basic Rules v2", page: 95 },
		],
	},
	{
		name: "Lightning Arrow",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 255 },
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
	},
	{
		name: "Locate Animals or Plants",
		level: 2,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 256 },
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
	},
	{
		name: "Locate Object",
		level: 2,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 256 },
		],
	},
	{
		name: "Longstrider",
		level: 1,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 256 },
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
	},
	{
		name: "Mage Hand",
		level: 0,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 256 },
		],
	},
	{
		name: "Magic Circle",
		level: 3,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 256 },
		],
	},
	{
		name: "Magic Jar",
		level: 6,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 257 },
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
	},
	{
		name: "Magic Mouth",
		level: 2,
		school: "Illusion",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 257 },
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
	},
	{
		name: "Major Image",
		level: 3,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 258 },
			{ name: "Basic Rules v2", page: 96 },
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
	},
	{
		name: "Mass Heal",
		level: 9,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 258 },
			{ name: "Basic Rules v2", page: 97 },
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
	},
	{
		name: "Mass Suggestion",
		level: 6,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 258 },
			{ name: "Basic Rules v2", page: 97 },
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
	},
	{
		name: "Meld into Stone",
		level: 3,
		school: "Transmuation",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 259 },
		],
	},
	{
		name: "Melf's Acid Arrow",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 259 },
		],
	},
	{
		name: "Mending",
		level: 0,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 259 },
		],
	},
	{
		name: "Message",
		level: 0,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 259 },
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
	},
	{
		name: "Mind Blank",
		level: 8,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 259 },
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
	},
	{
		name: "Mirage Arcane",
		level: 7,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 260 },
		],
	},
	{
		name: "Mirror Image",
		level: 2,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 260 },
		],
	},
	{
		name: "Mislead",
		level: 5,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 260 },
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
	},
	{
		name: "Modify Memory",
		level: 5,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 261 },
		],
	},
	{
		name: "Moonbeam",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 261 },
		],
	},
	{
		name: "Mordenkainen's Faithful Hound",
		level: 4,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 261 },
		],
	},
	{
		name: "Mordenkainen's Magnificent Mansion",
		level: 7,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 261 },
		],
	},
	{
		name: "Mordenkainen's Private Sanctum",
		level: 4,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 262 },
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
	},
	{
		name: "Move Earth",
		level: 6,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 263 },
		],
	},
	{
		name: "Nondetection",
		level: 3,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 263 },
		],
	},
	{
		name: "Nystul's Magic Aura",
		level: 2,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 263 },
		],
	},
	{
		name: "Otiluke's Freezing Sphere",
		level: 6,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 263 },
		],
	},
	{
		name: "Otiluke's Resilient Sphere",
		level: 4,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 264 },
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
	},
	{
		name: "Pass without Trace",
		level: 2,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 264 },
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
	},
	{
		name: "Phantasmal Force",
		level: 2,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 264 },
		],
	},
	{
		name: "Phantasmal Killer",
		level: 4,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 265 },
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
	},
	{
		name: "Planar Ally",
		level: 6,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 265 },
		],
	},
	{
		name: "Planar Binding",
		level: 5,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 265 },
		],
	},
	{
		name: "Plane Shift",
		level: 7,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 266 },
		],
	},
	{
		name: "Plant Growth",
		level: 3,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 266 },
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
	},
	{
		name: "Polymorph",
		level: 4,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 266 },
		],
	},
	{
		name: "Power Word Heal",
		level: 9,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 266 },
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
	},
	{
		name: "Power Word Stun",
		level: 8,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 267 },
			{ name: "Basic Rules v2", page: 98 },
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
	},
	{
		name: "Prestidigitation",
		level: 0,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 267 },
			{ name: "Basic Rules v2", page: 99 },
		],
	},
	{
		name: "Prismatic Spray",
		level: 7,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 267 },
		],
	},
	{
		name: "Prismatic Wall",
		level: 9,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 267 },
		],
	},
	{
		name: "Produce Flame",
		level: 0,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 269 },
		],
	},
	{
		name: "Programmed Illusion",
		level: 6,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 269 },
		],
	},
	{
		name: "Project Image",
		level: 7,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 270 },
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
	},
	{
		name: "Protection from Evil and Good",
		level: 1,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 270 },
		],
	},
	{
		name: "Protection from Poison",
		level: 2,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 270 },
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
	},
	{
		name: "Raise Dead",
		level: 5,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 270 },
			{ name: "Basic Rules v2", page: 99 },
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
	},
	{
		name: "Ray of Enfeeblement",
		level: 2,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 271 },
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
	},
	{
		name: "Ray of Sickness",
		level: 1,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 271 },
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
	},
	{
		name: "Reincarnate",
		level: 5,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 271 },
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
	},
	{
		name: "Resistance",
		level: 0,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 272 },
			{ name: "Basic Rules v2", page: 99 },
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
	},
	{
		name: "Reverse Gravity",
		level: 7,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 272 },
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
	},
	{
		name: "Rope Trick",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 272 },
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
	},
	{
		name: "Sanctuary",
		level: 1,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 272 },
			{ name: "Basic Rules v2", page: 100 },
		],
	},
	{
		name: "Scorching Ray",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 273 },
		],
	},
	{
		name: "Scrying",
		level: 5,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 273 },
		],
	},
	{
		name: "Searing Flame",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 274 },
		],
	},
	{
		name: "See Invisibility",
		level: 2,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 274 },
		],
	},
	{
		name: "Seeming",
		level: 5,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 274 },
		],
	},
	{
		name: "Sending",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 274 },
		],
	},
	{
		name: "Sequester",
		level: 7,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 274 },
		],
	},
	{
		name: "Shapechange",
		level: 9,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 274 },
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
	},
	{
		name: "Shield",
		level: 1,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 275 },
			{ name: "Basic Rules v2", page: 100 },
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
	},
	{
		name: "Shillelagh",
		level: 0,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 275 },
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
	},
	{
		name: "Silent Image",
		level: 1,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 276 },
			{ name: "Basic Rules v2", page: 101 },
		],
	},
	{
		name: "Simulacrum",
		level: 7,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 276 },
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
	},
	{
		name: "Sleet Storm",
		level: 3,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 276 },
		],
	},
	{
		name: "Slow",
		level: 3,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 277 },
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
	},
	{
		name: "Speak with Animals",
		level: 1,
		school: "Divination",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 277 },
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
	},
	{
		name: "Speak with Plants",
		level: 3,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 277 },
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
	},
	{
		name: "Spike Growth",
		level: 2,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 277 },
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
	},
	{
		name: "Spiritual Weapon",
		level: 2,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 278 },
			{ name: "Basic Rules v2", page: 102 },
		],
	},
	{
		name: "Staggering Smite",
		level: 4,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 278 },
		],
	},
	{
		name: "Stinking Cloud",
		level: 3,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 278 },
		],
	},
	{
		name: "Stone Shape",
		level: 4,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 278 },
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
	},
	{
		name: "Storm of Vengeance",
		level: 9,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 279 },
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
	},
	{
		name: "Sunbeam",
		level: 6,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 279 },
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
	},
	{
		name: "Swift Quiver",
		level: 5,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 279 },
		],
	},
	{
		name: "Symbol",
		level: 7,
		school: "Abjuration",
		sources: [
			{ name: "Player's Handbook", page: 280 },
		],
	},
	{
		name: "Tasha's Hideous Laughter",
		level: 1,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 280 },
		],
	},
	{
		name: "Telekinesis",
		level: 5,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 280 },
		],
	},
	{
		name: "Telepathy",
		level: 8,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 281 },
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
	},
	{
		name: "Teleportation Circle",
		level: 5,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 282 },
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
	},
	{
		name: "Thaumaturgy",
		level: 0,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 282 },
			{ name: "Basic Rules v2", page: 103 },
		],
	},
	{
		name: "Thorn Whip",
		level: 0,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 282 },
		],
	},
	{
		name: "Thunderous Smite",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 282 },
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
	},
	{
		name: "Time Stop",
		level: 9,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 283 },
			{ name: "Basic Rules v2", page: 104 },
		],
	},
	{
		name: "Tongues",
		level: 3,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 283 },
		],
	},
	{
		name: "Transport via Plants",
		level: 6,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 283 },
		],
	},
	{
		name: "Tree Stride",
		level: 5,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 283 },
		],
	},
	{
		name: "True Polymorph",
		level: 9,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 283 },
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
	},
	{
		name: "True Seeing",
		level: 6,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 284 },
			{ name: "Basic Rules v2", page: 104 },
		],
	},
	{
		name: "True Strike",
		level: 0,
		school: "Divination",
		sources: [
			{ name: "Player's Handbook", page: 284 },
		],
	},
	{
		name: "Tsunami",
		level: 8,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 284 },
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
	},
	{
		name: "Vampiric Touch",
		level: 3,
		school: "Necromancy",
		sources: [
			{ name: "Player's Handbook", page: 285 },
		],
	},
	{
		name: "Vicious Mockery",
		level: 0,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 285 },
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
	},
	{
		name: "Wall of Force",
		level: 5,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 285 },
		],
	},
	{
		name: "Wall of Ice",
		level: 6,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 285 },
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
	},
	{
		name: "Wall of Thorns",
		level: 6,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 287 },
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
	},
	{
		name: "Water Breathing",
		level: 3,
		school: "Transmuation",
		tags: ["Ritual"],
		sources: [
			{ name: "Player's Handbook", page: 287 },
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
	},
	{
		name: "Web",
		level: 2,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 287 },
			{ name: "Basic Rules v2", page: 105 },
		],
	},
	{
		name: "Weird",
		level: 9,
		school: "Illusion",
		sources: [
			{ name: "Player's Handbook", page: 288 },
		],
	},
	{
		name: "Wind Walk",
		level: 6,
		school: "Transmuation",
		sources: [
			{ name: "Player's Handbook", page: 288 },
		],
	},
	{
		name: "Wind Wall",
		level: 3,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 288 },
		],
	},
	{
		name: "Wish",
		level: 9,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 288 },
		],
	},
	{
		name: "Witch Bolt",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 289 },
		],
	},
	{
		name: "Word of Recall",
		level: 6,
		school: "Conjuration",
		sources: [
			{ name: "Player's Handbook", page: 289 },
		],
	},
	{
		name: "Wrathful Smite",
		level: 1,
		school: "Evocation",
		sources: [
			{ name: "Player's Handbook", page: 289 },
		],
	},
	{
		name: "Zone of Truth",
		level: 2,
		school: "Enchantment",
		sources: [
			{ name: "Player's Handbook", page: 289 },
		],
	},
];

for ( i = 0; i < spells.length; i++ ) {
	spellsByName[spells[i].name] = spells[i];
	spells[i].classes = [];
}

function register(name, spellList) {
	for ( var i = 0; i < spellList.length; i++ ) {
		spellsByName[spellList[i]].classes.push(name);
	}
}