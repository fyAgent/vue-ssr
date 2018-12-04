const path = require("path")
const fs = require("fs")
const router = require("./router")
const { createBundleRenderer } = require('vue-server-renderer')
const resolve = file => path.resolve(__dirname, file);
const template = fs.readFileSync(path.resolve(__dirname, "../index.temp.html"), 'utf-8')
const serverBundle = require(resolve('../dist/vue-ssr-server-bundle.json'))
const clientManifest = require(resolve('../dist/vue-ssr-client-manifest.json'))
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
// // 渲染
router.get("*", async (ctx, next) => {

  const context = { url: ctx.url };

  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  if (ctx.url.indexOf("do") < 0) {//vue-router页面路径不会携带文件扩展名
    const html = await renderToString(context);
    ctx.set("Content-type", "text/html;charset=utf-8");
    ctx.body = html;
  } else {

    next()
  }
})
router.get('/', ctx => {
  ctx.redirect("/home")

  ctx.status = 301;
});
module.exports = router










