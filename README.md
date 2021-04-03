## 关于vuex的问题

1. 如果不是在state中定义的数据，在mutationgs或者actions中途过程中加入的数据是没有进行双向绑定的。
 
   点击添加Cart，后点击修改Cart，发现最后一个对象，count没有变化，但vuex中的对象发生改变了。
   
   点击vue.devtools的commit按钮后数据更新。
   ![avatar](src/assets/fileImages/commit%20this%20Mutation.png)

>代码见 index.js（store/index.js） 和 see.vue

  