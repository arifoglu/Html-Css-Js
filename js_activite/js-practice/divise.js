//// Numbers that are divisible by 9 and 7
for(let i = 0 ; i < 100 ; i++ ){
    if(i%7 == 0){
        console.log(i + "can be divise 7");
    }
    if(i%9 == 0){
        console.log(i + "can be divise 9");
    }
    if(i%7 == 0 && i%9 == 0){
        console.log(i + "can be divise both 9 and 7")
    }
};

