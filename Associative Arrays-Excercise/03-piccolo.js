function piccolo(arr){
    let parkingLot = [];

    for(let car of arr){
        let tokens = car.split(', ');
        let direction = tokens.shift();
        let carNumber = tokens.shift();

        if(direction == 'IN'){
            if(!parkingLot.includes(carNumber)){
                parkingLot.push(carNumber);
            }
        }else if(direction == 'OUT'){
            let index = parkingLot.indexOf(carNumber);
            if(parkingLot.includes(carNumber)){
                parkingLot.splice(index, 1);
            }
        }
        
    }

    parkingLot.sort();
        if(parkingLot.length == 0){
            console.log(`Parking Lot is Empty`);
        
        }else{
            console.log(parkingLot.join('\n'));
        }



}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])