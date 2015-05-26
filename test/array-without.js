var test = require('tape');
var without = require('../array-without');

test('without', function (t) {
  'use strict';

  t.plan(10);

  t.deepEqual(without(['a','b','c'], 'c'), ['a','b']);
  t.deepEqual(without(['a','b','c'], ['b','c']), ['a']);
  t.deepEqual(without(['a','b','c'], 'b','c'), ['a']);
  t.deepEqual(without(['a','b','c'], {}), ['a','b','c']);
  t.deepEqual(without(undefined, 'a'), []);
  t.deepEqual(without(null, 'a'), []);
  t.deepEqual(without([], 'a'), []);
  t.deepEqual(without(123, 'a'), []);
  t.deepEqual(without({}, 'a'), []);
  t.deepEqual(without([1]), [1]);
});
