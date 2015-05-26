# array-without

> Creates an array with excluded values.

[![NPM](https://nodei.co/npm/array-without.png)](https://nodei.co/npm/array-without)

# Install

```bash
npm install array-without
```

```bash
bower install array-without
```

# Usage

```javascript
var without = require('array-without');

console.log(without(['a','b','c'], 'c')); // ['a','b']
console.log(without(['a','b','c'], ['b','c'])); // ['a']
console.log(without(['a','b','c'], 'b','c')); // ['a']
console.log(without(['a','b','c'], {})); // ['a','b','c']
```

# Test

```
npm test
```

# License

MIT
