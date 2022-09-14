const numbers =[12 , 54, 645, 98];
// for of loop .for of can not be used with object
/* for(const number of numbers){
    console.log(number)
} */

const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 }

/* const keys = Object.keys(bottle);
for (const key of keys) {
    // console.log(key)
    console.log(key ,bottle[key])
    // bottle[key] used to find value
} */

// for in loop .for in loop works on object.in here you doesn't need to find key separately
/* 
for (const key in bottle) {
    const value = bottle[key];
    console.log(key , value)
}
 */
// advanced shit with destructuring

for(const [key,value] of Object.entries(bottle)){
    console.log(key,value)
}