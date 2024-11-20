import { formatCurrency } from '../Number/formatCurrency';

describe('formatCurrency', () => {
    it('should format a number to currency string', () => {
        expect(formatCurrency(1234.56)).toBe('1,234.56');
    });

    it('should format a string number to currency string', () => {
        expect(formatCurrency('1234.56')).toBe('1,234.56');
    });

    it('should handle zero as empty when specified', () => {
        expect(formatCurrency(0, 2, true, true)).toBe('');
    });

    it('should throw an error for invalid input', () => {
        expect(() => formatCurrency('invalid')).toThrow('Invalid amount: invalid');
    });
}); 