let student = {
    name: 'Steve',
    age:19,
    greet:function(){
        console.log('Hello');
        console.log(`Hello, my name is ${student.name} and my age is ${student.age} years old`);
        console.log(`Hello, my name is ${this.name} and my age is ${this.age} years old`);
    }
}
student.greet()
student.talk = () => {
    console.log('Hello there');
}
student.talk()