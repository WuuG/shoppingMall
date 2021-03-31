<template>
  <div>
    <div class="item-info">
      <h3>
        {{ itemInfo.title }}
      </h3>
      <div class="price">
        <span class="item-new-price">{{ itemInfo.price }}</span>
        <span class="item-old-price">￥{{ itemInfo.oldPrice }}</span>
        <div :style="{ backgroundColor: itemInfo.bgColor }" class="discount">
          {{ itemInfo.discount }}
        </div>
      </div>
      <div class="sales">
        <span>{{ itemInfo.sales }}</span>
        <span>{{ itemInfo.collection }}</span>
        <div>
          <span>{{ servicesExpress.name }}</span>
        </div>
      </div>
      <div class="services">
        <div>
          <span>
            <img :src="servicesExpressPrice.icon" alt="" />
            {{ servicesExpressPrice.name }}
          </span>
        </div>
        <div>
          <span>
            <img :src="servicesExpressGlobal.icon" alt="" />
            {{ servicesExpressGlobal.name }}
          </span>
        </div>
        <div>
          <span>
            <img :src="servicesExpressNoreason.icon" alt="" />
            {{ servicesExpressNoreason.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: {},
      service: {
        name: "",
        icon: "",
      },
    };
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    servicesExpress() {
      return this.itemInfo.services
        ? this.itemInfo.services[this.itemInfo.services.length - 1]
        : this.service;
    },
    servicesExpressPrice() {
      return this.itemInfo.services ? this.itemInfo.services[0] : this.service;
    },
    servicesExpressGlobal() {
      return this.itemInfo.services ? this.itemInfo.services[1] : this.service;
    },
    servicesExpressNoreason() {
      return this.itemInfo.services ? this.itemInfo.services[2] : this.service;
    },
  },
};
</script>

<style lang="less" scoped>
.item-info {
  padding: 10px;
  border-bottom: 5px solid #ececec;
  img {
    width: 15px;
    height: 15px;
    vertical-align: text-top;
  }
  .price {
    display: flex;
    .item-new-price {
      font-size: 25px;
      color: #f26880;
    }
    .item-old-price {
      align-self: flex-end;
      font-size: 14px;
      text-decoration: line-through;
    }
    .discount {
      margin-bottom: 15px;
      padding: 0 5px;
      color: #fff;
      border-radius: 15px;
      align-self: center;
    }
  }
  .sales {
    display: flex;
    align-items: space-between;
    margin: 10px 0;
    span {
      flex: 1;
    }
    span:nth-child(2) {
      text-align: center;
    }
    div {
      text-align: right;
      flex: 1;
    }
  }
  .services {
    display: flex;
    height: 21px;
    div {
      flex: 1;
    }
    div:nth-child(2) {
      text-align: center;
    }
    div:nth-child(3) {
      text-align: right;
      overflow: hidden;
    }
  }
}
</style>