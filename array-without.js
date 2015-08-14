(function(root) {
  'use strict';

  /**
   * arrayWithout
   * @param {array} array - original array
   * @param {array} without - collection to omit
   * @example
   * arrayWithout(['a','b','c'], ['a','b','c']); // ['a']
   */
  function arrayWithout(a, w) {
    /*
     * Allows extension of prototype.
     * @example
     * Array.prototype.without = arrayWithout;
     * ['a','b','c'].without(['a','b','c']); // ['a']
     */
    if (Array.isArray(this)) {
      return arrayWithout.apply(null, [this].concat([].slice.call(arguments)));
    }

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
