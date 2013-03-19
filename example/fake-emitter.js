(function () {
  'use strict';

  var EventEmitter = require('events').EventEmitter;
  var emitter = new EventEmitter();
  var Stream = require('stream');
  var stream = new Stream();
  stream.readable = true;
  require('read')({prompt: '↵ to run'}, function () {
    stream.emit('data', 'done');
  });

  module.exports = stream;
})();