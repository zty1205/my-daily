const express = require('express')
const router = express.Router()
const dailyExpenses = require("../db/schemas/dailyExpenseSchema.js")
const ListRes = require("../class/res/ListRes.js")
const RsCode = require("../class/res/RsCode.js")

router.get('/find', (req, res, next) => {   // 路由为 http://localhost:4000/money/find
    let listRes;
    dailyExpenses.find({}).then(des => {
        listRes = new ListRes(des, RsCode.RS_OK)
        res.json(listRes)
    }).catch((err) => {
        listRes = new ListRes([], RsCode.RS_MONGODB_FIND_ERROR, null, "查询失败") 
        res.json(listRes)
    })
})

router.post('/add', (req, res, next) => {   // 路由为 http://localhost:4000/money/add

    // console.log("body = ", req.body)

    let dm = {...req.body}
    if (!dm._id) {
        delete dm._id
    }

    dailyExpenses.create(dm, (err, dm) => {
        // console.log("dm = ", dm)
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
