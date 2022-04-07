// // part -1:-

function check_number(num1,num2){
    if(num1%2==0 && num2%2==0){
        console.log("both are even")
    }else{
        console.log("bothe are odd")
    }
}
check_number(3,4)
check_number(8,6)

// // part-2:-

function check_number_list(list1,list2){
    for (let i in list1){
        if(list1[i]%2==0 && list2[i]%2==0){
            console.log("both are even")
        }else{
            console.log("both are odd")
        }
    }
}
check_number_list([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87] )