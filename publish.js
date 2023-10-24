const childProcess = require('child_process');
const {execSync} = require('child_process')


function runScript(scriptPath, callback) {

    // keep track of whether callback has been invoked to prevent multiple invocations
    var invoked = false;

    var process = childProcess.fork(scriptPath);

    // listen for errors as they may prevent the exit event from firing
    process.on('error', function (err) {
        if (invoked) return;
        invoked = true;
        callback(err);
    });

    // execute the callback once the process has finished running
    process.on('exit', function (code) {
        if (invoked) return;
        invoked = true;
        var err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });

}
console.log('now building')
execSync("npm run build", {stdio: 'inherit'})

 let scriptProcess = ['./scripts/delNodeOldRes.js', './scripts/copy2node.js', './scripts/push2node.js']
 let currentPoint = -1;

const runNext = () => {
    console.log('finish')
    currentPoint++
    if (currentPoint < scriptProcess.length) {
        runScript(scriptProcess[currentPoint], runNext)
    }
}

// runNext()