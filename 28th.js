function isPalindrome(str) {

  const alphanumericStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');


  const reversedStr = alphanumericStr.split('').reverse().join('');


  return alphanumericStr === reversedStr;
}

const testString = "A man, a plan, a canal, Panama!";
const isTestPalindrome = isPalindrome(testString);
console.log(isTestPalindrome); 
