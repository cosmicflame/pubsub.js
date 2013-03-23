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
		root.specsUnsubscription = factory(root.jasmine, root.sinon, root.pubsub);
	}
}(this, function(jasmine, sinon, pubsub) {
	describe('unsubscription from events', function() {

		var testSubscriber

		beforeEach(function() {
			testSubscriber = jasmine.createSpy()
		})

		it('should not throw an exception', function() {
			expect(function() {
				pubsub.sub('test-event-delete-1', testSubscriber)
				pubsub.unsub('test-event-delete-1', testSubscriber)

				pubsub.pub('test-event-delete-1')
			}).not.toThrow()
		})

		it('should not call a subscriber after unsubscription', function() {
			pubsub.sub('test-event-delete-2', testSubscriber)
			pubsub.unsub('test-event-delete-2', testSubscriber)

			pubsub.pub('test-event-delete-2')

			expect(testSubscriber).not.toHaveBeenCalled()
		})

		it('should be idempotent', function() {
			expect(function() {
				pubsub.sub('test-event-delete-3', testSubscriber)
				pubsub.unsub('test-event-delete-3', testSubscriber)
				pubsub.unsub('test-event-delete-3', testSubscriber)
			}).not.toThrow()
		})

		it('should be safe when you\'re not yet subscribed', function() {
			expect(function() {
				pubsub.unsub('test-event-delete-3', testSubscriber)
			}).not.toThrow()
		})
	})
}));
