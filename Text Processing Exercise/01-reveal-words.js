function revealWords(wordStr, text){
    let words = wordStr.split(', ');

    for(let word of words){
        let starTemplate = '*'.repeat(word.length);

        text = text.replace(starTemplate, word);
       
    }

    console.group(text);


}
revealWords('great',

'softuni is ***** place for learning new programming languages')