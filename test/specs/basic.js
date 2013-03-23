; (function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([
			'jasmine'
			, 'sinon'
			, 'pubsub'
		], factory);
	} else {
		// Browser globals
		root.specsBasic = factory(root.jasmine, root.sinon, root.pubsub);
	}
}(this, function(jasmine, sinon, pubsub) {
	describe('the pubsub variable', function() {
		it('should be an object', function() {
			expect(typeof pubsub === 'object').toBe(true)
		})

		it('should have a function called pub', function() {
			expect(typeof pubsub.pub === 'function').toBe(true)
		})

		it('should have a function called sub', function() {
			expect(typeof pubsub.sub === 'function').toBe(true)
		})

		it('should have a function called unsub', function() {
			expect(typeof pubsub.unsub === 'function').toBe(true)
		})
	})
}));
