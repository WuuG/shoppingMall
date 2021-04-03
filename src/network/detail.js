import { request } from './request'

export function getDetailDatas(iid) {
  return request({
    url: "detail?iid=" + iid,
  })
}

export function getRecommend() {
  return request({
    url: 'recommend'
  })
}
export class itemInfo {
  constructor(item, columns, shopInfo) {
    this.title = item.title;
    this.oldPrice = item.lowPrice;
    this.price = item.price;
    this.discount = item.discountDesc;
    this.bgColor = item.discountBgColor;
    this.sales = columns[0];
    this.collection = columns[1];
    this.services = shopInfo.services;
    this.desc = item.desc;
  }
}
export class shopInfo {
  constructor(shopInfo) {
    this.name = shopInfo.name;
    //保留小数，也可以用Math.floor再除，  或者正则匹配
    this.totalSales = (shopInfo.cSells / 10000).toFixed(1); //保留一位小数
    this.totalGoods = shopInfo.cGoods;
    this.allGoodsUrl = shopInfo.allGoodsUrl;
    this.score = shopInfo.score;
    this.shopLogo = shopInfo.shopLogo;
    this.shopUrl = shopInfo.shopUrl;
    this.shopId = shopInfo.shopId;
  }
}
export class detailCartInfo {
  constructor(itemInfo) {
    this.iid = itemInfo.iid;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.desc = itemInfo.desc;
    this.title = itemInfo.title;
    this.image = itemInfo.topImages[0];
    this.count = 0;
    this.select = 0;
  }
}