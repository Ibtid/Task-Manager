import { formatDate } from '../../../utils/formateDate';

describe('formatDate function', () => {
  test('should format the date correctly', () => {
    const inputDate = '2023-12-02';
    const result = formatDate(inputDate);
    expect(result).toBe('Dec 2, 2023');
  });

  test('should format the date correctly for a single-digit day and month', () => {
    const inputDate = '2023-05-07';
    const result = formatDate(inputDate);
    expect(result).toBe('May 7, 2023');
  });

  test('should format the date correctly for a two-digit day and month', () => {
    const inputDate = '2023-11-15';
    const result = formatDate(inputDate);
    expect(result).toBe('Nov 15, 2023');
  });

  test('should handle an invalid date input gracefully', () => {
    const inputDate = 'invalid-date';
    const result = formatDate(inputDate);
    expect(result).toBe("undefined NaN, NaN");
  });
});