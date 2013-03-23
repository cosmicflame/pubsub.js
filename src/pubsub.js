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
	var PubSub = function() {

		var subscribers = {}

		this.pub = function(eventName, data) {
			if (subscribers.hasOwnProperty(eventName)) {
				subscribers[eventName].forEach(function(callback) {
					callback(data)
				})
			}
		}

		this.sub = function(event, callback) {
			if (typeof event === 'string' && typeof callback === 'function') {
				if (!subscribers.hasOwnProperty(event)) {
					subscribers[event] = []
				}
				subscribers[event].push(callback)
			}
		}
	}

	return new PubSub()
}));
