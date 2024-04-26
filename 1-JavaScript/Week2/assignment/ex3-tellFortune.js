'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-3-be-your-own-fortune-teller

Why pay a fortune teller when you can just program your fortune yourself?

1. Create four arrays, `numKids`, `partnerNames`, `locations` and `jobTitles`. 
   Give each array five random values that have to do with the name of 
   the variable.

2. Complete the function `selectRandomly`. This function should take an array 
   as a parameter and return a randomly selected element as its return value.

3. Complete the function named `tellFortune` as follows:

   - It should take four arguments (in the order listed): 
     * the array with the options for the number of children, 
     * the array with the options for the partner's name, 
     * the array with the options for the geographic location and 
     * the array with the options for the job title.
   - It should use the `selectRandomly` function to randomly select values from 
     the arrays.
   - It should return a string: "You will be a `jobTitle` in `location`, 
    married to `partnerName` with `numKids` kids."

4. Call the function three times, passing the arrays as arguments. Use `
   console.log` to display the results.

Note: The DRY principle is put into practice here: instead of repeating the code to 
randomly select array elements four times inside the `tellFortune` function 
body, this code is now written once only in a separated function.
-----------------------------------------------------------------------------*/

// This function should take an array as its parameter and return
// a randomly selected element as its return value.
function selectRandomly(/* TODO parameter(s) go here */array) {
  // TODO complete this function

  let randomly =Math.floor(Math.random()*array.length)
  return array[randomly]
 
  
}
function tellFortune(/* TODO add parameter(s) here */numKids,partnerNames,locations,jobTitles) {
  // TODO complete this function
  let kid = selectRandomly(numKids)
  let wife = selectRandomly(partnerNames)
  let location = selectRandomly(locations)
  let job= selectRandomly(jobTitles)
  return `you have ${kid}, partner name  ${wife}, you will be ${location}, ur job is ${job}`
}
// sol 2
// const selectRandomly=(arr)=> arr[Math.floor(Math.random()*arr.length)]
// const tellFortune=(numKids,partnerNames,locations,jobTitles)=>`${selectRandomly(numKids)},${selectRandomly(partnerNames)},${selectRandomly(locations)},${selectRandomly(jobTitles)},`
function main() {
  const numKids = [
    // TODO add elements here
    "Aziz J. 1",
    "Aziz J. 2",
    "Aziz J. 3",
    "Aziz J. 4"
    
  ];

  const partnerNames = [
    // TODO add elements here
    "girl 1",
    "girl 2",
    "girl 3",
    "girl 4"
  ];

  const locations = [
    // TODO add elements here
    "Sri Lanka",
    "Maldives",
    "Tailand",
    "Under the palm trees"

  ];

  const jobTitles = [
    // TODO add elements here
    "Trader",
    "Network marketing",
    "Transporter",
    "Developer"
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
