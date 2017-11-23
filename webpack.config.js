var webpack =require('webpack');

module.exports = {
  devtool:'source-map',
  entry: __dirname + "/App/app.js",
  output: {
    path: __dirname + "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: ".",
    historyApiFallback: true,
    inline: true,
    proxy:{
        '/api/*':{
            target:{
                host:"localhost",
                protocol:"http:",
                port:5000
            },
            changeOrigin: true,
            secure:false
        }
    }
  },
  module:{
      rules:[{
          test:/(\.jsx|\.js)$/,
          use:{
              loader:"babel-loader",
              options:{
                  presets:["es2015","react"]
              }
          },
          exclude:/node_modules/
      },{
          test:/\.css$/,
          use:[{
              loader:"style-loader"
          },{
              loader:"css-loader"
          }]
      }]
  },
  externals:{
      "react":"React",
      "react-dom":"ReactDOM"
  },
  plugins:[
      new webpack.ProvidePlugin({
          $:"jquery",
          jQuery:"jquery",
          "window.jQuery":"jquery"
      })
  ]
};
