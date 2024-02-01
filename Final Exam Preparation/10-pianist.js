function pianist(arr){
    let numPieces = arr.shift();
    let pieceList = {};

    for(let i = 0; i < numPieces; i++){
        let pieceInfo = arr.shift();
        let [piece, composer, key] = pieceInfo.split('|');

        pieceList[piece] = {composer, key};
    }

    let command = arr.shift();

    while(command != 'Stop'){
        let tokens = command.split('|');
        let action = tokens[0];

        if(action == 'Add'){
            let piece = tokens[1];
            let composer = tokens[2];
            let key = tokens[3];

            if(piece in pieceList){
                console.log(`${piece} is already in the collection!`);
            }else{
                pieceList[piece] = {composer, key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            }
        }

        if(action == 'Remove'){
            let piece = tokens[1];

            if(piece in pieceList){
                delete pieceList[piece];

                console.log(`Successfully removed ${piece}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        if(action == 'ChangeKey'){
            let piece = tokens[1];
            let newKey = tokens[2];

            if(piece in pieceList){

                pieceList[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }

        command = arr.shift();
    }

    let entries = Object.entries(pieceList)
    
    for(let entry of entries){

        console.log(`${entry[0]} -> Composer: ${entry[1].composer}, Key: ${entry[1].key}`);
    }


}

pianist(
    [
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);