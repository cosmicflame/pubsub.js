define([
	'pubsub'
	, 'jasmine'
], function(pubsub) {

	describe('pubsub basic functionality', function() {
		it('should be an object', function() {
			expect(typeof pubsub === 'object').toBe(true)
		})

		it('should have a function called pub', function() {
			expect(typeof pubsub.pub === 'function').toBe(true)
		})

		it('should have a function called sub', function() {
			expect(typeof pubsub.sub === 'function').toBe(true)
		})
	})
});
