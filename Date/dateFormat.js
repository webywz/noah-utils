/*
*当前日期：星期日
*文件路径：Date/dateFormat.js
*IDE 名称：WebStorm
*/
import dayjs from "dayjs";

/** 日期格式化 使用说明 new Date().format('YYYY-MM-DD HH:mm:ss') **/
Date.prototype.format = function (format) {
    return this ? dayjs(this).format(format) : '';
}
/** 获取当前月份包含的天数。 **/
Date.prototype.daysInMonth = function (date) {
    return this ? dayjs(date).daysInMonth() : '';
}
console.log(new Date().format('YYYY-MM-DD'))
console.log(new Date().daysInMonth('2023-02-01'))