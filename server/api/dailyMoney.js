const express = require('express')
const router = express.Router()
const dailyMoney = require("../db/schemas/dailyMoney.js")

router.get('/find', (req, res, next) => {   // 路由为 http://localhost:4000/money/find
    dailyMoney.find({}).then(dm => {
        console.log("dm = ", dm)
        // res.send(dm)
        res.json({
            result: 0,
            list: dm,
            length: dm.length
        })
    }).catch(() => {
        next()
    })
})

module.exports = router
