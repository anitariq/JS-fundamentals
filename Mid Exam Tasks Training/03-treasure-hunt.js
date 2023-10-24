((["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]))


function treasureHunt(arr){
    let loot = arr.shift().split(`|`);
    let command = arr.shift();

    while(command != `Yohoho`){
        let tokens = command.split(` `);
        let action = tokens.shift();

        if(action == `Loot`){
            tokens.filter(item => !loot.includes(item)).forEach(item => loot.unshift(item));                
        }else if(action == `Drop`){
            let index = Number(tokens.shift());
            
            if(index >= 0 && index < loot.length){
                let removedItem = loot.splice(index, 1).shift();
                loot.push(removedItem);
            }
        }else if(action == `Steal`){
            let count = Number(tokens.shift());
            let stolenItem = loot.splice(-count);
            console.log(stolenItem.join(`, `));
        }
        
        command = arr.shift();
    }
    
    if (loot.length == 0){
        console.log(`Failed treasure hunt.`);
    }else{
        let totalGain = 0;

        for(let item of loot){
            totalGain += item.length;
        }
    
        let aveGain = totalGain / loot.length;
        console.log(`Average treasure gain: ${aveGain.toFixed(2)} pirate credits.`);
    }

}


treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]))