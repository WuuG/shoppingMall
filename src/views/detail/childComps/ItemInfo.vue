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
        <div>
          <img :src="servicesExpress.icon" alt="" />

          <span>{{ servicesExpress.name }}</span>
        </div>
      </div>
      <div>
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
      console.log(this.service);
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
}
</style>