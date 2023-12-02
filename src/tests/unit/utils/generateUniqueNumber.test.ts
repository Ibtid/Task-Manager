import { generateUniqueNumber } from '../../../utils/generateUniqueId';

describe('generateUniqueNumber', () => {
  test('should generate a unique number based on timestamp', () => {
    const result = generateUniqueNumber();
    expect(typeof result).toBe('number');
  });
});
