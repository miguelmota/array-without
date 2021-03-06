var test = require('tape');
var without = require('../array-without');

test('without', function (t) {
  'use strict';

  t.plan(17);

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

  Array.prototype.without = without;

  t.deepEqual(['a','b','c'].without('c'), ['a','b']);
  t.deepEqual(['a','b','c'].without(['b','c']), ['a']);
  t.deepEqual(['a','b','c'].without('b','c'), ['a']);
  t.deepEqual(['a','b','c'].without({}), ['a','b','c']);
  t.deepEqual([].without('a'), []);
  t.deepEqual([1].without(), [1]);

  // make sure native array methods are still working
  t.deepEqual(['a','b','c'].slice(0), ['a','b','c']);

  delete Array.prototype.without;
});
