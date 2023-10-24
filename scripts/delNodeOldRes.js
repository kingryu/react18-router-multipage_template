var fs = require('fs');
const path = require('path');
const pkg = require('../package.json');
const git = require('simple-git/promise');

function deleteTarget(fileUrl, lv) {
  // 如果当前url不存在，则退出
  if (!fs.existsSync(fileUrl)) return;
  // 当前文件为文件夹时
  if (fs.statSync(fileUrl).isDirectory()) {
    let files = fs.readdirSync(fileUrl);
    let len = files.length,
      removeNumber = 0;
    if (len > 0) {
      files.forEach(function (file) {
        removeNumber++;
        let url = fileUrl + '/' + file;
        if (fs.statSync(url).isDirectory()) {
          deleteTarget(url, lv + 1);
        } else {
          fs.unlinkSync(url);
          console.log('删除文件' + url + '成功');
        }
      });
      if (removeNumber === len) {
        // 删除当前文件夹下的所有文件后，删除当前空文件夹（注：所有的都采用同步删除）
        if (lv > 0) {
          fs.rmdirSync(fileUrl);
        }
        console.log('删除文件夹' + fileUrl + '成功');
      }
    } else {
      if (lv > 0) {
        fs.rmdirSync(fileUrl);
      }
    }
  } else {
    // 当前文件为文件时
    fs.unlinkSync(fileUrl);
    console.log('删除文件' + fileUrl + '成功');
  }
}

let target = path.resolve(__dirname, '../../fen-game-platform/assets/' + pkg.homepage);
//git pull
const GIT_REPOSITORY_ROOT = path.resolve(__dirname, '../../fen-game-platform/assets/');
console.log(
  '\n\x1B[36m update ' + GIT_REPOSITORY_ROOT + ' res and push git   \x1B[m'
);

const updateRes = async () => {
  const simpleGit = git(GIT_REPOSITORY_ROOT);
  // 此处有问题：pull操作应该在cp前进行 否则可能失败
  await simpleGit.pull('origin', 'develop');
  await simpleGit.checkout('develop');
};

const keypress = async () => {
  process.stdin.setRawMode(true);
  return new Promise((resolve) =>
    process.stdin.once('data', (data) => {
      const byteArray = [...data];
      if (byteArray.length > 0 && byteArray[0] === 3) {
        console.log('^C');
        process.exit(1);
      }
      process.stdin.setRawMode(false);
      resolve();
    })
  );
};

(async () => {
  console.log('本操作会操作 ../fen-game-platform 项目 develop 分支，并git pull操作');
  console.log(' 按任意键继续  ctrl+c退出');
  await keypress();
  console.log('git pull操作中');
  try {
    await updateRes();
    console.log('操作成功');
    deleteTarget(target, 0);
  } catch (e) {
    console.log(e);
    process.exit();
  }
})().then(process.exit);
