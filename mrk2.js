// //In function Declaration:-

// function function_print_lines(name,profession){
//     console.log(`my name is ${name}.\nI am the ${profession} of Navgurukul.`);
// }
// function_print_lines("Meena Mahto","student")
// function_print_lines("Abhishek Gupta","Co-founder")

// // In self-invoking(IIFE) function:-

// (function function_print_lines(name,profession){
//     console.log(`my name is ${name}.\nI am the ${profession} of Navgurukul.`);
// })
// ("Meena Mahto","student")

// // ("Abhishek Gupta","Co-founder")

// // In Arrow function :-

// const lines=(names,profession)=>{
//     console.log(`My name is ${names},And i am the ${profession} of navgurukul.`)
// }
// lines("Meena Mahto","student")
// lines("Abhishek Gupta","Co-founder")


// // In Concise Arrow function Expression:-

// const lines=(names,profession)=>console.log(`My name is ${names},And i am the ${profession} of navgurukul.`)

// lines("Meena Mahto","student")
// lines("Abhishek Gupta","Co-founder")

// // In Anonymous function:-

const lines=function(name,profession){
    console.log(`My name is ${name},And i am the ${profession} of Navgurukul.`)
}
lines("Meena Mahto","student")
lines("Abhishek Gupta","Co-founder")