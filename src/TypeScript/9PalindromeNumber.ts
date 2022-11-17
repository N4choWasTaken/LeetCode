/**
 * Leetcode problem nr.9 - https://leetcode.com/problems/palindrome-number/
 */

function isPalindrome(x: number): boolean {
    return (Number(x.toString().split('').reverse().join('')) == x);
};