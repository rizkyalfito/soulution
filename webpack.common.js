const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src/scripts/index.js'), 'bootstrap/dist/css/bootstrap.min.css'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),

    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.href.endsWith('./src/public/data/article-data.json'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'data-article',
          },
        },
        {
          urlPattern: ({ url }) => url.href.endsWith('./src/public/data/longTips-data.json'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'data-longTips',
          },
        },
        {
          urlPattern: ({ url }) => url.href.endsWith('./src/public/data/question.json'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'data-question',
          },
        },
        {
          urlPattern: ({ url }) => url.href.endsWith('./src/public/data/shortTips-data.json'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'data-shortTips',
          },
        },
        {
          urlPattern: ({ url }) => url.href.endsWith('/./src/public/data/team-data.json'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'data-team',
          },
        },
      ],
    }),

    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),

    new BundleAnalyzerPlugin(),
  ],
};
