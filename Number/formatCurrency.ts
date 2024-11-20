export const formatCurrency = (
    amount: number | string,
    decimalPlaces: number = 2,
    showDecimals: boolean = true,
    zeroAsEmpty: boolean = false
): string => {
    const numericAmount = parseFloat(amount as string);

    if (isNaN(numericAmount)) {
        throw new Error(`Invalid amount: ${amount}`);
    }

    if (numericAmount === 0 && zeroAsEmpty) {
        return '';
    }

    let options = {
        minimumFractionDigits: showDecimals ? decimalPlaces : 0,
        maximumFractionDigits: showDecimals ? decimalPlaces : 0
    };

    return numericAmount.toLocaleString(undefined, options);
}; 