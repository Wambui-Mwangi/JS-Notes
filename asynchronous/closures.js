const add = (a)=>{
    let num = 20;
    const subtract = (b) =>{
        return num +b-a
    }
    return subtract
}
let nums = add(50);
console.log({nums});
console.log(nums(25));


