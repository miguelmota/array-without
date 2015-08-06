(function(root) {
  'use strict';

  function arrayWithout(a, w) {
    a = Array.isArray(a) ? a.slice(0) : [];
    w = flatten([].slice.call(arguments, 1));
    for (var i = 0; i < w.length; i++) {
      var j = a.indexOf(w[i]);
      if (j > -1) {
        a.splice(j,1);
      }
    }
    return a;
  }

  function flatten(a) {
    return Array.isArray(a) ? [].concat.apply([], a.map(flatten)) : [a];
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = arrayWithout;
    }
    exports.arrayWithout = arrayWithout;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return arrayWithout;
    });
  } else {
    root.arrayWithout = arrayWithout;
  }

})(this);
