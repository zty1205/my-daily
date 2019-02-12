const CommonRes = require("./CommonRes.js")

class ListRes extends CommonRes{
  constructor(list = [], rs, msgInfo, errorInfo) {
    super(rs, msgInfo, errorInfo);
    this._list = list;
  }

  setList(list) {
    this._list = list;
    return this;
  }

  set _list(list) {
    if(list && (list instanceof Array)) {
      this.list = list;
      this.total = list.length || 0;
    } else {
      throw new Error("list must be Array")
    }
  }
}

module.exports = ListRes
