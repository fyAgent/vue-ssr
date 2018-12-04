module.exports = async (ctx, next) => {
    console.log(ctx.request.body)
    const message = Object.assign({ message: "这是测试的一条信息" }, ctx.request.body);
    ctx.body = {
        data: message
    }
}