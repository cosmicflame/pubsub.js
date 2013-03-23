// Pattern from https://github.com/umdjs/umd - amdWeb.js

; (function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else {
		// Browser globals
		root.pubsub = factory();
	}
}(this, function () {
	return {

		pub : function() {},

		sub : function() {}

	};
}));
