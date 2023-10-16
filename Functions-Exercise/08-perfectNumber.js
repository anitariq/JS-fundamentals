function perfectNumber(num){
    let sumProperDivisor = 0;

    for(let divisor = 1; divisor < num; divisor++){
        if(num % divisor == 0){
            sumProperDivisor += divisor
        }
    }

    if(sumProperDivisor == num){
        console.log("We have a perfect number!");
    }else {
        console.log("It\'s not so perfect.")
    }


}
perfectNumber(6);
perfectNumber(28);