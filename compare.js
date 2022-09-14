/* const first = {a: 2};
const second = {a: 2};
const third = second;
if (third === second) {
    console.log('they are fucking same')
} else {
    console.log('different')
} */

// fokira method for comparing object or array.don't use it.order matter now.

const first = {a: 2 , b:5 , c:9 , e:8};
const second = {a: 2 , c:9 , b:5};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

/* if (firstString === secondString) {
    console.log('they are fucking same')
} else {
    console.log('different')
} */

function compareObject(first,second){
    const firstKey = Object.keys(first);
    const secondKey = Object.keys(second);
    if(firstKey.length === secondKey.length){
        for (const key of firstKey) {
            // console.log(key)
            if (first[key] !== second[key]) {
                return false;
            } 
        }
        return true;
        // console.log('again they are fucking same shit')
    }
    else{
        return false;
    }
}

const isSame = compareObject(first,second);
console.log(isSame)