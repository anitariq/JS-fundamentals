function replaceRepeatingChars(str){
    let newStr = '';
    let prevChar = '';

    for(char of str){
        if(char !== prevChar){
            newStr += char;
            prevChar = char;
        }
    }

    console.log(newStr);

}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');