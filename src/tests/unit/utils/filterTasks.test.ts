import { filterTasks } from '../../../utils/filterTasks'; // Replace with the actual module name
import { ITask } from '../../../interfaces/task';

describe('filterTasks', () => {
  const mockTasks: ITask[] = [
    {
      id: 1,
      title: 'Task 1',
      status: 'todo',
      due: '2023-12-05',
      description:'Task 1 description'
    },
    {
      id: 2,
      title: 'Task 2',
      status: 'completed',
      due: '2023-11-30',
      description:'Task 2 description'
    },
  ];

  test('should filter tasks based on status', () => {
    const selectedStatusOptions = ['todo'];
    const selectedDateOptions: string[] = [];

    const result = filterTasks(mockTasks, selectedStatusOptions, selectedDateOptions);

    expect(result).toHaveLength(1);
    expect(result[0].status).toBe('todo');
  });

  test('should filter tasks based on date', () => {
    const selectedStatusOptions: string[] = [];
    const selectedDateOptions = ['Due Today'];

    const result = filterTasks(mockTasks, selectedStatusOptions, selectedDateOptions);

    expect(result).toHaveLength(0);
  });

  test('should filter tasks based on both status and date', () => {
    const selectedStatusOptions = ['pending'];
    const selectedDateOptions = ['Due Today'];

    const result = filterTasks(mockTasks, selectedStatusOptions, selectedDateOptions);

    expect(result).toHaveLength(0);
  });

  // Add more test cases as needed
});