const path = require('path');
const git = require('simple-git/promise');
//git 提交
const GIT_REPOSITORY_ROOT = path.resolve(__dirname, '../../fen-game-platform/assets/');
console.log(
  '\n\x1B[36m update ' + GIT_REPOSITORY_ROOT + ' res and push git   \x1B[m'
);

const updateRes = async () => {
  const checksum = await git(__dirname).revparse(['--short', 'HEAD']);
  const simpleGit = git(GIT_REPOSITORY_ROOT);
  // 此处有问题：pull操作应该在cp前进行 否则可能失败
  await simpleGit.pull('origin', 'develop');
  await simpleGit.checkout('develop');
  await simpleGit.add(GIT_REPOSITORY_ROOT);
  const date = new Date();
  const mon = date.getMonth() + 1;
  const da = date.getDate();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  const nowdate = `${mon}-${da} ${h}:${m}:${s}`;
  await simpleGit.commit(`platform res -auto (${checksum}) ${nowdate}`);
  await simpleGit.push('origin', 'develop');
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
  console.log(
    '1 本操作会操作 \x1B[36m fen-game-platform \x1B[0m 项目 \x1B[31m develop \x1B[0m 分支，并进行   \x1B[30m \x1B[43mgit\x1B[0m 提交操作'
  );
  console.log('2 按任意键继续  \x1B[41mctrl+c\x1B[0m退出');
  await keypress();
  console.log('git add & git push操作中');
  try {
    await updateRes();
    console.log('操作成功 ' + String(new Date()));
  } catch (e) {
    console.log(e);
    process.exit();
  }
})().then(process.exit);
