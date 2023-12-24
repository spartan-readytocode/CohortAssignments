let count = 0;
function incrementor() {
  count++;
  console.log(`The count is  : ${count}`);
}
// we can take input from the user too for how much time
// the user wants to count , but here i taken that input as 10 seconds

const intervals = setInterval(incrementor, 1000);
setTimeout(() => {
  incrementor();
  clearInterval(intervals);
}, 10000);
