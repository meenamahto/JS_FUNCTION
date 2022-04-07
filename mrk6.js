// // part-1:-

function calaulator(num1,num2,operator){
    if(operator=="+"){
        return num1+num2
    }else if(operator=="-"){
        return num1-num2
    }else if(operator=="*"){
        return num1*num2
    }else if(operator=="/"){
        return num1/num2
    }
}
const rs=require("readline-sync");
var num1=rs.questionInt("Enter your first number:");
var num2=rs.questionInt("Enter your second number:");
var operator=rs.question("Eter your expression:")
var result=calaulator(num1,num2,operator)
console.log(result)

// // part-2:-

function change_list(list1,list2){
    let list3=[]
    for (let i in list1){
        list3.push(list1[i]*list2[i])
    }
    return list3
}
var result=change_list([5, 10, 50, 20], [2, 20, 3, 5])
console.log(result)