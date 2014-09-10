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

	var lookupClass, lookupSubclass;

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

	$scope.spells = spells;
	$scope.classes = classes;

	$scope.updateState = function (clearSubclass) {
		var stateObj = {},
			destination = ["list"];

		if (clearSubclass) {
			delete $scope.spellFilters.subclass;
		}

		if ( $scope.spellFilters.selectedClass ) {
			stateObj.className = $scope.spellFilters.selectedClass.name.replace(/ /g, "_");
			destination.push("class");

			if ( $scope.spellFilters.subclass ) {
				stateObj.subclassName = $scope.spellFilters.subclass.name.replace(/ /g, "_");
				stateObj.only = $scope.spellFilters.subclassOnly;
				destination.push("subclass");
			}
		} else {
			delete $scope.spellFilters.subclass;
		}

		$state.go(destination.join("."), stateObj);
	};
};