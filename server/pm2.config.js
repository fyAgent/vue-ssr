const path = require("path");
module.exports = {
    apps: [
        {
            name: "vue-ssr",
            script: path.join(__dirname, "./ssr.js"),
            instances: 1,
            env: {
                port: 3000,
                NODE_ENV: "development",
                WEBPACK_TARGET: "node"
            },
            env_production: {
                port:80,
                NODE_ENV: "production",
                WEBPACK_TARGET: "node"
            }
        }
    ]
}