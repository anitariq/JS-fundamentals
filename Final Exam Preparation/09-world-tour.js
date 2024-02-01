function worldTour(arr){
    let stop = arr.shift();
    let action = arr.shift().split(':');

    let command = action[0];

    while(command != 'Travel'){
        if(command == 'Add Stop'){
            let index = Number(action[1]);
            let newDestination = action[2];

            if(index >= 0 && index < stop.length){
            let left = stop.slice(0,index);
            let right = stop.slice(index);

            stop = left + newDestination + right;
            }
            console.log(stop);
        }else if(command =='Remove Stop'){
            let startIndex = Number(action[1]);
            let endIndex = Number(action[2]);
            let remove = stop.slice(startIndex, endIndex +1);

            if(startIndex>= 0 && startIndex < stop.length && endIndex >= 0 && endIndex < stop.length && startIndex <= endIndex){
                stop = stop.replace(remove,``);
            }
            

            console.log(stop)
        }else if(command =='Switch'){
            let oldString = action[1];
            let newString = action[2];

            if(stop.includes(oldString)){
                stop = stop.replace(oldString, newString);
            }
            
            console.log(stop);
        }

        action = arr.shift().split(':');
        command = action[0];
    } 

    console.log(`Ready for world tour! Planned stops: ${stop}`);
}

worldTour
(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);