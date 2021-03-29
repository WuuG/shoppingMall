<template>
  <div>
    <div class="item-info">
      <h3>
        {{ itemInfo.title }}
      </h3>
      <div class="price">
        <span>{{ itemInfo.price }}</span>
        <span>{{ itemInfo.oldPrice }}</span>
        <div :style="{ backgroundColor: itemInfo.bgColor }" class="discount">
          {{ itemInfo.discount }}
        </div>
      </div>
      <div class="sales">
        <span>{{ itemInfo.sales }}</span>
        <span>{{ itemInfo.collection }}</span>
        <span>{{ servicesExpress.name }}</span>
      </div>
      <div>
        <div>
          <span>
            {{ servicesExpressPrice.icon }}
            {{ servicesExpressPrice }}
          </span>
        </div>
        <span>{{ servicesExpressGlobal.name }}</span>
        <span>{{ servicesExpressNoreason.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: {},
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
      return this.itemInfo.services && this.itemInfo.services[3];
    },
    servicesExpressPrice() {
      return this.itemInfo.services && this.itemInfo.services[0];
    },
    servicesExpressGlobal() {
      return this.itemInfo.services && this.itemInfo.services[1];
    },
    servicesExpressNoreason() {
      return this.itemInfo.services && this.itemInfo.services[2];
    },
  },
};
</script>

<style lang="less" scoped>
.item-info {
  padding: 10px;
}
</style>