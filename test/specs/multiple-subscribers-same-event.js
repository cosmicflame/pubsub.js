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
		root.specsMultipleSubscribersSameEvent = factory(root.jasmine, root.sinon, root.pubsub);
	}
}(this, function(jasmine, sinon, pubsub) {
	describe('when multiple subscribers subscribe to a single event, pubsub', function() {
		var testSubscriber1;
		var testSubscriber2;

		beforeEach(function() {
			testSubscriber1 = jasmine.createSpy()
			testSubscriber2 = jasmine.createSpy()
		})

		it('should add mutliple subscribers without error', function() {
			expect(function() {
				pubsub.sub('test-event', testSubscriber1)
				pubsub.sub('test-event', testSubscriber2)
			}).not.toThrow()
		})

		it('should call all the subscribers', function() {
			pubsub.sub('test-event-1', testSubscriber1)
			pubsub.sub('test-event-1', testSubscriber2)

			pubsub.pub('test-event-1', {})

			expect(testSubscriber1).toHaveBeenCalled()
			expect(testSubscriber2).toHaveBeenCalled()
		})

		it('should pass data to all the subscribers', function() {
			var data = {}
			pubsub.sub('test-event-2', testSubscriber1)
			pubsub.sub('test-event-2', testSubscriber2)

			pubsub.pub('test-event-2', data)

			expect(testSubscriber1).toHaveBeenCalledWith(data)
			expect(testSubscriber2).toHaveBeenCalledWith(data)
		})
	})
}));
