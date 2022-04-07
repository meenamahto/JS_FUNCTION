// // part-1:-

function add_number(number1,number2){
    console.log(number1+number2)
}
add_number(56,12)

// // part-2:-

function add_number_list(list1,list2){
    for(let i in list1){
        console.log(list1[i]+list2[i])
    }
}
add_number_list([50, 60, 10],[10, 20, 13])