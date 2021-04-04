const path = require("path");

//会与默认配置合并
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/shoppingMall/'
    : '/',
  //进行别名的设置
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'store': '@/store',
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/css/base.less'),]
    }
  }
}


