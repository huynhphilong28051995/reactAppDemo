var path = require("path");

var config = {
   entry: './main.js',
	
   output: {
      path: '/',
      filename: 'index.js',
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
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react', 'stage-0'],
               plugins: ["transform-decorators-legacy"]
            }
         }
      ]
   }
   
}

module.exports = config;