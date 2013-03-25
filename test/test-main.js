//Load require.js config files
require([
	'require-test-config'
], function() {

	//Kick off Jasmine tests
	require([
		'jasmine'
		, 'jasmine-html'
	], function(jasmine) {

		var setupReporters = function (env) {
			env.updateInterval = 1000;
			//Add the HTML reporter
			var htmlReporter = new jasmine.HtmlReporter()
			env.addReporter(htmlReporter)
			env.specFilter = function(spec) {
				return htmlReporter.specFilter(spec)
			}
		}

		var jasmineEnv = jasmine.getEnv()
		setupReporters(jasmineEnv)

		require([
			'specs/basic'
			, 'specs/single-event'
			, 'specs/error-handling'
			, 'specs/no-data-events'
			, 'specs/multiple-subscribers-same-event'
			, 'specs/multiple-subscribers-different-events'
			, 'specs/unsubscription'
			, 'specs/subscription-idempotence'
		], function() {

			describe('AMD test setup', function() {
				it('should have require', function() {
					expect(typeof require).toBe("function")
				})
				it('should have define', function() {
					expect(typeof define).toBe("function")
				})
			})

			jasmineEnv.execute()
		})
	})
});
