/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let i = 0, map = {}, ans = 0
  
  for(let j = 0; j < s.length; j++) {
      if(map.hasOwnProperty(s[j])) {
          i = Math.max(map[s[j]], i)
      }
      ans = Math.max(ans, j - i + 1)
      map[s[j]] = j + 1
  }
  return ans
};

console.log(lengthOfLongestSubstring("abcabcbb"))