const KoaRouter = require("koa-router");

const test = require("./controller/test")


const router = new KoaRouter()
router.all("/list.do", test);

module.exports = router;





















