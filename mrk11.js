function sum(num){
    var i=1;
    var sum=0;
    while(i<=num){
        if(i%3==0 || i%5==0){
            sum+=i
        }
        i++
    }
    return sum
}
const rs=require("readline-sync");
var number=rs.questionInt("Enter your number:");
result=sum(number)
console.log(result)