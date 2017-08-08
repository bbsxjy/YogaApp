var config = {
   entry: './Root.tsx',
   
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
   }
}

module.exports = config;