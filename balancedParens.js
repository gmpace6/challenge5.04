// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

// loop over string, count each kind of ()
// 
function isItBalanced(string) {
  let open = 0;
  let closed = 0;
  for (let i = 0; i < string.length; i++) {
    if ((string[i] === `(`)) {
      (open += 1);
    } else if ((string[i] === `)`)) {
      (closed += 1);
    }
  }
  return open === closed
}
console.log(isItBalanced(sample1))
console.log(isItBalanced(sample2))
console.log(isItBalanced(sample3))
console.log(isItBalanced(sample4))