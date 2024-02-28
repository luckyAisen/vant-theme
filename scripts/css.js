import fs from 'fs-extra';
import puppeteer from 'puppeteer';
import {
  VANT_WEBSITE,
  VANT_VERSION_LIST,
  VANT_PUBLIC_PATH,
  VANT_V4_BASE_VARIABLES,
  VANT_V3_BASE_VARIABLES,
  VANT_V2_BASE_VARIABLES
} from './constant.js';
import { logInfo, logSuccess } from './log.js';
import { pathResolve } from './utils.js';

export const createMobileVariables = async () => {
  logInfo(`create vant mobile variable start`);

  const help = async (version) => {
    const browser = await puppeteer.launch({});

    const page = await browser.newPage();

    await page.goto(`${VANT_WEBSITE}/${version}/mobile.html`, {
      waitUntil: 'networkidle2'
    });

    const menu = await page.evaluate(() => {
      const menu = [];
      const navs = document.querySelectorAll('.demo-home-nav');
      Array.from(navs).map((group) => {
        const items = group.querySelectorAll('a');
        Array.from(items).map((it) => {
          const el = it;
          const name = el.getAttribute('href').split('/').slice(-1)[0];
          menu.push(name);
        });
      });
      return menu;
    });

    const variable = {};

    if (version === 'v4') {
      Object.assign(variable, { basic: VANT_V4_BASE_VARIABLES });
    }

    if (version === 'v3') {
      Object.assign(variable, { basic: VANT_V3_BASE_VARIABLES });
    }

    if (version === 'v2') {
      Object.assign(variable, { basic: VANT_V2_BASE_VARIABLES });
    }

    for (let i = 0; i < menu.length; i++) {
      const comp = menu[i];
      await page.goto(`${VANT_WEBSITE}/${version}/#/zh-CN/${comp}`, {
        waitUntil: 'networkidle2'
      });
      await page.waitForTimeout(500);
      const css = await page.evaluate(() => {
        const obj = {};
        const el = document.querySelector('#yang-shi-bian-liang');
        if (el) {
          const group = el.parentElement.querySelector('tbody').querySelectorAll('tr');
          Array.from(group).forEach((item) => {
            const tds = item.querySelectorAll('td');
            const key = tds[0].innerText;
            const value = tds[1].innerText;
            obj[key] = value;
          });
        }
        return obj;
      });
      Object.assign(variable, { [comp]: css });
    }

    const file = pathResolve(`${VANT_PUBLIC_PATH}/${version}/variable/variable.json`);

    await fs.outputFile(file, JSON.stringify(variable));

    await browser.close();
  };

  for (let i = 0; i < VANT_VERSION_LIST.length; i++) {
    const v = VANT_VERSION_LIST[i];
    await help(v);
  }

  logSuccess(`create vant mobile variable success`);
};
