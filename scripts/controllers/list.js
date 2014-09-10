Controllers.list = function ($scope, $state) {
	window.scope = $scope;
	window.state = $state;
	$scope.spellFilters = {};

	var lookupClass, lookupSubclass

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
			$state.go("list.class", {
				className: $scope.spellFilters.selectedClass.name,
			});
		}
	}
	$scope.changeSubclass = function () {
		if ($scope.spellFilters.subclass) {
			$state.go("list.class.subclass", {
				className: $scope.spellFilters.selectedClass.name,
				subclassName: $scope.spellFilters.subclass.name,
			});
		}
	}
};