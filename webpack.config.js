var Webpack = require('webpack');
var path = require("path");

var config = {
   entry: './app/app.js',
   output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react', 'stage-0'],
               plugins: ["transform-decorators-legacy"]
            }
         }
      ]
   },

   watch: true
}

module.exports = config;