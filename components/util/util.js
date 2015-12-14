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
.factory("storage", [function () {
	var storage = {
		get: function (key, callback) {
			var data;
			var raw = localStorage[key];

			if (raw) {
				try {
					data = JSON.parse(localStorage[key]);
				} catch (ex) {
					console.warn("Unable to parse stored value for " + key);
					data = undefined;
				}
			}

			callback(data);
		},
		set: function (key, data) {
			localStorage[key] = JSON.stringify(data);
		},
	};

	return storage;
}])
;
