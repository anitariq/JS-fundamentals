function movingTarget(arr){
    let target = arr.shift().split(` `).map(Number);
    let command = arr.shift();
    

    while(command !== `End`){
        let tokens = command.split(` `);
        let action = tokens.shift();

    if(action == `Shoot`){
        let index = tokens[0];
        let power = tokens [1];

        target[index] -= power;

        if (target[index] <= 0){
            target.splice(index, 1);
        }
    }else if(action == `Add`){
        let index = tokens[0];
        let value = tokens[1];

        if(index >= 0 && index < target.length){
            target.splice(index, 0, value);
        }else{
            console.log(`Invalid placement!`);
        }
    }else if(action == `Strike`){
        let index = tokens[0];
        let radius = tokens[1];

        let firstIndex = index - radius;
        let endIndex = radius *2 +1;

        if(firstIndex >= 0 && firstIndex < target.length && endIndex >=0 && endIndex < target.length){
            target.splice(firstIndex, endIndex);
        }else{
            console.log(`Strike missed!`);
        }

        

    }
    
    command = arr.shift();
}
console.log(target.join(`|`));
}
movingTarget((["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]))