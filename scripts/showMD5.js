const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
var pkg = require('../../package.json');

let fileName =
  'flippin-detail-' + pkg.version + '-' + (pkg.buildId - 1) + '.zip';

const buffer = fs.readFileSync(path.join(__dirname, '../zip/' + fileName));
const hash = crypto.createHash('md5');
hash.update(buffer, 'utf8');
const md5 = hash.digest('hex');
console.log(fileName + ' md5 is ' + md5);
