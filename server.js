const path = require("path")
const fs = require("fs")
const Koa = require("koa")
const KoaStatic = require("koa-static")
const KoaRouter = require("koa-router")
const { createBundleRenderer } = require('vue-server-renderer')
const resolve = file => path.resolve(__dirname, file);
const app = new Koa();
//mock data
const koarouter = new KoaRouter()
const template = fs.readFileSync(path.resolve(__dirname, "./index.temp.html"), 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // 推荐
  template, // （可选）页面模板
  clientManifest// （可选）客户端构建 manifest
})
function renderToString(context) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      err ? reject(err) : resolve(html);
    });
  });
}
// 测试
koarouter.get("/list.do", (ctx, next) => {
  ctx.set("Content-Type", "application/json;charset=utf-8");
  ctx.body = {
    data: [
      {
        name: "zhangsan",

      },
      {
        name: "lisi"
      }
    ]
  }
})


//渲染
koarouter.get("*", async (ctx, next) => {
  const context = { url: ctx.url };
  console.log(ctx.url)
  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  if (ctx.url.indexOf("do") < 0) {
    const html = await renderToString(context);
    ctx.response.body = html;
  } else {
    next()
  }
})

app.use(KoaStatic(resolve('./dist')))
app.use(koarouter.routes())


app.listen(3000)











