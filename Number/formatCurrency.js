/*
*当前日期：星期日
*文件路径：Number/formatCurrency.js
*IDE 名称：WebStorm
*/
// 导出一个格式化货币金额的函数
/**
 * 格式化金额
 * @param {number|string} amount - 要格式化的金额，支持数字和数字字符串
 * @param {number} [decimalPlaces=2] - 小数位数，默认为 2
 * @param {boolean} [showDecimals=true] - 是否显示小数部分，默认为 true
 * @param {boolean} [zeroAsEmpty=false] - 是否将 0 格式化为空字符串，默认为 false
 * @returns {string} - 格式化后的金额字符串
 */
export const formatCurrency = (amount, decimalPlaces = 2, showDecimals = true, zeroAsEmpty = false) => {
    // 尝试将输入转换为数字
    const numericAmount = parseFloat(amount);

    // 如果输入无效，抛出错误
    if (isNaN(numericAmount)) {
        throw new Error('Invalid amount');
    }

    // 如果金额为0并且配置了将0格式化为空字符串，则直接返回空字符串
    if (numericAmount === 0 && zeroAsEmpty) {
        return '';
    }

    // 确保金额为数字并格式化
    const amountString = numericAmount.toFixed(decimalPlaces);

    // 根据配置决定是否显示小数部分
    const integerPart = showDecimals ? amountString : amountString.split('.')[0];

    // 格式化整数部分为三位分隔符
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // 如果需要显示小数部分
    const decimalPart = showDecimals ? amountString.split('.')[1] || '' : '';

    // 拼接结果
    return `${formattedIntegerPart}${decimalPart ? '.' + decimalPart : ''}`;
};


// 示例调用
console.log(formatCurrency(1234567.890, 8)); // 输出 "1,234,567.89000000"
