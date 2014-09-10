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

	$scope.changeClass = function () {
		if ($scope.spellFilters.selectedClass) {
			delete $scope.spellFilters.subclass;
			$state.go("list.class", {
				className: $scope.spellFilters.selectedClass.name.replace(/ /g, "_"),
			});
		}
	};

	$scope.changeSubclass = function () {
		if ($scope.spellFilters.subclass) {
			$state.go("list.class.subclass", {
				className: $scope.spellFilters.selectedClass.name.replace(/ /g, "_"),
				subclassName: $scope.spellFilters.subclass.name.replace(/ /g, "_"),
			});
		}
	};
};