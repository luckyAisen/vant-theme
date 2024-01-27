import { runBuild, runClean } from './utils.js';
import { downloadVantSource } from './download.js';
import {
  createMobilePublic,
  createMobilePage,
  createMobileAssets,
  replaceMobileAssets
} from './vant.js';
import { createMobileMenu } from './menu.js';
import { createMobileVariables } from './css.js';

const build = async () => {
  await runClean();
  await downloadVantSource();
  await createMobilePublic();
  await createMobilePage();
  await createMobileAssets();
  await replaceMobileAssets();
  await createMobileMenu();
  await createMobileVariables();
  runBuild();
};

build();
