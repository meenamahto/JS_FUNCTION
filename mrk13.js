function check(name1,name2){
    if(name1.length>name2.length){
        console.log(name1,"is greater")
    }else if(name1.length==name2.length){
        console.log("both are Equal")
    }else{
        console.log(name2,"is greater")
    }
}
const rs=require("readline-sync");
var name1=rs.question("ENter your first name:");
var name2=rs.question("Enter your second name:")
check(name1,name2)