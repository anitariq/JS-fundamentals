function activationKeys(input){
    let key = input.shift();
    
    let command = input.shift();

    while(command != 'Generate'){
        let tokens = command.split('>>>')
        let action = tokens[0];

        if(action == 'Contains'){
            let substring = tokens[1];
            if(key.includes(substring)){
                console.log('${key} contains ${substring}')
            }else{
                console.log('Substring not found!')
            }

        }

        if (action =='Flip'){
            let letterCase = tokens[1];
            
            if(letterCase == 'Upper'){
                let startIndx = Number(tokens[2]);
                let endIndx = Number(tokens[3]);
                let keyToEdit = key.slice(startIndx, endIndx).toUpperCase();
                key = key.slice(0, startIndx) + keyToEdit + key.slice(endIndx);

                console.log(key);
            }else if(letterCase == 'Lower'){
                let startIndx = Number(tokens[2]);
                let endIndx = Number(tokens[3]);
                let keyToEdit = key.slice(startIndx, endIndx).toLowerCase();
                key = key.slice(0, startIndx) + keyToEdit + key.slice(endIndx);

                console.log(key);
            }
        }

        if(action == 'Slice'){
            let startIndx = Number(tokens[1]);
            let endIndx = Number(tokens[2]);
            key = key.slice(0, startIndx) + key.slice(endIndx);
            
            console.log(key);
        }

        command = input.shift()
    }

    console.log(`Your activation key is: ${key}`);


}

activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])