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

    dailyMoney.create(one, (err, dm) => {
        console.log("dm = ", dm)
        // res.send(dm)
        if (!err) {
            res.json({
                success: 0,
                result: dm
            })
            // err = {
            //     error: 1
            //     msg: {driver: true, name: "MongoError", index: 0, code: 11000,…}
            //     code: 11000
            //     driver: true
            //     errmsg: "E11000 duplicate key error collection: myDaily.dailyMoneys index: mid_1 dup key: { : null }"
            //     index: 0
            //     name: "MongoError"
            // }
        } else {
            res.json({
                error: 1,
                msg: err
            })
        }
    })
})

module.exports = router
