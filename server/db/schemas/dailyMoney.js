const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const STATUS_NORMAL = 1;
const STATUS_DELETE = 0;

const dailyMoney = new Schema({
    mid: Number,
    expense: Number,
    time: Date,
    status: { type: Number, default: STATUS_NORMAL },
    createTime: { type: Date, default: Date.now },
    remark: String
});
// 第三个参数是 MongoDB具体的 Collection Name 
// 如果没有第三个参数 据说是查找的是dailyMoneys 的 Collection 但是死都查不到数据 还是添加第三个参数比较稳健
const DailyMoney = mongoose.model('dailyMoney', dailyMoney, "dailyMoneys")
module.exports = DailyMoney