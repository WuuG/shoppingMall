const path = require("path");

//会与默认配置合并
module.exports = {
  //进行别名的设置
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
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


