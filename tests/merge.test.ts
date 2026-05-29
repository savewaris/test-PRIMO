import { merge } from '../src/merge';

describe('merge function structural and edge cases', () => {
  
  test('should successfully merge standard balanced inputs', () => {
    const c1 = [1, 4, 7];
    const c2 = [8, 5, 2]; // Descending order
    const c3 = [3, 6, 9];
    
    expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('should handle arrays of different lengths', () => {
    const c1 = [1, 10];
    const c2 = [9, 6, 4, 2];
    const c3 = [3, 5, 7, 8, 11, 12];
    
    expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  test('should handle negative numbers and zero', () => {
    const c1 = [-5, -1, 0];
    const c2 = [10, 4, -2];
    const c3 = [-3, 1, 2];
    
    expect(merge(c1, c2, c3)).toEqual([-5, -3, -2, -1, 0, 1, 2, 4, 10]);
  });

  test('should accurately retain duplicate elements across arrays', () => {
    const c1 = [1, 2, 2];
    const c2 = [4, 3, 2];
    const c3 = [2, 5, 6];
    
    expect(merge(c1, c2, c3)).toEqual([1, 2, 2, 2, 2, 3, 4, 5, 6]);
  });

  test('should run smoothly with empty input variations', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [3])).toEqual([1, 2, 3]);
    expect(merge([], [5, 2], [])).toEqual([2, 5]);
  });
});