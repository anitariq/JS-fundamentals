function manOWar(input){
    let pirate = input.shift().split(`>`).map(Number);
    let warship = input.shift().split(`>`).map(Number);
    let maxHp = Number(input.shift());

    for(let current of input){
        let tokens = current.split(` `);
        let command = tokens.shift();

        if(current == `Retire`){
            break;
        }else if(current == `Fire`){
            let index = Number(tokens[0]);
            let damage = Number(tokens[1]);

            if(index < 0 || index>= warship.length){
                continue;
            }

            warship[index] -= damage;

            if(warship[index]<= 0){
                console.log(`You won! The enemy ship has sunken.`);
                return;
            }
        }else if(current == `Defend`){
            let start = Number(tokens[0]);
            let end = Number(tokens[1]);
            let damage = Number(tokens[2]);

            if(start < 0 || start >= pirate.length|| end < 0 || end >= pirate.length){
                continue;
            }

            for(let i = start; i <= end; i++){
                pirate[i] -= damage;

                if(pirate[i]<= 0){
                    console.log(`You lost! The pirate ship has sunken.`);
                    return;
                }
            }
                
            }else if(current == `Repair`){
                let index = Number(tokens[0]);
                let damage = Number(tokens[1]);
    
                if (index < 0 || index >= warship.length){
                    continue;
                }
                pirate[index]+= maxHp;
                if(pirate[index] > maxHp){
                    pirate[index] = maxHp;
                }
    

        }else if(current == `Status`){
            let damaged = pirate.filter(section => section < critical);
            console.log(`${damaged.length} sections need repair.`);

        }
        }
        let pirateStatus = 0;
        let warshipStatus = 0;

        for(let section of pirate){
            pirateStatus += section;
        }
        for(let section of warship){
            warshipStatus += section;
        }

        console.log(`Pirate ship status: ${pirateStatus}`);
        console.log(`Warship status: ${warshipStatus}`);
    }

manOWar