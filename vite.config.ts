import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import compressPlugin from 'vite-plugin-compression';

import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

import type { UserConfigExport, PluginOption } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build';

  const env = loadEnv(mode, process.cwd(), '');

  const config: UserConfigExport = {
    base: env.VITE_BASE_URL,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: '0.0.0.0'
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
          }
        ],
        dts: './types/auto-imports.d.ts'
      }),
      Components({
        resolvers: [NaiveUiResolver()],
        dts: './types/components.d.ts'
      })
    ],
    esbuild: {
      drop: isBuild ? ['console', 'debugger'] : []
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          v2: resolve(__dirname, 'mobile/v2.html'),
          v3: resolve(__dirname, 'mobile/v3.html'),
          v4: resolve(__dirname, 'mobile/v4.html')
        }
      }
    }
  };

  if (isBuild) {
    const compress = env.VITE_APP_BUILD_COMPRESS;

    const deleteOriginFile = env.VITE_APP_BUILD_COMPRESS_DELETE_ORIGIN_FILE;

    const compressList = compress.split(',');

    const plugins: PluginOption[] = [];

    if (compressList.includes('gzip')) {
      plugins.push(
        compressPlugin({
          ext: '.gz',
          deleteOriginFile: deleteOriginFile === 'true'
        })
      );
    }

    if (compressList.includes('brotli')) {
      plugins.push(
        compressPlugin({
          ext: '.br',
          algorithm: 'brotliCompress',
          deleteOriginFile: deleteOriginFile === 'true'
        })
      );
    }

    config.plugins?.push(...plugins);
  }

  return config;
});
