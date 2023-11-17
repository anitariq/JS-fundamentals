function wordsTracker(arr){
    let searchedWords = arr.shift().split(` `);
    let occurancies = {};

    for( let word of searchedWords){
        occurancies[word] = 0;

    }
    for(let word of arr){
        if(word in occurancies){
            occurancies[word]++;
        }
    }
    let entries = Object.entries(occurancies).sort((a, b) => b[1] - a[1]);

    for(let [word, repeats] of entries){
        console.log(`${word} - ${repeats}`)

    }
}

wordsTracker([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ]);