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

	var level = $state.params.level,
		school = $state.params.school,
		className = $state.params.className,
		subclassName = $state.params.subclassName,
		only = $state.params.only,
		lookupClass, lookupSubclass;

	if ( className ) {
		lookupClass = findClass(className);
		if (lookupClass) {
			$scope.spellFilters.selectedClass = lookupClass;
			if ( subclassName ) {
				lookupSubclass = findSubclass( $scope.spellFilters.selectedClass, subclassName );
				if (lookupSubclass) {
					$scope.spellFilters.subclass = lookupSubclass;
				}
			}
		}
	}

	if (typeof level !== "undefined") {
		$scope.spellFilters.level = level;
	}

	if (typeof school !== "undefined") {
		$scope.spellFilters.school = school;
	}

	$scope.spellFilters.subclassOnly = !!only;

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
		} else {
			stateObj.level = "";
			delete f.level;
		}

		if ( f.school ) {
			stateObj.school = f.school;
		}

		$state.go(destination.join("."), stateObj);
	};
};