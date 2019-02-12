/**
 * 基本返回的class
 * 可以使用 _属性 做中间变量 进行一定的检查 flow check不了 很奇怪
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
		if (!isNaN(rs)) {
			this.rs = Number(rs)
		} else {
			throw new Error("rs must be countable")
		}
	}
	// 写了 get 控制台会显示浅色的 _msgInfo 告诉我们 可以通过commonRes._msgInfo获取这个属性 但是获得的对象中是没有的，且不可遍历出来
	// 没写get 控制台不显示 且 commonRes._msgInfo = undefined
	// get _rs() {
	//     return this.rs
	// }

	set _msgInfo(msgInfo) {
		this.msgInfo = msgInfo ? (msgInfo + "") : ""
	}

	set _errorInfo(errorInfo) {
		this.errorInfo = errorInfo ? (errorInfo + "") : ""
	}

}

module.exports = CommonRes
