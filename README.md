# react-redux-demo
脚手架搭建的项目实现react-redux

* 1、脚手架生成项目文件
```js
create-react-app demoname
```
* 2、npm 下载安装包
```js
npm install redux --save   //redux
npm install react-redux --save  //react-redux
npm install add antd  //antd
```

* 3、在对应文件下引入对应的方法
```js
index.js
import {createStore} from 'redux'
import {Provider} from 'react-redux'

App.js
import {conect} from 'react-redux'
```
* 4、新建reducer文件夹
* 5、在index.js中引入reducer.js;通过createStore生成store，通过Provider包裹app，将store由外层的数据容器传入UI容器
* 6、在App.js中定义两个方法mapStateToProps/mapDispatchToProps  \
     mapStateToPropsf负责将外部由store传入的state转化成内部props参数 \
     mapDispatchToProps负责将内部ui交互转化为dispatch动作
 * 7、通过react-redux提供的connect,传入上面两个方法和UI容器作为参数
 ```js
 export default connect(mapStateToProps,mapDispatchToProps)(App);
 ```
 ## 坑一
  第一次触发mapStateToDispatch时候，传入的state是一个undefined，框架要求这个函数里面return返回的必须是一个纯对象。目前想到的解决方法是在这个方法里面做一个空判断(但是觉得还是有点小问题)
 
