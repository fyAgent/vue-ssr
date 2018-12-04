const KoaRouter = require("koa-router");
const crossDomain = require("./controller/crossDomain")//解决
const test = require("./controller/test")


const router = new KoaRouter();

router.use(crossDomain)
router.all("/list.do", test);

module.exports = router;





















