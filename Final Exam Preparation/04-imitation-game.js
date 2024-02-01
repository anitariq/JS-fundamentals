function imitationGame(arr){
    let encryptedMsg = arr.shift();
    let command = arr.shift();

    while(command != 'Decode'){
        let tokens = command.split('|');
        let action = tokens.shift();

        if(action == 'Move'){
            let lettersCount = Number(tokens.shift());
            let firstLetters = encryptedMsg.slice(0, lettersCount);
            encryptedMsg = encryptedMsg.replace(firstLetters, '');
            encryptedMsg += firstLetters;
        }else if(action == 'Insert'){
            let index = Number(tokens.shift());
            let val = tokens.shift();

            encryptedMsg = encryptedMsg.slice(0, index) + val + encryptedMsg.slice(index);
        }else{
            let [substring, replacement] = tokens;
            
            while(encryptedMsg.includes(substring)){
                encryptedMsg = encryptedMsg.replace(substring, replacement);
            }
            
        }
        command = arr.shift();

        
    }
    
    console.log(`The decrypted message is: ${encryptedMsg}`);
}
imitationGame([
'zzHe',
'ChangeAll|z|l',
'Insert|2|o',
'Move|3',
'Decode']);