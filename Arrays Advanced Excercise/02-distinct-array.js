function distinctArray(arr){
let uniqueNums = [];

for(let num of arr){
    if(!uniqueNums.includes(num)){
        uniqueNums.push(num)
    }
}
console.log(uniqueNums.join(` `));
}
distinctArray([20, 8, 12, 13, 4,

    4, 8, 5]);