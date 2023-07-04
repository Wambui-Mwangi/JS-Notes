let a = 20;   //global variable, can be accessed everywhere

function add(b) {
    console.log(a+b);
    let c = 30;   //local variable, accesible in the scope defined
    console.log(a+b+c);;
}
add(20);
// console.log(c);

function greet(){
    let hello = "Hey";
    function talk(){
        let greeting = "Hello there";
        console.log(`${hello} ${greeting}`);
    }
    talk()
}
greet()




