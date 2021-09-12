import nodeResolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy-assets';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

/**
 * @type {import('rollup').RollupOptions}
 */
const jsConfig = {
  input: 'src/index.ts',

  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],

  plugins: [
    del({ targets: 'lib' }),
    nodeResolve(),
    peerDepsExternal(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          declarationDir: 'lib/dts',
          declaration: true,
        },
        exclude: ['src/**/*.spec.ts'],
      },
    }),
    copy({
      assets: ['src/styles.css'],
    }),
  ],
};

/**
 * @type {import('rollup').RollupOptions}
 */
const dtsConfig = {
  input: 'lib/dts/index.d.ts',

  output: [
    {
      file: 'lib/main.d.ts',
      format: 'es',
    },
  ],

  plugins: [
    dts(),
    del({
      targets: 'lib/dts',
      hook: 'buildEnd',
    }),
  ],
};

export default [jsConfig, dtsConfig];
