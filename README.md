pubsub.js
=========

JavaScript event publishing/subscription fun

Purpose
=======

Create a well-tested single-instance event publishing & subscription class that works in AMD environments (require.js, curl.js) and also in non-AMD environments.  I've used the amdWeb template from https://github.com/umdjs/umd to help accomplish this.

Testing
=======

Open SpecRunner-require.html or SpecRunner-basic.html to run the Jasmine tests.

License
=======

Licensed under the MIT license.  See the LICENSE file in the project root.

Usage
=====

Include src/pubsub.js in your project, either by using an AMD loader or a `<script>` tag.

Subscription
------------
To subscribe to an event, call:
    pubsub.sub('event-name', callback)

- `'event-name'` should be a string
- `callback` should be a function.  When called, it will be passed one argument.

Publishing
----------
To publish an event, call:
    pubsub.pub('event-name', data)
- `'event-name'` should be a string
- `data` should be an object to pass to all subscribers, e.g. {foo: 'bar'}

Unsubscription
--------------
To unsubscribe from an event, call:
    pubsub.unsub('event-name', callback)
- `'event-name'` should be a string
- `callback` should be a function.

