function eligible_for_vote(age){
    if(age>=18){
        console.log("Eligible for vote")
    }else{
        console.log("Not eligiblr for vate")
    }
}
const rs=require("readline-sync");
var age=rs.questionInt("Enter your age:")
eligible_for_vote(age)