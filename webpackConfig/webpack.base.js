// 注意整个配置中我们使用 Node 内置的 path 模块，
// 并在它前面加上 __dirname这个全局变量。
// 可以防止不同操作系统之间的文件路径问题，并且可以使相对路径按照预期工作。
const path = require("path")
// CleanWebpackPlugin 每次打包前先清除dist文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//多页面配置文件
const {pages,entrys} =  require("../pages.config")
const webpack =  require("webpack")
module.exports = {
    entry: entrys,
    resolve: {
        extensions: [".ts",".tsx",".js",".css",".json"],
        alias: {
          '@': path.resolve(__dirname, "../src"),
          'src': path.resolve(__dirname, "../src"),
          'images': path.resolve(__dirname, '../src/images'),
          'components': path.resolve(__dirname, '../src/components')
      }
    },
    
    // 插件配置
    plugins: [...pages,new CleanWebpackPlugin()],

    module:{
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader',"css-loader"]
          },
          //解析.scss文件,对于用 import 或 require 引入的sass文件进行加载，以及<style lang="sass">...</style>声明的内部样式进行加载
          {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  esModule: false, // 不加的话会有这种情况 img属性src="[object Module]"
                  limit: 1024 * 100, // 当大于100kb时候，将文件打包到publicPath中 
                  outputPath: 'images', // 将文件打包到哪里
                  publicPath: 'images/',
                  name: '[name].[hash:8].[ext]'
                }
              }
            ]
          },

          
          // 资源压缩
          {
            test: /\.gz$/,
            enforce: 'pre',
            use: 'gzip-loader'
          },

          // 图片资源压缩
          {
            test: /.*\.(gif|png|jpe?g|svg)$/i,
            use:{
              loader:'image-webpack-loader',
              options:{
                bypassOnDebug:true
              }
            }
          },

          //开启懒加载
          {
            test: /\.bundle\.js$/,
            use: {
              loader:'bundle-loader', 
              options: {
                lazy: true
              }
            }
          },
          
            // 'awesome-typescript-loader' 配置ts loader
            {test:/\.tsx?$/,loader:"awesome-typescript-loader"},
            {enforce:"pre",test:/\.js$/,loader:"source-map-loader"},
             //开启资源按需加载
         
        ]
    }
}