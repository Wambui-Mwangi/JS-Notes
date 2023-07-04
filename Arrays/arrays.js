let items = [2,5, "sweet", false, 7];

//Array Methods
items.push(62);      //Adding items at the end of the array
console.log(items);
items.unshift(6.5);  //Adding an item at the start of the array
console.log(items);
items.pop();         //Removing items at the end of the array
console.log(items);
items.shift();       //Removing items at the start of the array
console.log(items);

//Array Sorting
let num = [1,9,34,12,25,30];
let sorted = num.sort((a,b)=> a -b);
console.log(sorted)

//Given an array of x elements, return an array with each element in x multiplied by two
const result = num.map(
    (item)=>{
        return item*2
    }
)
console.log(result)

//Concatenation
let a = [1,2,3];
let b = [4,5,6];

let joined1 = a.concat(b);
console.log({joined1});

//spread operator. destructuring an array
let c = [1, 40, ...a, ...b];
console.log({c});

//destructuring 
let[z,x,...e] = c;
console.log({z});
console.log({x});
console.log({e});





