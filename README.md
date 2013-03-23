pubsub.js
=========

JavaScript event publish/subscribe fun

Purpose
=======

Create a well-tested single-instance event publishing & subscription class.
It should work in AMD environments (require.js, curl.js) and also in non-AMD environments.
I've used the amdWeb template from https://github.com/umdjs/umd.

Testing
=======

Open SpecRunner-require.html or SpecRunner-basic.html to run the Jasmine tests.

License
=======
MIT.  See LICENSE file in project root.

Usage
=====

Include src/pubsub.js in your project.

To subscribe to an event, call:
pubsub.sub('event-name', callback)
  'event-name' should be a string
  callback should be a function.  When called, it will be passed one argument.

To publish an event, call:
pubsub.pub('event-name', data)
  'event-name' should be a string
  data should be an object to pass to all subscribers, e.g. {foo: 'bar'}

To unsubscribe from an event, call:
pubsub.unsub('event-name', callback)
  'event-name' should be a string
  callback should be a function.

