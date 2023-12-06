const path = require('path');
const {execSync} = require('child_process')

execSync("npm run build", {stdio: 'inherit',   cwd: path.resolve(__dirname, '../')})