(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{402:function(t,s,a){"use strict";a.r(s);var n=a(24),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"logicflow-节点缩放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logicflow-节点缩放"}},[t._v("#")]),t._v(" LogicFlow 节点缩放")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("LogicFlow 目前内置的节点类型有矩形、圆形、菱形、多边形、椭圆、文本。通过继承这些基本类型可以实现自定义节点，对其功能进行扩展。\n节点缩放就是通过自定义节点方式实现的，本文将详细介绍节点缩放功能的实现方案。")]),t._v(" "),a("h2",{attrs:{id:"支持的节点类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持的节点类型"}},[t._v("#")]),t._v(" 支持的节点类型")]),t._v(" "),a("p",[t._v("目前节点缩放支持的节点类型如下：")]),t._v(" "),a("ul",[a("li",[t._v("矩形")]),t._v(" "),a("li",[t._v("椭圆")]),t._v(" "),a("li",[t._v("菱形")])]),t._v(" "),a("p",[a("strong",[t._v("为什么要实现这3种节点类型呢?")]),a("br"),t._v("\n流程图中常用的节点类型是矩形、圆形、菱形，因此仅目前仅支持了3种比较常用的。如果你的系统需要其他类型，可以参考本文的思路，自定义节点实现。")]),t._v(" "),a("p",[a("strong",[t._v("为什么是椭圆不是圆形?")]),a("br"),t._v("\n椭圆可以通过将rx，ry设置为相同的值来绘制圆形，圆形改变大小会变成椭圆，因此这里对椭圆的缩放实现。")]),t._v(" "),a("h2",{attrs:{id:"缩放效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缩放效果"}},[t._v("#")]),t._v(" 缩放效果")]),t._v(" "),a("p",[t._v("目前缩放是在节点边框四角方向上，通过拖拽进行大小调整，效果如下。想要了解如何在项目中使用参考"),a("RouterLink",{attrs:{to:"/guide/extension/extension-node-resize.html"}},[t._v("节点缩放使用文档")])],1),t._v(" "),a("p",[a("example",{attrs:{href:"/examples/#/extension/node-resize",height:450}})],1),t._v(" "),a("h2",{attrs:{id:"缩放实现方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缩放实现方案"}},[t._v("#")]),t._v(" 缩放实现方案")]),t._v(" "),a("h3",{attrs:{id:"缩放操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缩放操作"}},[t._v("#")]),t._v(" 缩放操作")]),t._v(" "),a("p",[t._v("通过继承基础类型节点，重写节点绘制方法(getShape), 在节点四角上增加四个控制点，点击控制点拖拽进行缩放。\n控制点的实现与@logicflow/core保持一致，基于Preact进行绘制。")]),t._v(" "),a("h3",{attrs:{id:"控制点拖拽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制点拖拽"}},[t._v("#")]),t._v(" 控制点拖拽")]),t._v(" "),a("p",[t._v("控制点拖拽后，需要有4方面的调整")]),t._v(" "),a("ul",[a("li",[t._v("节点位置(x,y)")]),t._v(" "),a("li",[t._v("节点文案位置(textPosition)")]),t._v(" "),a("li",[t._v("节点大小(width,height/rx,ry)")]),t._v(" "),a("li",[t._v("与节点相连的边，路径调整(pointsList)")])]),t._v(" "),a("p",[t._v("LogicFlow的绘制是MVVM模式，绘制(view)上的调整，更新数据(model)即可。")]),t._v(" "),a("h4",{attrs:{id:"节点位置-节点文案位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节点位置-节点文案位置"}},[t._v("#")]),t._v(" 节点位置 & 节点文案位置")]),t._v(" "),a("p",[t._v("根据控制点移动的距离，节点中心点位置和文案位置移动对应一半的距离。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updatePosition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" deltaX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deltaY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" deltaX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" deltaY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moveText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deltaX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deltaY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"节点大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节点大小"}},[t._v("#")]),t._v(" 节点大小")]),t._v(" "),a("p",[t._v("根据控制点移动的距离，节点的宽高对应增加或较少对应的距离。矩形修改其宽高，菱形和椭圆修改其 rx/ry 取值，菱形和椭圆的宽高是以及 rx/ry 得到的计算属性，自动更新。距离增加逻辑根据控制点 (control) 位置，以及移动我位置计算方式如下。"),a("br"),t._v(" "),a("strong",[t._v("index")]),t._v(":  控制点顺序index, 顺序如下【左上，右上，右下，左下】"),a("br"),t._v(" "),a("strong",[t._v("deltaX/deltaY")]),t._v(":  控制点移动位置"),a("br"),t._v(" "),a("strong",[t._v("pct")]),t._v(":  width, height, rx, ry 需要计算的比例，矩形为1，椭圆菱形为1/2。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算control拖动后，节点的宽高")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getResize")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deltaX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deltaY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pct "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" resize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        resize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" deltaX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        resize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" deltaY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        resize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" deltaX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        resize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" deltaY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        resize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" deltaX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        resize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" deltaY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        resize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" deltaX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        resize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" deltaY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" resize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("得到resize之后，更新数据。")]),t._v(" "),a("ul",[a("li",[t._v("矩形: width = resize.width; height = resize.height;")]),t._v(" "),a("li",[t._v("椭圆: rx = resize.width; ry = resize.height;")]),t._v(" "),a("li",[t._v("菱形: rx = resize.width; ry = resize.height;")])]),t._v(" "),a("h4",{attrs:{id:"与节点相连的边-路径调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与节点相连的边-路径调整"}},[t._v("#")]),t._v(" 与节点相连的边，路径调整")]),t._v(" "),a("p",[t._v("当节点位置和大小更新之后，如果节点与其他节点之间存在连线，那么连线的路径也要做相对的调整。当边从节点连出时，根据边提供的方法，只需要更新边起点位置，路径就会自动更新，同理边连入节点时，更新边重点位置即可。以矩形为例如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" afterPoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取所有与节点相连的边")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" edges "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNodeEdges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新从节点连出边的起点")]),t._v("\nedges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sourceEdges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("point "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startPoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  afterPoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRectReizeEdgePoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStartPoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("afterPoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新连入节点边的终点")]),t._v("\nedges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("targetEdges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("point "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endPoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  afterPoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRectReizeEdgePoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateEndPoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("afterPoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("节点缩放后，需要计算边起点终点的新坐标，计算思路是获取节点在缩放前在节点上的的相对位置，例如：与中心点的夹角、在节点某条边框的相对位置等，依据该相对位置比例，计算节点缩放后的该点的新坐标。缩放连线调整部分介绍详细的计算方法。")]),t._v(" "),a("h2",{attrs:{id:"缩放连线调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缩放连线调整"}},[t._v("#")]),t._v(" 缩放连线调整")]),t._v(" "),a("p",[t._v("矩形、椭圆、菱形在图形数据和绘制上不同，因此计算方法不同，这也是节点缩放实现最复杂的部分，下面将分别介绍详细的计算方法。")]),t._v(" "),a("h3",{attrs:{id:"矩形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#矩形"}},[t._v("#")]),t._v(" 矩形")]),t._v(" "),a("p",[t._v("将矩形中心当做中心点(0,0)，矩形支持radius取值，存在圆角矩形，将端点在矩形直线边和圆角两种情况进行计算，逻辑如下。"),a("br"),t._v(" "),a("img",{staticStyle:{width:"50%","margin-left":"20%"},attrs:{src:"https://dpubstatic.udache.com/static/dpubimg/Vxibx5_JaH/rect1111.jpeg",alt:"矩形"}}),t._v(" "),a("img",{staticStyle:{width:"70%","margin-left":"15%"},attrs:{src:"https://dpubstatic.udache.com/static/dpubimg/-2IFZJ7u8S/rectResize.jpeg",alt:"矩形resize"}})]),t._v(" "),a("h3",{attrs:{id:"椭圆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#椭圆"}},[t._v("#")]),t._v(" 椭圆")]),t._v(" "),a("p",[t._v("将椭圆中心当做中心点(0,0)，计算缩放前边的端点与X轴的夹角θ，缩放后保持夹角θ不变计算新坐标。\n"),a("img",{staticStyle:{width:"70%","margin-left":"15%"},attrs:{src:"https://dpubstatic.udache.com/static/dpubimg/KGcedaNUOz/ellipseResize.jpeg",alt:"椭圆resize"}})]),t._v(" "),a("h3",{attrs:{id:"菱形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#菱形"}},[t._v("#")]),t._v(" 菱形")]),t._v(" "),a("p",[t._v("将菱形中心当做中心点(0,0), 如下图所示，首先计算点P到点E的距离L，然后计算出L占NE距离的比例pct，缩放后保持pct不变计算新坐标。当点P坐标大于0时以点E作为参考点进行比例计算，当点P坐标小于0时，以点W作为参考点进行比例计算。\n"),a("img",{staticStyle:{width:"70%","margin-left":"15%"},attrs:{src:"https://dpubstatic.udache.com/static/dpubimg/rYtOA0CC7V/diamondResize.jpeg",alt:"菱形resize"}})]),t._v(" "),a("h2",{attrs:{id:"个性化配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#个性化配置"}},[t._v("#")]),t._v(" 个性化配置")]),t._v(" "),a("h3",{attrs:{id:"缩放范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缩放范围"}},[t._v("#")]),t._v(" 缩放范围")]),t._v(" "),a("p",[t._v("节点设置缩放的范围，当拖动控制点调整大小达到最大或最小值时，节点大小不会再改变，支持的配置以及默认取值如下。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缩放范围")]),t._v("\n  sizeRange"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      minWidth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      minHeight"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      maxWidth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      maxHeight"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ellipse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      minRx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      minRy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      maxRx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      maxRy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    diamond"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      minRx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      minRy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      maxRx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      maxRy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h3",{attrs:{id:"拖动step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拖动step"}},[t._v("#")]),t._v(" 拖动step")]),t._v(" "),a("p",[t._v("当拖动step=n时候，节点坐标会更新 step/2= n/2。step默认取值为2，当设置了网格grid之后，默认取值为 2 * grid。")]),t._v(" "),a("ul",[a("li",[t._v("默认取值为2，是为了保证缩放后节点坐标为证书")]),t._v(" "),a("li",[t._v("设置了grid之后，为了能够保证能够依然高效实用对齐线功能，因此step默认设置为2 * grid，由此也会带来一些问题，当grid取值为10以上的值时，操作上会感觉节点缩放不太流畅。这个时候也可以手动修改step值，这个时候需要宿主系统功能上做下权衡取舍。")])]),t._v(" "),a("h3",{attrs:{id:"样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式"}},[t._v("#")]),t._v(" 样式")]),t._v(" "),a("p",[t._v("增加节点调整后，为了使整体样式个更加舒适，在插件内部设置了节点的主题样式，宿主可以对其进行覆盖设置。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置默认样式，主要将outlineColor设置为透明，不再展示core包中默认的节点外框")]),t._v("\n    lf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      rect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        strokeWidth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        outlineColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transparent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      ellipse"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        strokeWidth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        outlineColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transparent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      diamond"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        strokeWidth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        outlineColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transparent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("为了能让宿主自由调整一些样式，支持节点缩放边框以及控制点样式调整，支持的样式以及默认值如下。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 边框和contol拖动点样式的设置")]),t._v("\n  style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    outline"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      stroke"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#000000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      strokeWidth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      strokeDasharray"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3,3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    controlPoint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      fill"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#FFFFFF'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      stroke"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#000000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),a("p",[t._v("节点缩放后，定义了 "),a("code",[t._v("node:resize")]),t._v(" 事件，并抛出节点缩放前和缩放后的基础信息、大小、位置信息，方便宿主可以进行其他操作。")]),t._v(" "),a("h2",{attrs:{id:"自定义节点使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义节点使用"}},[t._v("#")]),t._v(" 自定义节点使用")]),t._v(" "),a("p",[t._v("为了能够使自定义节点使用缩放功能，内部将 "),a("code",[t._v("RectResize")]),t._v(",   "),a("code",[t._v("EllipseResize")]),t._v(" ,  "),a("code",[t._v("DiamondResize")]),t._v(" 导出，通过继承 "),a("code",[t._v("RectResize.model")]),t._v(" , "),a("code",[t._v("RectResize.view")]),t._v(" 等实现缩放。")]),t._v(" "),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),a("p",[t._v("以上介绍了节点缩放功能的实现方案，如果对此插件实现有想法的同学，欢迎在用户群交流~。")])])}),[],!1,null,null,null);s.default=e.exports}}]);