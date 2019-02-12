const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dictionarySchema = new Schema({
  // 结构定义
  // id 就用 ObjectId 但有可能重复提交 所以要有一定 防重复提交 当然time 的unique也可防止
  did: { type: Number, unique: true },
  dName: { type: String, trim: true},
  remark: { type: String, trim: true},
  status: { type: Number },
  base: { type: Boolean, required: true, default: false }
}, {
  // 配置项
  collection: 'myDaily',
  versionKey: false,
  timestamps: {
    createdAt: true,
    updatedAt: true,
  },
  strict: true
});

const dictionaries = mongoose.model('dictionary', dictionarySchema, "dictionaries")
module.exports = dictionaries