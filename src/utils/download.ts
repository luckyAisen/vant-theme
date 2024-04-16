import jszip from 'jszip';
import { ThemeEnum, WorkspaceEnum } from '@/enums';
import { getAllCV } from './css';

import type { Theme } from '@/types';

/**
 * 下载主题
 * @param theme 主题信息
 * @returns
 */
export const download = (theme: Theme) => {
  const { id, name, version } = theme;

  const zip = new jszip();

  const cssVar = getAllCV()[id];

  zip.file(`${WorkspaceEnum.WORKSPACE_DOWNLOAD_INFO}`, JSON.stringify(theme));

  zip.file(`${WorkspaceEnum.WORKSPACE_DOWNLOAD_VAR}`, JSON.stringify(cssVar));

  if (version === ThemeEnum.VERSION_4) {
    const { light, dark } = cssVar;

    let cssCode = `/**  
zh-CN: 基础变量只能通过 root 选择器修改，不能通过 ConfigProvider 组件修改。https://vant-ui.github.io/vant/#/zh-CN/config-provider
en-US: The basic variables can only be modified through the root selector. https://vant-ui.github.io/vant/#/en-US/config-provider
*/`;

    cssCode += '\n';

    cssCode += `\n.van-theme-light {`;
    for (const k in light) {
      cssCode += `\n  ${k}: ${light[k]};`;
    }
    cssCode += '\n}';

    cssCode += '\n';

    cssCode += `\n.van-theme-dark {`;
    for (const k in dark) {
      cssCode += `\n  ${k}: ${dark[k]};`;
    }
    cssCode += '\n}';

    zip.file('variables.css', cssCode);
  }

  if (version === ThemeEnum.VERSION_3) {
    const config = cssVar.light;

    let cssCode = `/**  
zh-CN: 基础变量只能通过 root 选择器修改，不能通过 ConfigProvider 组件修改。https://vant-ui.github.io/vant/v3/#/zh-CN/config-provider
en-US: The basic variables can only be modified through the root selector. https://vant-ui.github.io/vant/v3/#/en-US/config-provider
*/`;

    cssCode += '\n';

    cssCode += `\n:root {`;

    for (const k in config) {
      cssCode += `\n  ${k}: ${config[k]};`;
    }

    cssCode += '\n}';

    zip.file('variables.css', cssCode);
  }

  if (version === ThemeEnum.VERSION_2) {
    const config = cssVar.light;

    let lessCode = '';

    for (const k in config) {
      lessCode += `${k}: ${config[k]};\n`;
    }

    const vueConfigJs = `
/**  
zh-CN: https://youzan.github.io/vant/v2/#/zh-CN/theme#ding-zhi-fang-fa
en-US: https://youzan.github.io/vant/v2/#/en-US/theme#how-to-custom-theme
*/;
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'hack': \`true; @import "variables.less";\`,
        },
      },
    },
  },
};`;

    zip.file('variables.less', lessCode);

    zip.file('vue.config.js', vueConfigJs);
  }

  return zip
    .generateAsync({
      type: 'blob'
    })
    .then(function (content) {
      const fileName = `${name}.zip`;
      const linkTag = document.createElement('a');
      linkTag.download = fileName;
      linkTag.style.display = 'none';
      linkTag.href = URL.createObjectURL(content);
      document.body.appendChild(linkTag);
      linkTag.click();
      document.body.removeChild(linkTag);
    });
};
