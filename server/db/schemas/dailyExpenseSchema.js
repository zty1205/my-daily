const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const STATUS_NORMAL = 1;
const STATUS_DELETE = 0;

const dailyExpenseSchema = new Schema({
    // 结构定义
    // id 就用 ObjectId 但有可能重复提交 所以要有一定 防重复提交 当然time 的unique也可防止
    expense: { type: Number, required: true },
    time:  { type: Date, required: true, unique: true },
    status: { type: Number, default: STATUS_NORMAL },
    remark: { type: String, trim: true}
}, {
    // 配置项
    collection: 'myDaily',
    versionKey: false,
    timestamps: { // 自动生成创建时间和更新时间 compass 在list 查看时有8个小时的 偏移  table就不会了
      createdAt: true,
      updatedAt: true,
    },
    strict: true // 不是在scheme定义的属性不允许插入到数据库
});
// 第三个参数是 MongoDB具体的 Collection Name 
// 如果没有第三个参数 据说是查找的是dailyMoneys 的 Collection 但是死都查不到数据 还是添加第三个参数比较稳健
const dailyExpenses = mongoose.model('dailyExpense', dailyExpenseSchema, "dailyExpenses") // "dailyMoneys" "testMyDailyMoneys"
module.exports = dailyExpenses