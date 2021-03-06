/* eslint-disable */

const path = require('path');
const { EnvironmentPlugin, HotModuleReplacementPlugin, ProvidePlugin } = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { HOST = '0.0.0.0', PORT = '8000' } = process.env;

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  devtool: 'source-map',

  entry: './src/example/index.tsx',

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es6',
        },
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new EnvironmentPlugin(),
    new HtmlWebpackPlugin(),
  ],

  devServer: {
    host: HOST,
    port: Number(PORT),
    hot: true,
    historyApiFallback: true,
  },
};
