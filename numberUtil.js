export default {
	/**
	 * @func
	 * @desc 阿拉伯数字单位转换，并保留 n 位小数：1 0000 -> 1 万，1 0000 0000 -> 亿，以此类推。
	 * @param {Number} num - 需要转换的数字
	 * @param {Number} digit - 需保留的小数位数，默认保留两位小数
	 * @returns {String} 转换后的数字
	 */
	unitConvert (num, digit) {
		let unit = ''
		let newNum = ''
		// 默认保留两位小数
		if (digit === null || typeof digit === 'undefined') {
			digit = 2
		}
		// 判断 num 是否为空
		if (num === null || typeof num === 'undefined') {
			return
		}
		num = parseFloat(num)
		// 判断 num 是否为数字
		if (!isNaN(num)) {
			if (num < 10000) { // 小于 1 0000，原样输出
				newNum = num
			} else if (num >= 10000 && num < 100000000) { // 大于 1 0000 小于 1 0000 0000
				unit = '万'
				// console.log(num / 10000)
				newNum = (num / 10000).toFixed(digit) + unit
			} else if (num >= 100000000) { // 大于 1 0000 0000
				unit = '亿'
				// console.log(num / 100000000)
				newNum = (num / 100000000).toFixed(digit) + unit
			}
			return newNum
		} else {
			return num
		}
	},
	/**
	 * number截取小数
	 * @param num{Number} 要处理的数字
	 * @param len{Number} 要保留的小数长度
	 */
	toFixed (num, len) {
		let str = num + ''
		let point = str.indexOf('.')
		if (point === -1 || len === 0) {
			return num
		}
		let strLen = str.length
		let result = str
		if (strLen > point + len + 1) {
			result = str.substring(0, point + 1 + len)
		}
		result = result.replace(/0+?$/, '').replace(/[.]$/, '')
		return result
	},
	/**
	 * @func
	 * @desc 阿拉伯数字单位转换，并保留 n 位小数：1 0000 -> 1 万，1 0000 0000 -> 亿，以此类推。
	 * @param {Number} num - 需要转换的数字
	 * @param {Number} digit - 需保留的小数位数，默认保留两位小数
	 * @param {Array} unit 单位的中文数组
	 * @param {Number} space 结果数字和单位之间的空格数量
	 * @returns {String} 转换后的数字
	 */
	numberToUnit (num, digit, unit, space) {
		num = parseFloat(num)
		if (isNaN(num)) {
			return num
		}
		let unitArr = ['千亿', '亿', '千万', '万', '千', '百', '十', '个']
		let numberArr = [100000000000, 100000000, 10000000, 10000, 1000, 100, 10, 0]
		let returnNum
		// 默认保留两位小数
		if (digit === null || typeof digit === 'undefined') {
			digit = 2
		}
		if (space === null || typeof space === 'undefined' || isNaN(space)) {
			space = 0
		}
		for (let i = 0; i < numberArr.length; i++) {
			let n = numberArr[i]
			if (num > n && unit.indexOf(unitArr[i]) !== -1) {
				if (n === 0) {
			    	returnNum = this.toFixed(num, digit)
				} else {
					returnNum = this.toFixed(num / n, digit)
				}
				for (let j = 0; j < space; j++) {
					returnNum += ' '
				}
				returnNum += unitArr[i]
				return returnNum
			}
		}
		return num
	},
	/**
	 * @func
	 * @desc 阿拉伯数字单位转换，并保留 n 位小数：1 0000 -> 1 万，1 0000 0000 -> 亿，以此类推。
	 * @param {Number} num - 需要转换的数字
	 * @param {Number} digit - 需保留的小数位数，默认保留两位小数
	 * @param {Array} unit 单位的中文数组
	 * @param {Number} space 结果数字和单位之间的空格数量
	 * @returns {String} 转换后的数字
	 */
	toUnitNum (num, digit, unit, space) {
		num = parseFloat(num)
		if (isNaN(num)) {
			return num
		}
		let unitArr = ['千亿', '亿', '千万', '万', '千', '百', '十', '个']
		let numberArr = [100000000000, 100000000, 10000000, 10000, 1000, 100, 10, 0]
		let returnNum
		let param
		// 默认保留两位小数
		if (digit === null || typeof digit === 'undefined') {
			digit = 2
		}
		if (space === null || typeof space === 'undefined' || isNaN(space)) {
			space = 0
		}
		for (let i = 0; i < numberArr.length; i++) {
			let n = numberArr[i]
			if (num > n && unit.indexOf(unitArr[i]) !== -1) {
				if (n === 0) {
			    	returnNum = this.toFixed(num, digit)
				} else {
					returnNum = this.toFixed(num / n, digit)
				}
				for (let j = 0; j < space; j++) {
					returnNum += ' '
				}
				param = {
					num: returnNum,
					unit: unitArr[i]
				}
				return param
			}
		}
		param = {
			num: num,
			unit: ''
		}
		return param
	},
	/**
	 * @func
	 * @desc 阿拉伯数字单位转换，并保留 n 位小数：1024KB -> 1MB，以此类推。
	 * @param {Number} num - 需要转换的数字
	 * @param {Number} digit - 需保留的小数位数，默认保留两位小数
	 * @param {Array} unit 单位的中文数组
	 * @param {Number} space 结果数字和单位之间的空格数量
	 * @returns {String} 转换后的数字
	 */
	numberToChange (num, digit, unit, space) {
		num = parseFloat(num)
		if (isNaN(num)) {
			return num
		}
		let unitArr = ['ZB', 'PB', 'TB', 'GB', 'MB']
		let numberArr = [1099511627776, 1073741824, 1048576, 1024, 0]
		let returnNum
		let param
		// 默认保留两位小数
		if (digit === null || typeof digit === 'undefined') {
			digit = 2
		}
		if (space === null || typeof space === 'undefined' || isNaN(space)) {
			space = 0
		}
		for (let i = 0; i < numberArr.length; i++) {
			let n = numberArr[i]
			if (num >= n && unit.indexOf(unitArr[i]) !== -1) {
				if (n === 0) {
			    	returnNum = this.toFixed(num, digit)
				} else {
					returnNum = this.toFixed(num / n, digit)
				}
				for (let j = 0; j < space; j++) {
					returnNum += ' '
				}
				param = {
					num: returnNum,
					unit: unitArr[i]
				}
				return param
			}
		}
		param = {
			num: num,
			unit: ''
		}
		return param
	},
	/**
	 * @func
	 * @desc 获取当前记录的序号
	 * @param {Number} pageNum - 当前页码
	 * @param {Number} pageSize - 每页展示条数
	 * @param {Number} index - 记录在当前页的序号
	 */
	getRecordIndex (pageNum, index, pageSize) {
		if (typeof pageNum === 'number') {
			if (typeof index === 'number') {
				if (pageSize && typeof pageSize === 'number') {
					return (pageNum - 1) * pageSize + index + 1
				} else {
					return (pageNum - 1) * 10 + index + 1
				}
			}
		}
		return 0
	}
}
