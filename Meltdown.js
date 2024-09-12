/*
Create a function capitalizeWords(arr) that takes an array of strings and returns a new array where each string is capitalized (first letter uppercase).
Create a function filterPrimes(arr) that takes an array of numbers and returns a new array with only the prime numbers.
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

function removeFalsyValues(arr){
    let result = arr.filter(falsy => Boolean(falsy));
    return result
}
console.log(removeFalsyValues([null,5,8,0,NaN,""]))


function countPositives(arr){
let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            count++
        }
    }
    return count
}
console.log(countPositives([1,5,7,9,-5000,-8,10]))

