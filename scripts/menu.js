import fs from 'fs-extra';
import puppeteer from 'puppeteer';
import { VANT_WEBSITE, VANT_VERSION_LIST, VANT_PUBLIC_PATH } from './constant.js';
import { logInfo, logSuccess } from './log.js';
import { pathResolve } from './utils.js';

export const createMobileMenu = async () => {
  logInfo(`create vant mobile menu start`);

  const help = async (version, language) => {
    const browser = await puppeteer.launch({});

    const page = await browser.newPage();

    await page.goto(`${VANT_WEBSITE}/${version}/mobile.html#/${language}`, {
      waitUntil: 'networkidle2'
    });

    const menu = await page.evaluate(() => {
      const menu = [];
      const navs = document.querySelectorAll('.demo-home-nav');
      Array.from(navs).map((group) => {
        const item = {};
        // item.type = "group";
        item.label = group.querySelector('.demo-home-nav__title').innerText;
        item.value = group.querySelector('.demo-home-nav__title').innerText;
        item.children = [];

        const items = group.querySelectorAll('a');
        Array.from(items).map((it) => {
          const el = it;
          const navItem = {};
          navItem.label = el.innerText;
          navItem.value = el.getAttribute('href').split('/').slice(-1)[0];
          item.children.push(navItem);
        });

        menu.push(item);
      });
      return menu;
    });

    const file = pathResolve(`${VANT_PUBLIC_PATH}/${version}/menu/${language}.json`);

    await fs.outputFile(file, JSON.stringify(menu));

    await browser.close();
  };

  for (let i = 0; i < VANT_VERSION_LIST.length; i++) {
    const v = VANT_VERSION_LIST[i];
    await help(v, 'zh-CN');
    await help(v, 'en-US');
  }

  logSuccess(`create vant mobile menu success`);
};
