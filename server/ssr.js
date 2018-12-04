// server/ssr.js
const Koa = require('koa')
const koaStatic = require("koa-static");
const path = require('path')
const resolve = file => path.resolve(__dirname, file);
const app = new Koa()
const chalk = require('chalk')
const isDev = process.env.NODE_ENV !== 'production';
const bodyParser = require("koa-bodyparser")

const router = isDev ? require(resolve('./dev.ssr')) : require(resolve('./server'));
app.use(bodyParser());
app.use(koaStatic(resolve("../dist")));// 静态资源服务

app.use(router.routes()).use(router.allowedMethods())//后台路由

const port = process.env.PORT || 3000;


app.listen(port, (err) => {
    if (err) console.error(err);
    console.log(`server started at ${chalk.cyan('http://127.0.0.1:' + port + '/home')}`)
});

module.exports = app

