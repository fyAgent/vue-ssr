const Vue = require("vue")
const Koa = require("koa")
const cp = require('child_process')
const koaStatic =require("koa-static")
const path =require("path")
const fs =require("fs")
const { createBundleRenderer } = require("vue-server-renderer");
const app = new Koa()
const resolve = file => path.resolve(__dirname, file);

// 开放dist目录
app.use(koaStatic(resolve('../dist')))
const bundle = require("../dist/vue-ssr-server-bundle.json");
const clientManifest = require("../dist/vue-ssr-client-manifest.json");
const renderer = createBundleRenderer(bundle, {
  runInNewContext: false,
  template: fs.readFileSync(resolve("../public/index.html"), "utf-8"),
  clientManifest: clientManifest
});

function renderToString(context) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      err ? reject(err) : resolve(html);
    });
  });
}
app.use(async (ctx, next) => {
  const context = {
    title: "ssr test",
    url: ctx.url
  };
  // 将 context 数据渲染为 HTML
  const html = await renderToString(context);
    ctx.body = html;
});


const port = 3000;
app.listen(port, function() {
  console.log(`server started at localhost:${port}`);
});