const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

const pages = ['index', 'about', 'contact', 'careers', 'agriculture', 'pharmaceuticals', 'animal-nutrition', 'meat-and-poultry'];

const config = {
  entry: pages.reduce((config, page) => {
    config[page] = `./js/${page}.js`;
    return config;
  }, {}),
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'img/[name][ext][query]',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { url: false } }, 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  stats: 'errors-only',
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './img', to: './img' }],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./pages/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    )
  ),
};

module.exports = config;
