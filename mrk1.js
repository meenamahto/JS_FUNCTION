// // part-1:-

// function ask_question(){
//     console.log("Who is the founder of Facebook?")
//     console.log("1) Mark Zuckerberg\n2) Bill Gates\n3) Steve Jobs\n4) Larry Page")
// }
// var i=1;
// while(i<=5){
//     ask_question()
//     i++
// }

// // part-2:-

// function ask_question(){
//     console.log("Who is the founder of Facebook?")
//     console.log("1) Mark Zuckerberg\n2) Bill Gates\n3) Steve Jobs\n4) Larry Page")
// }
// var i=1;
// while(i<=100){
//     ask_question()
//     i++
// }


// // debugging:-

// isEven()

// function isEven(){
//     if (12%2==0){
//         console.log("Even Number")
//     }
//     else{
//         console.log("odd number")
//     }
// }

// // in function of javascript:-

// function say_hello(name){
//     console.log(`Hello ${name}\nHow are you?`)
// }
// say_hello("meena")


const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
const member = {
    firstName:"Hege",
    lastName: "Nilsen",
}
  
let fullName = person.fullName.bind(member);
console.log(member)