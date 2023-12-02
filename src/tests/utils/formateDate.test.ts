import { formatDate } from '../../utils/formateDate';

describe('formatDate function', () => {
  test('should format the date correctly', () => {
    const inputDate = '2023-12-02';
    const result = formatDate(inputDate);
    expect(result).toBe('Dec 2, 2023');
  });
});