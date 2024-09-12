/*Write a function removeDuplicates(arr) that removes all duplicate elements from an array and returns the unique elements.
Create a function capitalizeWords(arr) that takes an array of strings and returns a new array where each string is capitalized (first letter uppercase).
Create a function filterPrimes(arr) that takes an array of numbers and returns a new array with only the prime numbers.
Write a function removeFalsyValues(arr) that removes all falsy values (like 0, null, undefined, false, "", NaN) from an array.
Write a function countPositives(arr) that counts how many positive numbers exist in an array.
Write a function isSorted(arr) that checks whether an array is sorted in ascending order. Return true if it is, otherwise false.
Write a function createRange(start, end) that returns an array with numbers starting from start to end
8.Write a function mostFrequent(arr) that returns the most frequently occurring element in the array.
Create a function countOccurrences(arr, element) that returns how many times a particular element appears in an array.*/
function removeDuplicates(arr){
    const result = arr.filter((word,index) => arr.indexOf(word) == index);
    return result
}
console.log(removeDuplicates(["Hi","Hi","Hey","Hello"]))

function filterPrimes(arr){
   
}
console.log(filterPrimes([1,2,5,13,50]))