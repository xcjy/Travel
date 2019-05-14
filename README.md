# Vue 2.5 开发移动端旅游网站
# 效果预览
![img](https://camo.githubusercontent.com/d594997980f2275288a9c89d313be4ea30f5d39e/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323930343631382d353031636132316366333633383930652e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970)

# 项目涉及到的技术栈

+ Vue : Vue  VueRouter VueX  Vue-cli3
+ 插件： vue-awesome-swiper  better-scroll  axios
+ css 预处理 : stylus
# 项目结构
## 首页
+ iconfont的引入与使用
+ 图片轮播组件vue-awesome-swiper的使用
+ axios 获取数据
+ 组件间的数据船体
## 城市选择页
+ 字母表布局
+ better-scroll
+ Vuex 实现数据共享 复杂关系组件的传值
+ LocalStorage 实现数据缓存
+ keep-alive 优化路由性能 只加载一次
## 详细页
+ banner布局
+ 动态路由配置
+ 公用画廊组件
+ 递归组件实现详细页
+ transition slot 插槽实现 animation 简单的动画效果



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
