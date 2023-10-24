# React18 + React-Router + Sass + Multipage 

## 项目特点
模版项目，方便快速搭建业务React.js框架模版

常规React-Router项目使用懒加载多页应用方案后，无法使用单页应用的store或者内存缓存，单页应用页面重复打开时能使用之前的缓存数据，快速回填，达到单页一样的效果。
本项目使用useContext 结合sessionStorage 实现多页切换后，数据能继续保留。再次打开原页面直接读缓存数据，页面加载体验很好。首次加载仅加载单页，速度又会比单页快。

使用useContext替代redux，让中小项目代码更精简

自动化脚本,打包好，自动提交,push到git

支持国际化及模版