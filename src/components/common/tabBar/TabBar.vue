<template>
  <div class="tab-bar">
    <slot><h2>这里是预留的插槽</h2></slot>
  </div>
</template>

<script>
//import标签 别名的使用
export default {};
</script>

<style scoped>
.tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0px 3px 11px rgba(1, 1, 1, 0.3);
}
</style>