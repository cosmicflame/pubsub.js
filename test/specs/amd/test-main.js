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

		var specs = [
			'specs/amd/basic'
		]
		require(specs, function() {
			jasmineEnv.execute()
		})
	})
});
