/*
NEWTOPIC 
1.Write a fx which implements shuffle
*/

const shuffle = function (item) {
  return item
    .map((item) => ({ sort: Math.random(), value: item }))
    .sort((item1, item2) => item1.sort - item2.sort)
    .map((item) => item.value);
};
console.log(shuffle([1, 2, 5, 3, 1, 4, 1, 8]));

//ANSWER :This function can take any number of values , either array , objects or random variables

// first we map through the passing iteams and assign a random key to evry item and store them as an array of objects in which each object has a random key and value which is equal to that of the mapped item

// in second step of chaining we sort these array objects accoriding to their key

// lastly we map a the sorted array with only the values , values which were our items to shuffle

// the random fx and sort() does the shuffling here
