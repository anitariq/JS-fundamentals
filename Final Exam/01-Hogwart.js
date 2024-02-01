function hogwarts(arr){
    let spell = arr.shift();

    let command = arr.shift()

    while(command != 'Abracadabra'){
        let tokens = command.split(' ');
        let action = tokens[0];

        if(action == 'Abjuration'){
            let upperCase = spell.toUpperCase();
            
            console.log(upperCase);
        }else if(action == 'Necromancy'){
            let lowerCase = spell.toLowerCase();

            console.log(lowerCase);
        }else if(action == 'Illusion'){
            let index = Number(tokens[1]);
            let letter = tokens[2];

            if(index >= 0 && index < spell.length){
                
                spell = spell.substring(0, index) + letter + spell.substring(index + 1);
    
                console.log('Done!')
            }else{
                console.log('The spell was too weak.')
            }
        }else if(action == 'Divination'){
            let firstSubstring = tokens[1];
            let secondSubstring = tokens[2];

            
                spell = spell.split(firstSubstring).join(secondSubstring);

                console.log(spell);
            
        }else if (action == 'Alteration'){
            let substring = tokens[1]
            if(spell.includes(substring)){
            spell = spell.replace(substring, '');

            console.log(spell)
            }
            
        }else{
            console.log(`The spell did not work!`);
        }



        command = arr.shift();
    }



}
hogwarts(
    ["A7ci0", 
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"])