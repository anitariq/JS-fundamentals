function numbers(arr){
    let nums = arr.shift().split(` `).map(Number);
    let commands = arr.shift();
    
    
    while(commands !== `Finish`){

        let tokens = commands.split(` `);
        let action = tokens[0];
       
    if(action == `Add`){
        let value = Number(tokens[1]);
        nums.push(value);

    }
        else if(action == `Remove`){
        let value = Number(tokens[1]);
        let index = nums.indexOf(value);
        nums.splice(index,1);
        }
    
        else if(action == `Replace`){
        let value = Number(tokens[1]);
        let replacement = Number(tokens[2]);
        let index = nums.indexOf(value);
        
        nums[index] = replacement;
        
    }   else if(action ==` Collapse`){
            let value = Number(tokens[1]);
            nums.forEach(num, index); {
                if(num < value){
                    nums.splice(index,1)
                }
            }
        
        } 
        commands = arr.shift();
    }
        
    console.log(nums.join(` `));
    }

    


    
   






numbers(["1 4 5 19","Add 2"])
//"Collapse 8", "Add 1", "Remove 4", "Finish"])