function highestPalindrome(digits) {
  let result = 0;
  let a, b;
  if(digits == 3) {
    a = 999;
    b = 999;
  }
  for(let i = 1; i <= a; i++) {
    for(let x = 1; x <= b; x++) {
      var calc = i * x;
      var calcStr = calc.toString()
      var calcStrReverse = calcStr.split("").reverse().join("");
      if( calcStr === calcStrReverse && calc > result) {
        result = calc;	
      }
    }
  }
return result;
}
console.log(highestPalindrome(3));