// const Koa = require('koa')
// const Router = require('koa-router');
// const path = require('path');
// const serve = require('koa-static');
// const app = new Koa();
// const router = new Router();

// app.use(serve(path.join(__dirname, './public')));

// router.get('/api/test', async (ctx) => {
//   await setTimeout(() => {}, 3000);
//   ctx.body = {
//     retValue: 'Success',
//     retCode: 200,
//   }
// })
// app
//   .use(router.routes())
//   .use(router.allowedMethods());
// app.listen(2000);

const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const Router = require('koa-router')
const { sleep } = require('./util')
const router = new Router()
const app = new Koa()

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './public'

app.use(static(
  path.join( __dirname,  staticPath)
))
router.get('/api/test', (ctx) => {
  sleep(3);
  ctx.body = {
    retValue: 'Success',
    retCode: 200,
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(2000, () => {
  console.log('[demo] static-use-middleware is starting at port 3000')
})
