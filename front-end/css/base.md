### CSS基础


##### 选择器部分
  1. '*' *通用选择器*
    > 选择所有元素，不参与计算优先级（兼容IE6+）
  
  （权重值为个人计算单位）
  2. '#X' *ID选择器*
    > 选择id值为X的元素 权重为100（兼容IE6+）
      
  3. '.X' *Class选择器*
    > 选择Class值为X的元素 权重为10（兼容IE6+）
  
  4. X 标签选择器
    > 
 
  5. ':' 伪类元素
      > 选择特定状态的链接元素，顺序L--> V--> H--> A (兼容IE4+)
      - link
        > 链接
      - visited
        > 访问过后
      - focus
        > 聚焦
      - hover
        > 鼠标悬浮
      - active
        > 鼠标活动

  6. 'X Y' *后代选择器*
    > 选择满足X选择器的后代节点中满足Y选择器的元素（兼容IE6+）


  7. ‘X + Y’ *直接兄弟选择器*
    > 在X之后第一个兄弟节点中满足Y选择器的元素 （兼容IE7+）
  
  8. 'X > Y' *子选择器*
    > 选择X的子元素中满足Y选择器的元素 （兼容IE7+）

  ...


#### CSS Sprite的优缺点
  - 什么是CSS Sprite
    > 将多个小图片（页面中的图标、logo etc）拼接到一个图片中，通过background-position和元素尺寸调节需要显示的背景图案

  - 优点
    - 减少HTTP请求数，极大地提高页面加载速度
    - 增加图片信息重复度，提高压缩比，减少图片大小
    - 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现
  
  - 缺点
    - 图片合并麻烦
    - 维护麻烦，修改一个图片 or icon 可能需要重新布局整个图片、样式



#### `Display: none` 与 `visibility: hidden`的区别
  > 功能都是让元素不可见

  - 区别
    - 渲染树
      - display会让元素完全从渲染树中消失，渲染时不占据任何空间
      - visibility不会让元素消失，继续占据渲染树空间，内容不可见
    - 继承属性
      - display是非继承属性，子孙节点受父类影响消失，修改子孙节点属性无法显示
      - visibility是继承属性，子孙节点受父类影响不可见，通过设置`visbility: visible`可以让子孙节点重新显示
    - 重排/重绘
      - 修改常规流中的元素（非float、absolute、fixed等）的display通常会造成文档重绘
      - 修改visibility会造成元素的重绘
    - 读屏器
      - 不会读取`display:none`元素内容
      - 会读取`visibility:hidden`元素内容


#### `Display: block` 与 `Display: inline` 的区别
  - block元素
    - 处于常规流中，width自动填满父容器
    - 可以设置margin/padding
    - 没有设置高度的情况下会被子元素的高度填充
    - 处于常规流中独占一个水平空间（行、纵）
    - 忽略vertical-align

  - line元素
    - 水平方向根据direction依次布局
    - 不会在元素前后进行换行
    - 受`white-space`控制
    - `margin、padding`在竖直方向无效（top、bottom），水平方向有效(left、right)
    - 设置宽高无效，宽度由元素内容决定
    - `vertical-align`生效
    - 浮动或绝对定位时会转换为block
