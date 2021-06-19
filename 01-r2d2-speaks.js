/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.

    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms


// then
    There are no mocha tests for this code.
    Run the following two lines beneath the function
    to see if your code demonstrates the expected behavior.

*/
// 0: log "beep" then pause of 400ms
 // 1: log "boop" then pause of 800ms

 // if you get a 0, you have to console.log("beep") then a 400ms pause.
 // base case should be when code.length is false
// 1. assign an variable to code[0].
// if code[0] = 1. return setTimeout(() => recursion, console.log(boop)), 800
// if code[0] = 0, return .....

function r2d2Speaks(code) {
  if (!code.length) return;
  const firstInLine = code[0];
  if (firstInLine === 0) {
      console.log("beep");
      return setTimeout(() => {
          r2d2Speaks(code.slice(1));
      }, 400)
  } else {
      console.log("boop");
      return setTimeout(() => {
          r2d2Speaks(code.slice(1));
      }, 800)
  }
}

let code = [0, 1, 1, 0];
r2d2Speaks(code);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}
