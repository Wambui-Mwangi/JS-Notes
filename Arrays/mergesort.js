// function divideArray(arr){
// if (arr.length<=1){
//     return arr;
// }
// let middle = Math.floor(arr.length/2);
// let left = arr.slice(0,middle);
// let right = arr.slice(middle);
// console.log({left});
// console.log({right});

// return sortedArray(divideArray(left), divideArray(right));
// }

// function sortedArray(left,right){
//     let emptyArray =[];

//     while(left.length && right.length){
//         if(right[0]<left[0]){
//             emptyArray.push(right.shift());
//         }
//         else{
//             emptyArray.push(left.shift());
//         }
//     }
//     console.log({emptyArray});
//     return[...emptyArray, ...left, ...right];
// }

// let arr = [3,10,2,26,15,11,4];
// console.log(divideArray(arr));





//Personal Practice
// let arr1=Array(123,89,5,23,9,56);

// function div(arr1) {
//     if(arr1.length<=1){
//         return arr1;
//     }

//     let midpoint = Math.floor(arr1.length/2);
//     let leftside = arr1.slice(0, midpoint);
//     let rightside = arr1.slice(midpoint);
//     return sorty(div(leftside), div(rightside));

// }

// function sorty(left,right){
//    let empty = [];
//    while (left.length && right.length ) {
//     if (right[0]<left[0]) {
//         empty.push(right.shift());
//     }
//     else{
//         empty.push(left.shift());
//     }
//    }
//    return [...empty,...left,...right];

// }
// let number = div(arr1);
// console.log(number);

// // console.log(div(arr1));

// function targetSearch(arr1, target){
//     let leftIn = 0;
//     let rightIn = arr1.length-1;

//     while (leftIn<=rightIn) {
//         let mid = Math.floor((leftIn+rightIn)/2);
//         if (arr1[mid]===target) {
//             return mid;
//         }
//         else if (arr1[mid]< target) {
//             leftIn = mid+1;
//         }
//         else{
//             rightIn = mid-1;
//         }
//     }
// }
// // let number = arr1;
// let target = 89;
// console.log(targetSearch(number, target));






//New Question
let arrayOfNumers = [23, 67, 12, 9, 1,6,101];

//Merge Sort
function division(arrayOfNumers) {
    if (arrayOfNumers.length<=1) {
        return arrayOfNumers;
    }
    let middle = Math.floor(arrayOfNumers.length/2);
    let left = arrayOfNumers.slice(0, middle);
    let right = arrayOfNumers.slice(middle);
    return msort(division(left), division(right))
}

function msort(left, right) {
    let emp = [];
    while (left.length && right.length) {
    
        if (left[0]<right[0]) {
            emp.push(left.shift());
        }
        else{
            emp.push(right.shift());
        }
    }
    return [...emp, ...left, ...right]
}
let numbers = division(arrayOfNumers)
console.log(numbers);

//Binary search
function binarysearch(arr, target){
    
    let left = 0;
    let right = arrayOfNumers.length-1;
    console.log({left});
    console.log({right});

    while (left<=right) {
        let mid = Math.floor((left+right)/2);
        if (arr[mid]===target) {
            return mid;
    }
        else if (arr[mid]< target) {
            left = mid+1;
    }
        else{
            right = mid-1;
        }
            }
        }
let target = 12;
console.log(binarysearch(numbers, target));

//Array Sorting
let num = [1,9,34,12,25,30];
let sorted = num.sort((a,b)=> a -b);
console.log(sorted)

//Given an array of x elements, return an array with each element in x multiplied by two
const result = num.map((item)=>{
        return item*2
    }
)

