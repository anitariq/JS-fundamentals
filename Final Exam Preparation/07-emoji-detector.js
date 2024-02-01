function emojiDetector(input){
    let pattern = input[0].match(/([:*]{2})([A-Z][a-z]{2,})\1/g);
    
    let digits = input[0].match(/\d/gm);

    let coolThreshold = 1;
    let store = [];

    for(let digit of digits){
        coolThreshold *= digit;
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${pattern.length} emojis found in the text. The cool ones are:`);
   
    for(let emojy of pattern){
        let emojys = emojy.match(/[A-Z][a-z]{2,}/gm);
        let realEmojy = emojys[0];
        
        let sum = 0;

        for(let op of realEmojy){
            sum += op.charCodeAt();
        }

        if(sum > coolThreshold){
            store.push(emojy)
        }
    }

    console.log(store.join('\n'));
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);