const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const ENV = process.env.npm_lifecycle_event;
const isProd = ENV === 'build';

const HOST = 'localhost';
const PORT = 3000;

module.exports = (function makeWebpackConfig() {
  const config = {
    stats: 'minimal',
    mode: isProd ? 'production' : 'development',
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: isProd ? '/' : `http://${HOST}:${PORT}/`,
      filename: isProd ? 'assets/js/[name].[fullhash].js' : 'assets/js/[name].bundle.js',
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
        {
             test: /\.(png|jpg)$/,
             use:[{loader: 'url-loader?limit=8192'}]
        },
        {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isProd ? '[hash:base64]' : '[path][name]__[local]',
                mode: (path) => (/highlight.css|main.css/i.test(path)) ? 'global' : 'local',
              },
            },
          },
          'postcss-loader',
        ],
      }],
    },
  };

  config.plugins = [];

  config.plugins.push(
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? 'assets/css/[name].[fullhash].css' : 'assets/css/[name].css',
      chunkFilename: isProd ? 'assets/css/[id].[fullhash].css' : 'assets/css/[id].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  );

  config.resolve = {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Services: path.resolve(__dirname, 'src/services/'),
      Data: path.resolve(__dirname, 'src/data/'),
      Views: path.resolve(__dirname, 'src/views/'),
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.js', '.jsx'],
  };

  config.devServer = {
    port: PORT,
    host: HOST,
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    stats: 'minimal',
    progress: true,
    historyApiFallback: {
      index: '/',
    },
  };

  return config;
}());
