function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  });
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
});

// Write your code below:


const withAsync = async(num) => {
  if(num === 0){
    return 'zero'
  } else {
    return 'not zero'
  }
};







// Leave this commented out until step 3:
/*
withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})
*/


//+++++++++++++++++++++++++ instructions +++++++++++++++++


/*

1.  We provided a function withConstructor() which takes in a number. If the number is 0, it returns a promise that resolves to the string 'zero'. If the number is not 0, it returns a promise that resolves to the string 'not zero'. Take a moment to understand this function and the code that follows. 

2.

Write an async function, withAsync() which reproduces the functionality of withConstructor(). Though your function will return a promise, it should not construct the promise using the new keyword. Instead, it should rely on the fact that an async function automatically returns a promise.
 */