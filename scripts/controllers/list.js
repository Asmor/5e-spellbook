/* global Controllers */
/* global classes */
/* global findClass */
/* global findSubclass */
/* global spells */
"use strict";

Controllers.list = function ($scope, $state) {
	window.scope = $scope;
	window.state = $state;
	$scope.spellFilters = {};

	var lookupClass, lookupSubclass, levelMatch;

	if ( $state.params.className ) {
		lookupClass = findClass($state.params.className);
		if (lookupClass) {
			$scope.spellFilters.selectedClass = lookupClass;
			if ( $state.params.subclassName ) {
				lookupSubclass = findSubclass( $scope.spellFilters.selectedClass, $state.params.subclassName );
				if (lookupSubclass) {
					$scope.spellFilters.subclass = lookupSubclass;
				}
			}
		}
	}

	if ( $state.params.level && typeof $state.params.level === "string" ) {
		levelMatch = $state.params.level.match(/^\d+$/);

		if (levelMatch) {
			$scope.spellFilters.level = parseInt(levelMatch[0]);
		}
	}

	$scope.spells = spells;
	$scope.classes = classes;

	$scope.updateState = function (clearSubclass) {
		var stateObj = {},
			destination = ["list"],
			f = $scope.spellFilters;

		if (clearSubclass) {
			delete f.subclass;
		}

		if ( f.selectedClass ) {
			stateObj.className = f.selectedClass.name.replace(/ /g, "_");
			destination.push("class");

			if ( f.subclass ) {
				stateObj.subclassName = f.subclass.name.replace(/ /g, "_");
				stateObj.only = f.subclassOnly;
				destination.push("subclass");
			}
		} else {
			delete f.subclass;
		}

		if ( typeof f.level === "number" ) {
			stateObj.level = f.level;
		}

		$state.go(destination.join("."), stateObj);
	};
};