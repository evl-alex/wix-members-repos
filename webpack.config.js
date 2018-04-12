const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
   template: __dirname + '/src/index.html',
   filename: 'index.html',
   inject: 'body'
});

module.exports = {
   entry: ['./src/index.js'],
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'build.js'
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            include: [path.resolve(__dirname, 'src')],
            exclude: [path.resolve(__dirname, 'node_modules')],
            loader: 'babel-loader'
         },
         {  test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
         }
      ]
   },
   plugins: [HTMLWebpackPluginConfig],
   devServer: {
      port: 9000
   }
};