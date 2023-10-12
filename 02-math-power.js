function power(n, exponent){
let product = 1;

for( let i = 0; i < exponent; i++){
    product *= n;
}
console.log(product);

}
power(2, 8);