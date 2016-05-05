# 组件结构和参数传递
组件是angular2的结构核心，整体就是一个带有子组件的组件，组件的参数传递是通过inputs单向的：

![figure1](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/02/1454391007angular2-components-inputs-and-outputs01-component-hierarchy-behaviour.png)

如果需要反向传递数据，则需要用到outputs事件:

![figure2](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/02/1454391011angular2-components-inputs-and-outputs02-one-way-data-flow-down-hierarchy.png)

## 项目目的
1 了解angular的Component结构；
2 了解如何在component间传递参数；

## 使用方法

git clone https://github.com/e-wings/angular2_demo.git

cd child-component

npm install

gulp

注意：

1 如果没有安装node,请先安装node。

2 如果没有安装gulp,请先安装gulp：npm install --global gulp
