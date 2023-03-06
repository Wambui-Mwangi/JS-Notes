let a = "10";
let b = a*10;
console.log(b);
console.log(typeof(b)); //Implicit coercion
console.log(+b);
console.log(typeof(b)); //also implicit

//explicit coercion, use js methods
let c = Number(a);
console.log("c", typeof(c));
let d = String(c);
console.log("d", typeof(d));

let e = new Array(d);
console.log(e);

