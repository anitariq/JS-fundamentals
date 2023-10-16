function oddOrEven(num){
let evenSum = 0;
let oddSum = 0;

let numAsString = num.toString();

for(let char of numAsString){
let digit = Number(char);

if(digit % 2 == 0){
evenSum += digit;
}else{
    oddSum += digit;
}


}

console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddOrEven(1000435)
