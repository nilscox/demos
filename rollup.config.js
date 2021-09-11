import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

/**
 * @type {import('rollup').RollupOptions}
 */
const jsConfig = {
  input: 'src/App.tsx',
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
    del({
      targets: 'lib',
    }),
  ],
};

/**
 * @type {import('rollup').RollupOptions}
 */
const dtsConfig = {
  input: 'lib/dts/App.d.ts',
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
