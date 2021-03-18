/**
 * The Set object lets you store unique values of any type, whether primitive values or object references.
 * Here we're passing an number and casting it to a string then adding it to the set. 
 * 
 * This is useful when you want to count how many unique chars / digits / primitives, etc are in a value.
 */
function usingSet(str) {
  let set = new Set(String(str))
  set.add('poop')
  return set.size
}

console.log(usingSet(2222222))