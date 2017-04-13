# vue-cqtoolbox

`vue-cqtoolbox` 是针对于topasm产品场景开发的一系列的pc端vue组件集。
包括的场景有：后台管理系统，CQASO，TOPASM操作复杂的PC网站。

```
[x] 1.水波纹 (Ripple)
[x] 2.按钮 (Button)
[x] 3.按钮组 (Button Group)
[x] 4.图标 (fontIcon)
[ ] 5.下拉框 (Select)
[ ] 6.日期选择器 (DateSelect)
[ ] 7.对话框 (Dialog)
[x] 8.输入框 (Input)
[ ] 9.组合输入框 (Input Group)
[x] 10.开关 (Switch)
[ ] 11.表单项 (FormItem)
[ ] 12.自动完成 (AutoComplete)
[x] 13.提示框 (Tooltip)
[ ] 14.徽章 (Badge)
[ ] 15.异步加载图片 (LazyImage)
[ ] 16.警告提醒 (Alert)
[x] 17.局部 (Section)      ps.带标题
[ ] 18.卡片 (Card)
[ ] 19.标签页 (Tabs)
[ ] 20.标签 (Tag)
[ ] 21.分页 (Pagination)
[ ] 22.表格 (Table)
[ ] 23.导航条 (Navbar)
[ ] 24.页脚 (footer)
[ ] 25.图表 (chart)
[ ] 26.维恩图 (Venn)
[ ] 27.加载动效 (Spinner)
[ ] 28.选择框 (单选框/多选框)
```


## 特性

- 它由[CSS Modules](https://github.com/css-modules/css-modules)提供动力，并与您的Webpack工作流程和谐融合。
- 它的样式由Postcss预处理。
- 所有模板使用jsx来写

### 为什么选用CSS Modules？

CSS Modules 对CSS中的class名都做了处理，使用对象来保存原class和混淆后的class的对应关系。

- 所有的样式都是局部化的，解决了命名冲突和全局污染的问题。
- class名的生成规则配置灵活，可以以此来压缩class名。
- 只引用组件的JavaScript，就可以搞定组件的javascript和CSS。

### 为什么使用jsx

JSX 是以 js 为中心，在 js 中嵌入 html，是对js的扩展。js是一门脚本语言，本身就是为处理逻辑而生的，在js中嵌入一部分html才是更合理的做法。

以js为中心，最明显的好处就是，可以更加精确和更加方便的控制输出，并且 JSX 相当于是基于DOM的一种模板引擎，所以输出的html更加的符合规范。

JSX 的最终是会转化为 js，试过将html模板编译为js模板的人就会知道，js模板是远远的比html效率高。首先是少了html模板的网络请求，其次是在执行的时候少了编译的过程，因为在生成js文件的时候就已经被编译好了，不会再客户端浪费资源去编译。

JSX 的最大的好处在于，对虚拟DOM的集成。在渲染的时候，在逻辑中就已经明确的整个应用的结构，这时在内存中存储一个DOM结构，在下次渲染的时候对比原本DOM，只渲染发生了变化的一部分。

## 参考项目

- [Material Design](http://material.google.com/)
- [antd](https://ant.design)
- [vue-material](http://vue-material.com/) [中文](http://vue-material.com/)
