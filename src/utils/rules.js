/*eslint-disable*/

/**
 * @param rule 组件里定义的rule 例： { validator: val, max: 10, message: 'msh', trigger: 'blur change' }
 * @param value
 * @param callback
 */

function isNum(num) {
	return num && !isNaN(num)
}

// 整数 非必填
function checkInteger(rule, value, callback) {
	if (value && !Number(value) && !Number.isInteger(Number(value))) {
		callback(new Error('请输入整数'));
	} else {
		callback()
	}
}

// 非负整数 非必填
function checkNonnegativeInteger(rule, value, callback) {
	if (!/^\d+$/.test(value)) {
		callback(new Error('请输入非负整数'));
		return
	}
	callback()
}

// 判断用英文逗号分割的id字符串 - 可以扩展为特定字符
function checkMultipleId(rule, value, callback) {
	if (value) {
		if (/^(\d+[,])*(\d+)$/.test(value)) {
			callback()
		} else {
			callback(new Error('请输入数字或者英文逗号,分割的数字'))
		}
	} else {
		callback()
	}
}

function checkNumber(rule, value, callback) {
	if (!isNum(value)) {
		callback("请输入数字")
	} else {
		callback()
	}		
}

function checkNumberRange(rule, value, callback) {
	if (isNum(value)) {
		let val = Number(value)
		if (rule.min && rule.max) {
			if (val < rule.min || val > rule.max) {
				callback(`请输入${rule.min}~${rule.max}的数字`)
			}
		} else if(rule.min) {
			if (val < rule.min) {
				callback(`请输入不小于${rule.min}的数字`)
			}
		} else if(rule.max) {
			if (val > rule.max) {
				callback(`请输入不大于${rule.max}的数字`)
			}
		} else {
			callback()
		}
		callback()
	} else {
		callback("请输入数字")
	}		
}

// 金额校验 整数或者小数点两位以内 非必填
function checkPrice(rule, value, callback) {
	if (value && !/^([1-9]\d*|0)(\.\d{1,2})?$/.test(value)) {
		callback(new Error('请输入整数或小数点后两位以内小数'));
	} else {
		callback()
	}
}


export {
	checkInteger,
	checkNonnegativeInteger,
	checkMultipleId,
	checkNumber,
	checkNumberRange,
	checkPrice,
}
