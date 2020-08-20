const path = require("path")
const merge = require("webpack-merge");
const preConf = require("./webpackConfig/webpack.pre");
const devConf = require("./webpackConfig/webpack.dev");
const proConf = require("./webpackConfig/webpack.pro");


//合并webpack配置
const webpackConf = (env, argv) => {
  const isPro = argv.mode === 'production'
  const isDev = argv.ENV === 'dev'
  if(isDev){
    return devConf
  }
  return  isPro? proConf :preConf
}
module.exports = webpackConf