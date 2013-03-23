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
		root.specsSubscription = factory(root.jasmine, root.sinon, root.pubsub);
	}
}(this, function(jasmine, sinon, pubsub) {
	describe('subscription to events with the same callback', function() {

		var testSubscriber

		beforeEach(function() {
			testSubscriber = jasmine.createSpy()
		})

		it('should not throw an exception', function() {
			expect(function() {
				pubsub.sub('test-event-subscribe-1', testSubscriber)
				pubsub.sub('test-event-subscribe-1', testSubscriber)
			}).not.toThrow()
		})

		it('should not call a subscriber twice', function() {
			pubsub.sub('test-event-subscribe-2', testSubscriber)
			pubsub.sub('test-event-subscribe-2', testSubscriber)

			pubsub.pub('test-event-subscribe-2')

			expect(testSubscriber).toHaveBeenCalled()
			expect(testSubscriber.callCount).toBe(1)
		})
	})
}));
