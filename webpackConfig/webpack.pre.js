const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//多页面配置文件
const pages =  require("../pages.config")
const webpack =  require("webpack")
const {merge} = require('webpack-merge')
const base = require('./webpack.base')
const defineConf = {
  output: {
    　publicPath: './',
      filename: "bundle.[hash:6].js",
      path: path.resolve(__dirname, "../pre")
  },
}
module.exports = merge(defineConf,base)