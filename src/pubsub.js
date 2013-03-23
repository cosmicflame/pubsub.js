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

		/**
		 * Publish an event.
		 * @param eventName  The string name of the event.
		 * @param data  Data object to pass to subscribers.  Can be undefined.
		 */
		this.pub = function(eventName, data) {
			if (eventName && typeof eventName === 'string') {
				data = data || {}
				if (subscribers.hasOwnProperty(eventName)) {
					subscribers[eventName].forEach(function(callback) {
						callback(data)
					})
				}
			} else {
				throw new Error('pubsub.pub requires a string and an optional function')
			}
		}

		this.sub = function(event, callback) {
			if (event
				&& callback
				&& typeof event === 'string'
				&& typeof callback === 'function')
			{
				if (!subscribers.hasOwnProperty(event)) {
					subscribers[event] = []
				}
				subscribers[event].push(callback)
			} else {
				throw new Error('pubsub.sub requires a string and a function')
			}
		}
	}

	return new PubSub()
}));
