# Vue Combos

> 一个基于Vue.js 2.0 + Element UI 的多功能后台框架模板。

## 前言 ##
这是一套运用vue-cli+vue-Echarts+vue-router+vue-resource+ElementUI实现的后台管理系统解决方案，实现了大多数后台管理系统所需功能。使用vue全家桶和Element UI组件库能够方便快速的开发简洁好看功能强大的页面。

## 功能 ##
- [x] 单页应用
- [x] 登录/注销
- [x] vue路由机制切换页面
- [x] vue-resource获取动态数据
- [x] Element UI表单表格
- [x] vue封装的Echarts图表
- [x] 文件/图片上传
- [x] css3动画


## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|-- config                           // 项目打包路径
	|-- src                              // 源码目录
	|  |-- components                   // 组件
	|       |-- charts                   // 图表组件
              |-- barCharts.vue        // 柱状图
              |-- lineCharts.vue       // 折线图
              |-- pieCharts.vue        // 饼状图
	        |-- common                   // 公共组件
	|           |-- Header.vue           // 公共头部
	|           |-- Page.vue           	 // 公共路由入口
	|           |-- Sidebar.vue          // 公共左边栏
	            |-- pageTitle.vue        // 公共标题栏
	|		    |-- page                   	 // 主要路由页面
	|           |-- BasicForm.vue        // 基础表单
	|           |-- BasicTable.vue       // 基础表格
	|           |-- login.vue          	 // 登录
	|           |-- vueEcharts.vue       // vueEcharts组件
	|           |-- vueTable.vue         // vue动态加载数据图表
	|           |-- Welcome.vue          // 首页
	|   |-- router
	        |--index.js                  // 路由设置文件
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- static                           // 静态资源
      |-- css                          // css文件
      |-- img                          // 图片文件
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明


## 安装步骤 ##

	git clone https://github.com/lin-xin/manage-system.git		// 把模板下载到本地
	cd manage-system											// 进入模板目录
	npm install													// 安装项目依赖，等待安装完成之后

## 本地开发 ##

	// 开启服务器，浏览器访问 http://localhost:8089
	npm run dev

## 构建生产 ##

	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	npm run build

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8089
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
