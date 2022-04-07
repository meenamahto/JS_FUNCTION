function speed(num){
    if(num<=70){
        console.log("okay",num)
    }else {
        var point=Math.floor((num-70)/5)
        if(point<=12){
            console.log("speed is more than 70 and","point=",point)
        }else{
            console.log("Licence suspended because","point=",point)
        }
    }
}
const rs=require("readline-sync");
var num=rs.questionInt("Enter your speed:")
speed(num)
