const fs = require('fs');
const source = require('./text.json');
console.log('start covert text.json')
let newJson = {};
source.forEach((item) => {
  newJson[item.Key] = item.Desc;
});

fs.writeFileSync(
  './en-US/' + 'page.js',
  '/* eslint-disable import/no-anonymous-default-export */\nexport default ' + JSON.stringify(newJson, null, 2) + ';'
);
console.log('export page.js suc')