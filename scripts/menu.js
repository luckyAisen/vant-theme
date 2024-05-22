import fs from 'fs-extra';
import puppeteer from 'puppeteer';
import { VANT_WEBSITE, VANT_VERSION_LIST, VANT_PUBLIC_PATH } from './constant.js';
import { logInfo, logSuccess } from './log.js';
import { pathResolve } from './utils.js';

export const createMobileMenu = async () => {
  logInfo(`create vant mobile menu start`);

  const help = async (version, language) => {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    await page.goto(`${VANT_WEBSITE}/${version}/mobile.html#/${language}`, {
      waitUntil: 'networkidle2'
    });

    const menu = await page.evaluate((language) => {
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
      if (language === 'zh-CN') {
        menu.unshift({
          label: '基础样式',
          value: 'basic',
          children: [
            {
              label: '基础样式',
              value: 'basic'
            }
          ]
        });
      }
      if (language === 'en-US') {
        menu.unshift({
          label: 'Basic Style',
          value: 'basic',
          children: [
            {
              label: 'Basic Style',
              value: 'basic'
            }
          ]
        });
      }
      return menu;
    }, language);

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
