const palindromes = function (string) {
  string = string.toLowerCase().replace(/[^a-z]/g, ""); // replace all characters that are not(^) a-z with "". Uses /g to find all matches(global)
  
  let stringReverse = string.split("").reverse().join("");
  return string === stringReverse;
  
};

// Do not edit below this line
module.exports = palindromes;
