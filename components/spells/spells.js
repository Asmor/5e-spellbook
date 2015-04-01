"use strict";

angular.module("spells", [])
.service("classService", ["$http", function ($http) {
	var classService = {
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
	};

	$http.get("data/spells.json").then(function (response) {
		spellService.all = response.data;
	});

	return spellService;
}])
.directive("spellList", ["classService", "spellService", function (classService, spellService) {
	return {
		scope: {},
		templateUrl: "components/spells/spellList.html",
		link: function (scope) {
			scope.spells = spellService;
			scope.sortType = "school";
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
;