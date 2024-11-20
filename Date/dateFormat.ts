/*
*当前日期：星期日
*文件路径：Date/dateFormat.ts
*IDE 名称：WebStorm
*/
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";

dayjs.extend(weekday);

/** 格式化日期 **/
Date.prototype.format = function (format: string): string {
    return dayjs(this).format(format);
}

/** 获取当前月份包含的天数 **/
Date.prototype.daysInMonth = function (): number {
    return dayjs(this).daysInMonth();
}

/** 获取当前日期所在周的开始日期 **/
Date.prototype.startOfWeek = function (): Date {
    return dayjs(this).weekday(0).toDate();
}

/** 比较多个日期大小，返回数组，元素为 -1, 0, 1 分别表示小于、等于、大于 **/
Date.prototype.compareTo = function (dates: (string | number | Date)[], format: string = 'YYYY-MM-DD'): number[] {
    const thisDate = dayjs(this);
    return dates.map(date => {
        const otherDate = dayjs(date);
        if (!otherDate.isValid()) {
            throw new Error(`无效的日期格式: ${date}`);
        }
        if (thisDate.isBefore(otherDate)) {
            return -1;
        } else if (thisDate.isAfter(otherDate)) {
            return 1;
        } else {
            return 0;
        }
    });
}

/** 比较多个日期大小，返回详细的比较结果 
 * @param dates 要比较的日期数组，支持时间戳、字符串日期、Date对象
 * @returns 返回比较结果数组，包含比较值、格式化后的日期、关系描述
 * @example
 * const date = new Date();
 * date.compareWithDates(['2023-12-31', 1672531199000, new Date()]);
 **/
Date.prototype.compareWithDates = function (dates: (string | number | Date)[]): {
    value: number;
    date: string;
    relation: '早于' | '等于' | '晚于';
}[] {
    const thisDate = dayjs(this);
    
    return dates.map(date => {
        const otherDate = dayjs(date);
        if (!otherDate.isValid()) {
            throw new Error(`无效的日期格式: ${date}`);
        }

        let value: number;
        let relation: '早于' | '等于' | '晚于';

        if (thisDate.isBefore(otherDate)) {
            value = -1;
            relation = '早于';
        } else if (thisDate.isAfter(otherDate)) {
            value = 1;
            relation = '晚于';
        } else {
            value = 0;
            relation = '等于';
        }

        return {
            value,
            date: otherDate.format('YYYY-MM-DD HH:mm:ss'),
            relation
        };
    });
}

/** 计算两个日期之间的差值，并返回指定单位的计算结果
 * @param startDate 开始日期
 * @param endDate 结束日期
 * @param unit 返回值的单位：'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'
 * @returns 返回指定单位的差值
 * @example
 * const result = Date.diffWith('2023-12-31', '2024-01-01', 'day'); // 返回天数差
 * const result2 = Date.diffWith(new Date(), '2024-01-01', 'hour'); // 返回小时差
 **/
Date.diffWith = function (
    startDate: string | number | Date,
    endDate: string | number | Date,
    unit: 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year' = 'day'
): number {
    const start = dayjs(startDate);
    const end = dayjs(endDate);
    
    if (!start.isValid() || !end.isValid()) {
        throw new Error('无效的日期格式');
    }
    
    return end.diff(start, unit);
}

/** 日期加减计算
 * @param amount 要加减的数量，正数为加，负数为减
 * @param unit 计算的单位：'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'
 * @returns 返回计算后的新日期
 * @example
 * const date = new Date();
 * date.add(1, 'day'); // 加一天
 * date.add(-2, 'month'); // 减两个月
 **/
Date.prototype.add = function (
    amount: number,
    unit: 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year' = 'day'
): Date {
    return dayjs(this).add(amount, unit).toDate();
}

// 使用示例
const currentDate = new Date();
console.log('基础格式化:', currentDate.format('YYYY-MM-DD')); 
console.log('当月天数:', currentDate.daysInMonth()); 
console.log('本周开始:', currentDate.startOfWeek()); 

// 比较示例
const comparisonDates = [
    '2023-12-31',           // 字符串日期
    1672531199000,          // 时间戳
    new Date(),             // Date对象
    '2024-01-01 12:30:45'   // 带时间的字符串日期
];

console.log('简单比较结果:', currentDate.compareTo(comparisonDates));
console.log('详细比较结果:', currentDate.compareWithDates(comparisonDates)); 