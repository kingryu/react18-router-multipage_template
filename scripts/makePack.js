const path = require('path');
const fs = require('fs');
var zipper = require('zip-local');
var pkg = require('../../package.json');
let targetPath = path.resolve(__dirname, '../../build');
let zipPath = path.resolve(
  __dirname,
  '../zip/flippin-detail-' + pkg.version + '-' + (pkg.buildId - 1) + '.zip'
);

//将package.json  homepage改回去
pkg.homepage = 'static/v2';
fs.writeFileSync(
  path.resolve(__dirname, '../../package.json'),
  JSON.stringify(pkg, null, 2)
);

// zipping a file
zipper.zip(targetPath, function (error, zipped) {
  if (!error) {
    zipped.compress();
    zipped.save(zipPath, function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log(pkg.version + '-' + (pkg.buildId - 1) + '打包完成！');
      }
    });
  } else {
    console.log(error);
  }
});
