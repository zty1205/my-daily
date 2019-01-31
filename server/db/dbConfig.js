
const dbConfig = {
    url: "mongodb://localhost:27017/myDaily",
    options: {
        useNewUrlParser: true,
        reconnectTries: 10, // 总是尝试重新连接
        reconnectInterval: 500, // 每500ms重新连接一次
        poolSize: 10, // 维护最多10个socket连接
        connectTimeoutMS: 10000, // 10s后放弃重新连接
        socketTimeoutMS: 30000 // 在30s 不活跃后关闭sockets
    }
}

module.exports = dbConfig
