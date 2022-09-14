const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 }

// all keys of bottle Object 
const keys = Object.keys(bottle);
// console.log(keys);

/*  const bottle = {(color: =keys ) ('yellow' = value)}*/

// all value of bottle Object 

const value = Object.values(bottle);
// console.log(value);

// key and value together in two dimensional array 

/* const pair = Object.entries(bottle);
console.log(pair)
const twoDimensionalArray = [
    ['color', 'yellow'],
    ['price', 50],
    ['isCleaned', true],
    ['capacity', 1]
]; */

// how to seal any Object ? seal prevent deleting anything also prevent adding anything but let you modify which property are there
// Object.seal(bottle);
// object freeze.it totally freeze an object.doesn't let you don anything.
// Object.freeze(bottle);
// how to delete any Object property

/* delete bottle.isCleaned;
console.log(bottle) */
