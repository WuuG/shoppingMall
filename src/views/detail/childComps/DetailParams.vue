<template>
  <div class="params">
    <section class="params-rule">
      <div v-for="table in tables" :key="table.id" class="params-rule-table">
        <span v-for="item in table" :key="item.id">
          {{ item }}
        </span>
      </div>
    </section>
    <section class="params-info">
      <div v-for="item in set" :key="item.id" class="params-info-set">
        <span>{{ item.key }}</span>
        <span>{{ item.value }}</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    tables() {
      //这后端的数据处理也太傻逼了吧。
      if (this.itemParams.rule) {
        let tables = this.itemParams.rule.tables;
        if (tables.length > 1) {
          for (let i = 1; i < tables.length; i++) {
            for (let j in tables[i]) {
              tables[i][j].shift();
              tables[0][j] = tables[0][j].concat(tables[i][j]);
            }
          }
        }
        return tables[0];
      }
      return {};
      // return this.itemParams.rule ? this.itemParams.rule.tables : {};
    },
    set() {
      return this.itemParams.info ? this.itemParams.info.set : {};
    },
  },
};
</script>

<style lang="less" scoped>
.params {
  padding: 10px 20px;
  border-bottom: 5px solid #ececec;
  .params-rule {
    .params-rule-table {
      display: flex;
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #ececec;
      span {
        overflow: hidden;
        flex: 1;
      }
      span:nth-child(1) {
        flex: 3;
      }
    }
    .params-rule-table:last-child {
      border-width: 3px;
    }
  }
  .params-info {
    .params-info-set {
      padding: 5px 0;
      display: flex;
      border-bottom: 1px solid #ececec;
      align-items: center;
      span {
        flex: 1;
      }
      span:nth-child(2) {
        flex: 2;
        color: @high-text-color;
      }
    }
    .params-info-set:last-child {
      border-width: 0;
    }
  }
}
</style>