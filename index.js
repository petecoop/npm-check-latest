var Promise = require('bluebird'),
  npm = require('npm');

npm.load();

module.exports = function (packages) {

  return new Promise(function (fulfill, reject) {

    var packageArray = toArray(packages);

    getLatestVersions(packageArray)
      .filter(function (pkg) {
        return pkg.current.indexOf(pkg.latest) === -1;
      })
      .then(function (packages) {
        fulfill(packages);
      });

  });

};

function toArray (packages) {
  var packageArray = [];
  for(var p in packages){
    packageArray.push({
      name: p,
      current: packages[p]
    });
  }
  return packageArray;
}

function getLatestVersions (packages) {

  return Promise.map(packages, function (pkg) {
    return getLatestVersion(pkg)
      .then(function (latest) {
        pkg.latest = latest;
        return pkg;
      });
  });

}

function getLatestVersion (pkg) {

  return new Promise(function (fulfill, reject) {
    npm.commands.view([pkg.name, 'dist-tags.latest'], true, function (err, res) {
      if(err) return reject(err);
      var latest = Object.keys(res)[0];
      return fulfill(latest);
    });
  });

}