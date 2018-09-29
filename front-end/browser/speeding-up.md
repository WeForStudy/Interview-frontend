#### Best Practices for Speeding Up Your Web Site
雅虎<https://developer.yahoo.com/performance/rules.html?guccounter=1>


- Content
  
  1.減少HTTP请求：合并文件、CSS精灵、inline-image

  2.减少DNS查询
    > DNS查询完成之前浏览器不能从这个主机下载任何文件。
    - DNS缓存
    - 资源分布到恰当数量的主机名
    - 平衡并行下载和DNS查询

  3.避免重定向
    > 多余的中间访问
  
  4.使用Ajax可缓存

  5.非必须组件延迟加载

  6.未来所需组件预加载

  7.减少DOM元素数量

  8.资源分布不同域
    > 浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量

  9.减少iframe数量

  10.不要404

- Server

  1.使用CDN

  2.添加Expires或者Cache-Control响应头

  3.对组件使用Gzip压缩

  4.配置ETag

  5.Flush Buffer Early

  6.Ajax使用GET进行请求

  7.避免空src的img标签

- Cookie方面
  - 减少cookie的大小
  - 引入资源的域名不要包含cookie

- CSS方面
  - 将样式表放到页面顶部
  - 不使用CSS表达式
  - 不使用`@import`
  - 不使用IE的filter

- JavaScript方面
  - 将脚本放到页面底部
  - 将JavaScript和css从外部引用
  - 压缩JavaScript和CSS
  - 删除不需要的脚本(Tree Shaking)
  - 减少DOM访问
  - 合理设计事件监听器

- Image
  - 优化图片
    > 根据实际颜色需要选择色深、压缩
  - 使用CSS精灵
  - 不要在HTML中拉伸图片
  - 保证favicon.ico小并且可缓存

- Mobile
  - 保证组件小于25K
  - Pack Components into a Mutipart Document