import { formatDate } from '../../utils/formateDate';

describe('formatDate function', () => {
  test('should format the date correctly', () => {
    // Arrange
    const inputDate = '2023-12-02';

    // Act
    const result = formatDate(inputDate);

    // Assert
    expect(result).toBe('Dec 2, 2023');
  });

  // Add more test cases as needed
});