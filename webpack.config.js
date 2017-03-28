var Webpack = require('webpack');
var path = require("path");

var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'main.js');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

var config = {
   entry: './app/main.js',
	
   output: {
      path: '/',
      filename: 'index.js'
   },

   devServer: {
      inline: true,
      port: 8080,
      historyApiFallback: true,
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: [nodeModulesPath],
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react', 'stage-0'],
               plugins: ["transform-decorators-legacy"]
            }
         }
      ]
   },
}

module.exports = config;