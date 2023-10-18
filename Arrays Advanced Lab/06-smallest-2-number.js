 function smallest2Numbers(arr){
    arr.sort((a,b) => a - b);
    let result = arr.slice(0, 2);

    console.log(result.join(` `));


 }
 smallest2Numbers ([30, 15, 50, 5]);


