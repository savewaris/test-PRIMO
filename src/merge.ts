/**
 * Merges three sorted arrays into a single ascending sorted array.
 * @param collection_1 Sorted from min(0) to max (Ascending)
 * @param collection_2 Sorted from max to min(0) (Descending)
 * @param collection_3 Sorted from min(0) to max (Ascending)
 */
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];
  
  let p1 = 0;                         // Starts at index 0 (min value)
  let p2 = collection_2.length - 1;   // Starts at the last index (min value)
  let p3 = 0;                         // Starts at index 0 (min value)

  const len1 = collection_1.length;
  const len3 = collection_3.length;

  // Continue looping until all elements from all 3 arrays are processed
  while (p1 < len1 || p2 >= 0 || p3 < len3) {
    // If a pointer is out of bounds, treat its value as Infinity
    const v1 = p1 < len1 ? collection_1[p1] : Infinity;
    const v2 = p2 >= 0 ? collection_2[p2] : Infinity;
    const v3 = p3 < len3 ? collection_3[p3] : Infinity;

    // Find the minimum among the current values and push it to the result
    if (v1 <= v2 && v1 <= v3) {
      result.push(v1);
      p1++;
    } else if (v2 <= v1 && v2 <= v3) {
      result.push(v2);
      p2--; // Move backwards because collection_2 is descending
    } else {
      result.push(v3);
      p3++;
    }
  }

  return result;
}