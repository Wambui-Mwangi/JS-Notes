//Create ao object
let person = {
    name:'Ann',
    age:20,
    friend:{
        name:'Amanda',
        age:25,
        myFriend:{
            name:'Susan',
            age:21,
        }
    }
}

let person2 = new Object()
person2.name='Ann'        //Adding properties
person2['Age']=30;
console.log(person2);

person.age = 56;         //Updating properties
console.log({person});

console.log(person.name);    //Accessing a property
console.log(person.friend.myFriend.name);          //using dot notation
console.log(person['friend']['myFriend']['name']);    //using 

delete person.age; //deleting
console.log({person});

let person3 = Object.assign(person);     //cloning an object
console.log({person3});
let keys = Object.keys(person3);
console.log({keys});