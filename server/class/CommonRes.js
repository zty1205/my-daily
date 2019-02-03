 /**
  * 基本返回的class
  * 使用 _属性 做中间变量 进行一定的检查
  */

class CommonRes {
    constructor(rs = 0, msgInfo = "", errorInfo = "") {
        this._rs = rs;
        this._msgInfo = msgInfo;
        this._errorInfo = errorInfo;
    }
    setRs(rs) {
        this._rs = rs
        return this
    }
    setMsgInfo(msgInfo) {
        this._msgInfo = msgInfo
        return this
    }
    setErrorInfo(errorInfo) {
        this._errorInfo = errorInfo
        return this
    }

    set _rs(rs) {
        this.rs = rs
    }
    // 写了 get 控制台会显示浅色的 _msgInfo 告诉我们 可以通过commonRes._msgInfo获取这个属性 但是获得的对象中是没有的，且不可遍历出来
     // 没写get 控制台不显示 且 commonRes._msgInfo = undefined
    // get _rs() {
    //     return this.rs
    // }

    set _msgInfo(msgInfo) {
        this.msgInfo = (msgInfo + "")
    }

    set _errorInfo(errorInfo) {
        this.errorInfo = (errorInfo + "")
    }

}

// 静态属性
CommonRes.RS_OK = 0
CommonRes.RS_MONGODB_ERROR = 10000
CommonRes.RS_MONGODB_FIND_ERROR = 10000
CommonRes.RS_MONGODB_UPDATE_ERROR = 10001
CommonRes.RS_MONGODB_DELETE_ERROR = 10002
CommonRes.RS_MONGODB_CREATE_ERROR = 10003

module.exports = CommonRes
