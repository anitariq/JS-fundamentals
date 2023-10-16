function addAndSubstract(num1, num2, num3){
    let result1 = sum(num1, num2);
    let result2 = subtract(result1, num3);

    function sum(num1, num2){
        return num1 + num2;
    }

    function subtract(num1, num2){
        return num1 - num2;
    }

    console.log(result2);
}
addAndSubstract(23, 6, 10);

// function addAndSubstract(num1, num2, num3){
//   let sum = (a, b) => a + b;
//   let subtract = (a, b) => a - b;

//    let result1 = sum(num1, num2);
//    let result2 = subtract(result1, num3);

//    console.log(result 2);