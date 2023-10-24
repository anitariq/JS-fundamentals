function lift(arr){
    let people = Number(arr[0]);
    let wagons = arr[1].split(` `).map(Number);

    for(let i = 0; i < wagons.length-1; i++){
        if(wagons [i] == 4){
            continue;
        }else{
            if(people <= 4 - wagons[i]){
                wagons[i]+= people;
            }else{
                people -= 4 - wagons[i];
                wagons[i] = 4
            }
        } 
    }
    let isWagonFull = true;
    for(let j = 0; j< wagons.length; j++){
        if(wagons[j] !== 4){
            isWagonFull = false;
            break;
        }
    }
    
    if(people == 0 && isWagonFull){
        console.log(wagons.join(` `));
    }else if(people == 0 && !isWagonFull){
        console.log(`The lift has empty spots!`);
        console.log(wagons.join(` `));
    }else if(people > 0 && isWagonFull){
        console.log(`There isn't enough space! ${people} people in a queue!`)
        console.log(wagons.join(` `));
    }
}
lift([
    "15",
    "0 0 0 0 0"
   ]);