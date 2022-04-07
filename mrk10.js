function even_odd(num){
    for(let i=1;i<=num;i++){
        if(i%2==0){
            console.log(i,"even")
        }else{
            console.log(i,"odd")
        }
    }
}
const rs=require("readline-sync");
var number=rs.questionInt("Enter your number:")
even_odd(number)