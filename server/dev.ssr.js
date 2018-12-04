const webpack = require("webpack")
const axios = require("axios")
const MemoryFs = require("memory-fs")
const fs = require("fs");
const path = require("path");
const router = require("./router");
const chalk = require('chalk');
// 1、webpack配置文件
const webpackConfig = require("@vue/cli-service/webpack.config")
const { createBundleRenderer } = require("vue-server-renderer")
// 2、编译webpack配置文件
const serverCompiler = webpack(webpackConfig);
const mfs = new MemoryFs();
// 指定输出文件到的内存流中
serverCompiler.outputFileSystem = mfs;

serverCompiler.watch({}, (err, stats) => {

    if (err) {
        throw err
    }
    stats = stats.toJson()
    stats.errors.forEach(err => console.error(err))
    stats.warnings.forEach(warn => console.warn(warn))
    const bundlePath = path.join(

        webpackConfig.output.path,
        'vue-ssr-server-bundle.json'
    );


    try {
        const data = fs.readFileSync(bundlePath, 'utf-8')

        bundle = JSON.parse(data)
    } catch (err) {
        console.log("捕获异常")
        console.error(err)
    }

    console.log('new bundle generated')
})
// 处理请求
let bundle
const handleRequest = async function (ctx, next) {

    console.log(chalk.red('handleRequest:', chalk.underline.bgGreen(ctx.request.url)));


    if (!bundle) {
        ctx.body = 'please wait...'
        return
    }

    // 4、获取最新的 vue-ssr-client-manifest.json

    const clientManifestResp = await axios.get('http://localhost:8080/vue-ssr-client-manifest.json');


    const clientManifest = clientManifestResp.data;

    const renderer = createBundleRenderer(bundle, {
        runInNewContext: false,
        template: fs.readFileSync(path.resolve(__dirname, "../index.temp.html"), "utf-8"),
        clientManifest: clientManifest
    });
    const html = await renderToString(ctx, renderer)
    ctx.type = 'text/html; charset=utf-8';
    ctx.body = html;
}
function renderToString(context, renderer) {
    return new Promise((resolve, reject) => {
        renderer.renderToString(context, (err, html) => {
            err ? reject(err) : resolve(html);
        });
    });
}
router.get("*", handleRequest);

module.exports = router















