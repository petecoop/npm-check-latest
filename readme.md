Check for latest npm dependencies.

## Usage

returns a [bluebird](https://github.com/petkaantonov/bluebird) promise of outdated packages

```javascript
var check = require('npm-check-latest');

var pkg = require('./package.json');

// pass in 
check(pkg.dependencies)
  .then(function (packages) {
    // returns array of packages e.g.
    packages = [{
      name: 'express',
      current: '~4.9.0',
      latest: '4.10.7'
    }, {
      name: 'glob',
      current: '^3.3.1',
      latest: '4.3.2'
    }];
  });

```