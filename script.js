'use strict';

// Set 4:

// 1.Write a JavaScript program to check if a given number is positive, negative, or zero.
// Sample Input:5
// Sample Output:Positive.

function checkNumber(number) {
  if(number > 0) {
    console.log("Positive");
  }
  else if(number < 0) {
    console.log("Negative");
  }
  else {
    console.log("Zero");
  }
}


// Output
checkNumber(-5)
checkNumber(5);


// 2.Write a JavaScript program to calculate the sum of two numbers entered by the user.
// Sample Input:5,10
// Sample output:15

let firstNumber = parseFloat(prompt("Enter the first number"));

let secondNumber = parseFloat(prompt("Enter the second number"));

let sum = firstNumber + secondNumber;

// Output

console.log(sum);

// 3.Write a JavaScript function to check if a given number is even or odd.
// Sample Input:10
// Sample output:even

function checkEvenOrOdd(number){
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd")
  }
}

checkEvenOrOdd(10);
checkEvenOrOdd(7);

// 4.Write a JavaScript program to find the largest number among three numbers entered by the user.
// Sample Input:5,10,3
// Sample output:10

let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));
let number3 = parseFloat(prompt("Enter the third number:"));

let largestNumber = Math.max(number1, number2, number3);

// Output
console.log("The largest number is:", largestNumber);



// 5.Write a JavaScript program to find the sum of all multiples of 3 or 5 below a given number.
// Sample Input:10
// Sample output:23

function findSumOfMultiples(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// Output
console.log(findSumOfMultiples(10));  


// 6.Write a JavaScript function to check if a given string is a valid URL.
// Sample Input: ("https://www.example.com");
// Sample Output:true

function isValidURL(url) {
  const regex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/[\w.-]*)*\/?$/i;
  return regex.test(url);
}

// Output
console.log(isValidURL("https://www.example.com"));       

console.log(isValidURL("https://example"));               


// 7.Write a JavaScript program to find the longest word in a sentence.
// Sample Input: The quick brown fox jumps over the lazy dog.
// Sample Output:quick.

function findLongestWord(sentence) {

  const sanitizedSentence = sentence.replace(/[^\w\s]/g, '');
  
  const words = sanitizedSentence.split(' ');

  let longestWord = '';
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length > maxLength) {
      longestWord = word;
      maxLength = word.length;
    }
  }

  return longestWord;
}

// Output

console.log(findLongestWord('The quick brown fox jumps over the lazy dog')); 


// 8.Write a JavaScript function to reverse the order of words in a sentence while maintaining the order of punctuation marks.
// Sample Input: Hello, world!
// Sample Ouput: world, Hello!

function reverseSentence(sentence) {
  const words = sentence.split(/\b/);
  const reversedWords = words.reverse();
  const reversedSentence = reversedWords.join('');
  
  return reversedSentence;
}

// Output
console.log(reverseSentence("Hello, world!")); 


// 9.Write a JavaScript program to find the number of possible combinations given a set of numbers and a target sum.
// Sample Input:( 2, 4, 6, 8], 10);
// Sample Ouput: 3

function findCombinations(numbers, targetSum) {
  let count = 0;

  function backtrack(index, currentSum) {
    if (currentSum === targetSum) {
      count++;
      return;
    }

    if (currentSum > targetSum || index >= numbers.length) {
      return;
    }
    backtrack(index, currentSum + numbers[index]);
    backtrack(index + 1, currentSum);
  }

  backtrack(0, 0);
  return count;
}

// Output
const numbers = [2, 4, 6,];
const targetSum = 6;
const combinations = findCombinations(numbers, targetSum);
console.log("Number of combinations:", combinations);



// 10.Write a JavaScript program to implement a queue data structure using an array.
// Sample Input: const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.dequeue();
// Sample Output:[2]

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

// Output
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size()); // Output: 3

console.log(queue.front()); // Output: 10

console.log(queue.dequeue()); // Output: 10

console.log(queue.isEmpty()); // Output: false

queue.clear();

console.log(queue.isEmpty()); // Output: true

