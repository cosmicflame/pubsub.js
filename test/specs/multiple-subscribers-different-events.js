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
		root.specsMultipleSubscribersDifferentEvents = factory(root.jasmine, root.sinon, root.pubsub);
	}
}(this, function(jasmine, sinon, pubsub) {
	describe('when multiple subscribers subscribe to different events, pubsub', function() {
		var testSubscriber1;
		var testSubscriber2;

		beforeEach(function() {
			testSubscriber1 = jasmine.createSpy()
			testSubscriber2 = jasmine.createSpy()
		})

		it('should add mutliple subscribers without error', function() {
			expect(function() {
				pubsub.sub('test-event-a', testSubscriber1)
				pubsub.sub('test-event-b', testSubscriber2)
			}).not.toThrow()
		})

		it('should call all the relevant subscribers', function() {
			pubsub.sub('test-event-a-1', testSubscriber1)
			pubsub.sub('test-event-b-1', testSubscriber2)

			pubsub.pub('test-event-a-1', {})

			expect(testSubscriber1).toHaveBeenCalled()
			expect(testSubscriber2).not.toHaveBeenCalled()
		})

		it('should pass data to all the relevant subscribers', function() {
			var data = {}
			pubsub.sub('test-event-a-2', testSubscriber1)
			pubsub.sub('test-event-b-2', testSubscriber2)

			pubsub.pub('test-event-a-2', data)

			expect(testSubscriber1).toHaveBeenCalledWith(data)
			expect(testSubscriber2).not.toHaveBeenCalled()
		})

		it('should handle longer sequences', function() {
			var data = {
				foo: 'bar'
			}
			pubsub.sub('test-event-a-3', testSubscriber1)
			pubsub.sub('test-event-b-3', testSubscriber2)

			pubsub.pub('test-event-c-2', data)

			expect(testSubscriber1).not.toHaveBeenCalled()
			expect(testSubscriber2).not.toHaveBeenCalled()

			pubsub.pub('test-event-a-3')

			expect(testSubscriber1).toHaveBeenCalledWith({})
			expect(testSubscriber2).not.toHaveBeenCalled()

			pubsub.pub('test-event-b-3', data)

			expect(testSubscriber2).toHaveBeenCalledWith(data)
		})
	})
}));
