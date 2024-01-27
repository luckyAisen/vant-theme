import path from 'path';
import { spawn } from 'child_process';
import fs from 'fs-extra';
import { VANT_SOURCE, VANT_PUBLIC_PATH, VANT_MOBILE_PAGE } from './constant.js';

export const pathResolve = (dir) => path.resolve(dir);

export const runServe = () => {
  spawn('npx', ['vite'], { stdio: 'inherit', shell: true });
};

export const runBuild = () => {
  spawn('npx', ['run-p type-check "build-only {@}" --'], { stdio: 'inherit', shell: true });
};

export const runClean = async () => {
  await fs.remove(VANT_SOURCE);
  await fs.remove(VANT_PUBLIC_PATH);
  await fs.remove(VANT_MOBILE_PAGE);
};
