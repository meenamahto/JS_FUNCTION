// // part-1:-

// function students(name){
//     console.log(`hello ${name}`)
// }
// students("Meena")

// // part-2:-

// function isgreater20(name,age=20){
//     console.log(`your name is ${name} and your age ${age}.`)
// }
// isgreater20("Meena",18)
// isgreater20("Vaishali")
// isgreater20("Anjali",21)

// // In Self-invoking function:-

// (function greater(name,age=20){
//     console.log(`My name is ${name},And my age is ${age}`)
// })
// ("meena",18)

// // in function Declaration:-

// const greater2=function(name,age=20){
//     console.log(`My name is ${name},And my age is ${age}`);
// }
// greater2("meena",18)
// greater2("vaishali")

// // in Arrow function:-

// const greater2=(name,age=20)=>{
//     console.log(`My name is ${name},And my age is ${age}`);
// }
// greater2("meena",18)
// greater2("vaishali")

// // In concise Arrow function:-

// const greater2=(name,age=20)=>console.log(`My name is ${name},And my age is ${age}`);

// greater2("meena",18)
// greater2("vaishali")

// // in function expression:-

const greater2=function (name,age=20){
    console.log(`My name is ${name},And my age is ${age}`);
}
greater2("meena",18)
greater2("vaishali")