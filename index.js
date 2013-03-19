#!/usr/bin/env node

(function () {

  'use strict';

  require('coffee-script');
  var argv = require('optimist').argv;
  var cwd = process.cwd();
  process.chdir(cwd);

  function req(name) {
    return 'require("' + cwd + '/' + name + '")';
  }

  var result = req(argv._.shift());
  argv._.forEach(function (arg) {
    result += '.pipe(' + req(arg) + ')';
  });

  eval(result);
})();