function positiveNegative(arr){
    let result = [];

    for(let numAsSring of arr){
        let num = Number(numAsSring);

        if (num <0){
            result.unshift(num);
        }else{
            result.push(num);
        }

    }

    for (let num of result){
        console.log(num);
    }




}
positiveNegative(['7', '-2', '8', '9'])