/* global Controllers */
"use strict";

var spelllistApp = angular.module("spelllist", ["ui.router"]);

spelllistApp.config(function ($stateProvider, $urlRouterProvider) {
	// Default
	$urlRouterProvider.otherwise("/list");

	// Main spell list
	$stateProvider.state("list", {
		url: "/list?level&school",
		templateUrl: "pages/list.html",
		controller: ["$scope", "$state", Controllers.list],
		resolve: {
			level: ['$stateParams', function ( $stateParams ) {
				var lvl = $stateParams.level,
					lvlMatch;
				if ( typeof lvl === "string" ) {
					lvlMatch = lvl.match(/^\d+$/);
					if (lvlMatch) {
						return parseInt(lvlMatch[0]);
					}
				}
				
				return undefined;
			}],
			school: ['$stateParams', function ( $stateParams ) {
				if (
					(typeof $stateParams.school === "string") &&
					$stateParams.school.match(/^(Abjuration|Conjuration|Divination|Enchantment|Evocation|Illusion|Necromancy|Transmuation)$/)
				) {
					return $stateParams.school;
				}

				return undefined;
			}],
		},
	});
	$stateProvider.state("list.class", {
		url: "/:className",
		templateUrl: "pages/list.html",
		controller: ["$scope", "$state", Controllers.list],
	});
	$stateProvider.state("list.class.subclass", {
		url: "/:subclassName?only",
		templateUrl: "pages/list.html",
		controller: ["$scope", "$state", Controllers.list],
	});
});

spelllistApp.filter("normalizedClass", function () {
	return function (input) {
		return input.replace(/(\w+):(.+)/, "$1 ($2)");
	};
});

spelllistApp.filter("cantrip", function () {
	return function (input) {
		if ( input.match(/Level 0/) === -1 ) {
			return input;
		}

		return input.replace(/Level 0 (Abjuration|Conjuration|Divination|Enchantment|Evocation|Illusion|Necromancy|Transmuation)/i, "$1 Cantrip");
	};
});

spelllistApp.filter("spellsFilter", function () {
	return function (input, spellFilters) {
		var out = [],
			className,
			subclassName,
			showClass = true,
			i;

		if ( spellFilters.selectedClass ) {
			className = spellFilters.selectedClass.name;

			if ( spellFilters.subclass ) {
				subclassName = className + ":" + spellFilters.subclass.name;
				showClass = !spellFilters.subclassOnly;
			}
		}

		for ( i = 0; i < input.length; i++ ) {
			// Filter based on level
			if ( (typeof spellFilters.level === "number") && (input[i].level !== spellFilters.level) ) {
				continue;
			}

			// Filter based on school
			if ( spellFilters.school && (input[i].school !== spellFilters.school) ) {
				continue;
			}

			if (
				!className ||
				( showClass && (input[i].classes.indexOf(className) !== -1) ) ||
				(subclassName && input[i].classes.indexOf(subclassName) !== -1)
			) {
				out.push(input[i]);
			}
		}

		return out.sort(function (a, b) {
			if ( a.level !== b.level ) {
				return (a.level > b.level) ? 1 : -1;
			} else {
				return (a.name > b.name) ? 1 : -1;
			}
		});
	};
});