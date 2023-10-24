function sorted(arr){
    let sortedArr = arr.sort((a, b) => a - b);
    let newArr = [];

    while(sortedArr.length > 0){
        let maxNum = sortedArr.pop();
        let minNum = sortedArr.shift();

        newArr.push(maxNum, minNum);
        
    }
    console.log(newArr.join(` `));
}
sorted([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])