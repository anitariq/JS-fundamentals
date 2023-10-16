function isPallindrome(arr){
for(let curNum of arr){
    let isPallindrome = checkIsPallindrome(curNum);
    console.log(isPallindrome);

    function checkIsPallindrome(num){
        let numStr = String(num);
        let reversedNum = ``;

        for(let i = numStr.length - 1; i >= 0; i--){
            let curChar = numStr[i];
            reversedNum += curChar;
        }
        let isPallindrome = numStr == reversedNum;
        return isPallindrome;
    }
}


}
isPallindrome([123,323,421,121]);

// function palindromeInts(arr){
//  for(let num of arr){
//      let numStr = String(num);
//  let reversedNumStr = numStr.split(``).reverse().join(`);
//  console.log(numStr == reversedNumStr);    
//}
//}