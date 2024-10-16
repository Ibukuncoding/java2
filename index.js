//reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

//count characters//
function countCharacters(str) {
    return str.length;
}

//capitalize words//
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

//array functions
//find maximum
function findMax(arr) {
    return Math.max(...arr);
}
//find minimum
function findMin(arr) {
    return Math.min(...arr);
}
//sum of array
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
//filter array
function filterArray(arr, condition) {
    return arr.filter(condition);
}
//Mathematical functions
//factorial
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    return n === 0 ? 1 : n * factorial(n - 1);
}
//prime number check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
//fibonacci sequence
function fibonacci(n) {
    const sequence = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) sequence.push(0);
        else if (i === 1) sequence.push(1);
        else sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
