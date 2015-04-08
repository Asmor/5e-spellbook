"use strict";

angular.module("spells", [])
.service("classService", ["$http", function ($http) {
	var classService = {
		classes: {},
		classesBySpell: {},
	};

	[
		"bard",
		"cleric",
		"druid",
		"paladin",
		"ranger",
		"sorcerer",
		"warlock",
		"wizard",
	].forEach(function (className) {
		$http.get("data/" + className + ".json").then(function (response) {
			registerClass(response.data);
			classService.classes[response.data.name] = response.data;
		});
	});

	return classService;

	function registerClass(data, baseName) {
		var name = data.name;

		if ( baseName ) {
			name = baseName + " (" + name + ")";
		}

		data.spells.forEach(function (spellName) {
			if ( classService.classesBySpell[spellName] ) {
				classService.classesBySpell[spellName].push(name);
				classService.classesBySpell[spellName].sort();
			} else {
				classService.classesBySpell[spellName] = [ name ];
			}
		});

		if ( data.subClasses ) {
			data.subClasses.forEach(function (subClass) {
				registerClass(subClass, name);
			});
		}
	}
}])
.service("spellService", ["$http", function ($http) {
	var spellService = {
		all: [],
		filters: {
			className: "",
			level: {
				min: 0,
				max: 9,
			},
			schools: {
				"Abjuration": true,
				"Conjuration": true,
				"Divination": true,
				"Enchantment": true,
				"Evovation": true,
				"Illusion": true,
				"Necromancy": true,
				"Transmutation": true,
			},
		},
	};

	$http.get("data/spells.json").then(function (response) {
		spellService.all = response.data;
	});

	return spellService;
}])
.directive("spellList", ["classService", "spellService", function (classService, spellService) {
	return {
		scope: {},
		templateUrl: "components/spells/spell-list.html",
		link: function (scope) {
			scope.spells = spellService;
			scope.sortType = "level";
			scope.sortReverse = false;
			scope.classService = classService;
			scope.setSortType = function setSortType(type) {
				if ( scope.sortType !== type ) {
					scope.sortReverse = false;
				} else {
					scope.sortReverse = !scope.sortReverse;
				}

				scope.sortType = type;
			};
		}
	};
}])
.directive("filters", ["classService", "spellService", function (classService, spellService) {
	return {
		scope: {},
		templateUrl: "components/spells/filters.html",
		link: function (scope) {
			scope.classService = classService;
			scope.spells = spellService;
			scope.showFilter = "class";

			scope.getClassFiltersTitle = getClassFiltersTitle;
			scope.getMetaFiltersTitle = getMetaFiltersTitle;
			scope.setSchoolExclusive = setSchoolExclusive;
			scope.setAllSchools = setAllSchools;
		},
	};

	function setAllSchools(val) {
		Object.keys(spellService.filters.schools).forEach(function (key) {
			spellService.filters.schools[key] = val;
		});
	}

	function setSchoolExclusive(school) {
		setAllSchools(false);
		spellService.filters.schools[school] = true;
	}

	function getClassFiltersTitle() {
		var parts = spellService.filters.className.split(":");

		parts[0] = parts[0] || "All";

		if ( parts[1] ) {
			parts[0] += " (" + parts[1] + ")";
		}

		return parts[0] + " spells";
	}

	function getMetaFiltersTitle() {
		var f = spellService.filters;
		var enabledFilters = [];
		var chosenSchools = _.invert(f.schools, true)['true'] || [];

		if ( (f.level.min > 0) || (f.level.max < 9) ) {
			if ( f.level.min === f.level.max ) {
				enabledFilters.push("Lvl " + f.level.min);
			} else if ( f.level.min === 0 ) {
				enabledFilters.push("Lvl <= " + f.level.max);
			} else if ( f.level.max === 9 ) {
				enabledFilters.push("Lvl >= " + f.level.min);
			} else {
				enabledFilters.push(["Lvl", f.level.min, "-", f.level.max].join(" "));
			}
		}

		if ( chosenSchools.length && (chosenSchools.length < Object.keys(f.schools).length) ) {
			if ( chosenSchools.length === 1 ) {
				enabledFilters.push(chosenSchools[0]);
			} else {
				enabledFilters.push(_.map(chosenSchools, function(s) { return s.substring(0, 2); }).join(", "));
			}
		}

		if ( !enabledFilters.length ) {
			enabledFilters.push("Spell filters");
		}

		return enabledFilters.join(" ");
	}
}])
.directive("filterBlock", [function () {
	return {
		scope: {
			title: "=",
			name: "@",
			filterProp: "=",
		},
		templateUrl:  "components/spells/filter-block.html",
		transclude: true,
	};
}])
.filter("conjugateSpellLevel", [function () {
	return function (school, level) {
		var prefix;
		switch (level) {
			case 0:
				return school + " Cantrip";
			case 1:
				prefix = "1st";
				break;
			case 2:
				prefix = "2nd";
				break;
			case 3:
				prefix = "3rd";
				break;
			default:
				prefix = level + "th";
		}

		return prefix + "-level " + school;
	};
}])
.filter("spellSort", [function () {
	var sortTypes = {
		name: ["name"],
		level: ["level", "name"],
		school: ["school", "level", "name"],
	};

	return function (list, sortType, reverse) {
		var copy, sortProperties = sortTypes[sortType];
		if ( ! sortProperties ) { return list; }

		copy = _.values(list);

		return copy.sort(function (a, b) {
			var sort = compareSeries(a, b, sortProperties);
			if ( reverse ) {
				return sort * -1;
			}

			return sort;
		});

	};

	function compare(s, t) {
		if ( s === t ) { return 0; }

		if ( s > t ) { return 1; }

		return -1;
	}

	function compareSeries(a, b, props) {
		var i, result;

		for ( i = 0; i < props.length; i++ ) {
			result = compare(a[props[i]], b[props[i]]);
			if (result) {
				return result;
			}
		}

		return 0;
	}
}])
.filter("spellFilter", ["classService", "spellService", function (classService, spellService) {
	return function (spells) {
		var out = [], i;

		for ( i = 0; i < spells.length; i++ ) {
			if ( checkFilters(spells[i]) ) {
				out.push(spells[i]);
			}

		}

		return out;
	};

	function checkFilters(spell) {
		var f = spellService.filters;
		var checkClasses = f.className.split(":");
		var i;

		if ( spell.level < f.level.min ) { return false; }
		if ( spell.level > f.level.max ) { return false; }
		if ( !f.schools[spell.school] ) { return false; }

		if ( checkClasses[1] ) {
			checkClasses[1] = checkClasses[0] + " (" + checkClasses[1] + ")";

			if ( f.domainOnly ) {
				// Remove base class from list of class names to check
				checkClasses.shift();
			}

		}

		if ( f.className ) {
			for ( i = 0; i < checkClasses.length; i++ ) {
				if ( classService.classesBySpell[spell.name].indexOf(checkClasses[i]) > -1 ) {
					return true;
				}
			}

			return false;
		}

		return true;
	}
}])
;