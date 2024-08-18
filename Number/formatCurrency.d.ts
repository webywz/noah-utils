// Number/formatCurrency.d.ts

declare module 'Number/formatCurrency' {
    /**
     * 格式化金额
     * @param {number|string} amount - 要格式化的金额，支持数字和数字字符串
     * @param {number} [decimalPlaces=2] - 小数位数，默认为 2
     * @param {boolean} [showDecimals=true] - 是否显示小数部分，默认为 true
     * @param {boolean} [zeroAsEmpty=false] - 是否将 0 格式化为空字符串，默认为 false
     * @returns {string} - 格式化后的金额字符串
     */
    export function formatCurrency(amount: number | string, decimalPlaces?: number, showDecimals?: boolean, zeroAsEmpty?: boolean): string;
}
