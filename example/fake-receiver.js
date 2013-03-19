(function () {
  'use strict';

  var EventEmitter = require('events').EventEmitter;
  var emitter = new EventEmitter();
  var Stream = require('stream');
  var stream = new Stream();
  stream.readable = true;
  stream.writable = true;
  stream.write = function (result) { console.log(result); };
  stream.end = function () { stream.writable = false; };
  stream.destroy = function () { stream.writable = false; };

  module.exports = stream;
})();