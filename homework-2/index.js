// Largest palindrome product
// Problem 4

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function palindromeCheck(num) {
  //reverse the number
  let numReversed = `${num}`.split("").reverse().join("");

  //Returns "true" if the reverse number is equal to the original number. Otherwise it returns "false".
  return parseInt(numReversed) === num;
}

function findLargestPalindrome(n) {
  // n is using for digits

  let largestPalindrome = 0;

  // Find the largest palindrome number
  // Repeat is a string function, we need to define it as a string.
  let largestNumber = "9";
  // the number repeats n -1 times because we already have a digit
  largestNumber += largestNumber.repeat(n - 1);
  // convert to number
  largestNumber = Number(largestNumber);

  // ---- Loops for find to largest palindrome number with n digits ----
  let i = largestNumber;

  while (i > 0) {
    let j = largestNumber;

    while (j > 0) {
      // We will check the n digit number to find the palindrome number
      // For example, for n=2, the numbers will be multiplied one by one. (i x j)
      // 99 x 99, 99x98, ..., 80x99, 80x98, ..., 10x10.

      let checkNum = i * j;

      // If the largest number of palindromes is found, the loop is terminated. Therefore, we will not take any action.
      if (palindromeCheck(checkNum)) {
        largestPalindrome = checkNum;
        j = 0;
        i = 0;
      }

      j--;
    }

    i--;
  }
  // ----

  return `The largest palindrome made from the product of two ${n} digit numbers: ${largestPalindrome}`;
}

console.log(findLargestPalindrome(1));
console.log(findLargestPalindrome(2));
console.log(findLargestPalindrome(3));
console.log(findLargestPalindrome(4));
console.log(findLargestPalindrome(5));
