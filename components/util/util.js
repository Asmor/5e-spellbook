"use strict";

angular.module("util", [])
.filter("sourceTitle", [function () {
	return function (source) {
		if ( !source ) { return ""; }

		var name = source.name || "";
		var collection = source.collection;

		if (collection) {
			return collection + " (" + name + ")";
		}

		return name;
	};
}])
.directive("sourceLink", [function () {
	return {
		scope: {
			source: "=",
		},
		templateUrl: "components/util/source-link.html",
	};
}])
;
