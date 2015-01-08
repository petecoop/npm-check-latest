Check for latest npm dependencies.

## Usage

returns a [bluebird](https://github.com/petkaantonov/bluebird) promise of outdated packages

```javascript
var check = require('npm-check-latest');

var dependencies = require('./package.json');

// pass in 
check(dependencies)
  .then(function (packages) {
    // returns array of packages e.g.
    packages = [{
      name: 'express',
      current: '~4.10.6',
      latest: '4.10.7'
    }, {
      name: 'glob',
      current: '~4.3.1',
      latest: '4.3.2'
    }];
  });

```