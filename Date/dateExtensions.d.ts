interface DateConstructor {
    diffWith(
        startDate: string | number | Date,
        endDate: string | number | Date,
        unit?: 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'
    ): number;
}

interface Date {
    format(format: string): string;
    daysInMonth(): number;
    startOfWeek(): Date;
    compareTo(dates: (string | number | Date)[], format?: string): number[];
    compareWithDates(dates: (string | number | Date)[]): {
        value: number;
        date: string;
        relation: '早于' | '等于' | '晚于';
    }[];
    add(
        amount: number,
        unit?: 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'
    ): Date;
} 