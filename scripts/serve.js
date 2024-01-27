import fs from 'fs-extra';
import { VANT_PUBLIC_PATH } from './constant.js';
import { pathResolve, runServe } from './utils.js';
import { downloadVantSource } from './download.js';
import {
  createMobilePublic,
  createMobilePage,
  createMobileAssets,
  replaceMobileAssets
} from './vant.js';
import { createMobileMenu } from './menu.js';
import { createMobileVariables } from './css.js';

const serve = async () => {
  const exists = await fs.pathExists(pathResolve(VANT_PUBLIC_PATH));
  if (!exists) {
    await downloadVantSource();
    await createMobilePublic();
    await createMobilePage();
    await createMobileAssets();
    await replaceMobileAssets();
    await createMobileMenu();
    await createMobileVariables();
  }
  runServe();
};

serve();
