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
		root.specsErrorHandling = factory(root.jasmine, root.sinon, root.pubsub);
	}
}(this, function(jasmine, sinon, pubsub) {
	describe('when passed bad input, pubsub', function() {
		var testSubscriber

		beforeEach(function() {
			testSubscriber = jasmine.createSpy()
		})

		it('should reject subscriptions to non-string events', function() {
			expect(function() {
				pubsub.sub(2, testSubscriber)
			}).toThrow()
			expect(function() {
				pubsub.sub({}, testSubscriber)
			}).toThrow()
			expect(function() {
				pubsub.sub([], testSubscriber)
			}).toThrow()
			expect(function() {
				var someFunction = function() {}
				pubsub.sub(someFunction, testSubscriber)
			}).toThrow()
		})

		it('should reject null, NaN & undefined for subscription', function() {
			expect(function() {
				pubsub.sub(null, testSubscriber)
			}).toThrow()
			expect(function() {
				pubsub.sub(undefined, testSubscriber)
			}).toThrow()
			expect(function() {
				pubsub.sub(NaN, testSubscriber)
			}).toThrow()
		})

		it('should reject subscriptions without callbacks events', function() {
			expect(function() {
				pubsub.sub('test-errorcond-1')
			}).toThrow()
		})

		it('should reject publishing events with non-string names', function() {
			expect(function() {
				pubsub.pub(2)
			}).toThrow()
			expect(function() {
				pubsub.pub({})
			}).toThrow()
			expect(function() {
				pubsub.pub([])
			}).toThrow()
			expect(function() {
				var someFunction = function() {}
				pubsub.pub(someFunction)
			}).toThrow()
		})

		it('should reject null, NaN & undefined for publishing', function() {
			expect(function() {
				pubsub.pub(null)
			}).toThrow()
			expect(function() {
				pubsub.pub(undefined)
			}).toThrow()
			expect(function() {
				pubsub.pub(NaN)
			}).toThrow()
		})

		it('should reject empty calls to sub()', function() {
			expect(function() {
				pubsub.sub()
			}).toThrow()
		})

		it('should reject empty calls to pub()', function() {
			expect(function() {
				pubsub.pub()
			}).toThrow()
		})
	})
}));
