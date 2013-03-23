require.config({
	baseUrl: './',

	paths: {
		//Test
		'jasmine': 'lib/jasmine-1.3.1/jasmine'
		, 'jasmine-html': 'lib/jasmine-1.3.1/jasmine-html'
		, 'sinon': 'lib/sinon/sinon-1.6.0'

		//App
		, 'pubsub': '../src/pubsub'
	},

	shim: {
		'jasmine-html': {
			deps: ['jasmine']
		},
		'jasmine': {
			exports: 'jasmine'
		},
		'sinon': {
			exports: 'sinon'
		}
	}
});
