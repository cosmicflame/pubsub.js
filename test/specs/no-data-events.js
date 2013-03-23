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
		root.specsNoDataEvents = factory(root.jasmine, root.sinon, root.pubsub);
	}
}(this, function(jasmine, sinon, pubsub) {
	describe('when an event with no data is published, pubsub', function() {
		var testSubscriber

		beforeEach(function() {
			testSubscriber = jasmine.createSpy()
		})

		it('should call subscribers with an empty object', function() {
			pubsub.sub('test-event-empty-1', testSubscriber)
			pubsub.pub('test-event-empty-1')
			expect(testSubscriber).toHaveBeenCalledWith({})
		})

		it('should not call subscribers with undefined', function() {
			pubsub.sub('test-event-empty-2', testSubscriber)
			pubsub.pub('test-event-empty-2')
			expect(testSubscriber).not.toHaveBeenCalledWith(undefined)
		})
	})
}));
