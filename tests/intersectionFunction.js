function intersection(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    const current = arr1[i];
    
    if (arr2.includes(current) && !result.includes(current)) {
      result.push(current);
    }
  }

  return result;
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(intersection([10, 20, 30], [40, 50, 60]));
console.log(intersection([7, 8, 9], [7, 8, 9]));
console.log(intersection([1, 2, 2, 3], [2, 2, 3, 4]));

