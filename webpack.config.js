var webpack = require('webpack');
var config = {
   entry: './client/app.tsx',
   
   output: {
      path:__dirname + './',
      filename: 'index.js',
   },
   
   devServer: {
      inline: true,
      port: 8080
   },
   
   module: {
      loaders: [
         {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            "window.jQuery": "jquery",
            "moment": "moment"
        })
    ]
};

module.exports = config;