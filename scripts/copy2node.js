const fse = require('fs-extra');
const path = require('path');
const pkg = require('../package.json');
let target = path.resolve(__dirname, '../../fen-game-platform/assets/' + pkg.homepage);

let source = path.resolve(__dirname, '../build');
console.log('\n\x1B[36m copy res to node project  \x1B[m');
console.log('copy', source, target);
fse.copy(source, target, function (err) {
  if (err) return console.error(err);
});
