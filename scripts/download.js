import downloadGitRepo from 'download-git-repo';
import { VANT_GIT_REPO, VANT_SOURCE } from './constant.js';
import { logInfo, logSuccess, logFail, logStop } from './log.js';

export const downloadVantSource = async () => {
  return new Promise((resolve, reject) => {
    logInfo(`downloading vant gh pages source start`);
    downloadGitRepo(VANT_GIT_REPO, VANT_SOURCE, function (err) {
      if (err) {
        logFail('downloading vant gh pages source fail');
        logStop();
        reject();
      } else {
        logSuccess('downloading vant gh pages source success');
        resolve();
      }
    });
  });
};
