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
    }).catch((err) => {
        res.json({
            result: 1,
            error: err
        })
    })
})

router.get('/add', (req, res, next) => {   // 路由为 http://localhost:4000/money/add
    let one = {
        expense: -998,
        time:  "2019/1/1",
        status: 1,
        remark: "jello"
    }
    dailyMoney.create(one, (err, dm) => {
        console.log("dm = ", dm)
        // res.send(dm)
        if (!err) {
            res.json({
                success: 0,
                result: dm
            })
        } else {
            res.json({
                error: 1,
                msg: err
            })
        }
    })
})

module.exports = router
