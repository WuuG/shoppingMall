
//会与默认配置合并
module.exports = {
  //进行别名的设置
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/componnets',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}


