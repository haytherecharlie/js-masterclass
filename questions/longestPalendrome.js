var longestPalindrome = function(s) {
  let longest = s[0]
  
  function loopPalendrome(l, r, count) {
      while(s.charAt(l-1) === s.charAt(r+1) && l-1 >= 0 && r+1 < s.length) {
          count += 2
          l -= 1
          r += 1
      }
      longest = longest.length >= count ? longest : s.substring(l, r + 1)
  }

  for(let i = 0; i < s.length; i++) {
      if(s.charAt(i) === s.charAt(i+1)) {
          loopPalendrome(i, i+1, 2)
      }
      if(s.charAt(i-1) === s.charAt(i+1)) {
          loopPalendrome(i-1, i+1, 3)
      }
  }
  
  return longest
  
};