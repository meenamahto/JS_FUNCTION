function sum_average(num1,num2,num3){
    sum=num1+num2+num3
    console.log("sum=",sum)
    console.log("average=",sum/3)
}
const rs=require("readline-sync");
var num1=rs.questionInt("Enter your first number:");
var num2=rs.questionInt("Enter your second number:");
var num3=rs.questionInt("Enter your third number:");
sum_average(num1,num2,num3)