import { request } from './request'

export function getDetailDatas(iid) {
  return request({
    url: "detail?iid=" + iid,
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
  }
}