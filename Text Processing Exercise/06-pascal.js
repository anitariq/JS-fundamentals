function pascal(str){
   

    let words = str.match(/[A-Z][a-z]+/g);

    let newStr = words.join(', ');

    console.log(newStr);
    
}
pascal('SplitMeIfYouCanHaHaYouCantOrYouCan');