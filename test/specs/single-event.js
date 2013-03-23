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
		root.specsSingleEvent = factory(root.jasmine, root.sinon, root.pubsub);
	}
}(this, function(jasmine, sinon, pubsub) {
	describe('subscribing to and publishing a single event', function() {
		var testSubscriber;

		beforeEach(function() {
			testSubscriber = jasmine.createSpy()
		})

		it('should add a subscriber without error', function() {
			expect(function() {
				pubsub.sub('test-event', testSubscriber)
			}).not.toThrow()
		})

		it('should call the subscriber', function() {
			pubsub.sub('test-event-1', testSubscriber)
			pubsub.pub('test-event-1', {})
			expect(testSubscriber).toHaveBeenCalled()
		})

		it('should pass data to the subscriber', function() {
			var data = {}
			pubsub.sub('test-event-2', testSubscriber)
			pubsub.pub('test-event-2', data)
			expect(testSubscriber).toHaveBeenCalledWith(data)
		})
	})
}));
