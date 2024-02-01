function travelTime(arr){
    let destinations = {};

    for(let command of arr){
        let [country, town, cost] = command.split(' > ');
        cost = Number(cost);

        if(country in destinations){
            if(town in destinations[country]){
                if(cost < destinations[country][town]){
                    destinations[country][town] = cost;
                }
            }else{
                destinations[country][town] = cost;
            }
        }else{
            destinations[country] = { [town]: cost };
        }
    }
    let entries = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]));

    for(let [country, towns] of entries){
        let townEntries = Object.entries(towns).sort((a, b) => a[1] - b[1]);

        let result = '${country} -> ';

        for(let [town, cost] of townEntries){
            result += '${town} -> ${cost} ';
        }

        console.log(result);
    }
    //console.log(`${country} -> ${town} -> ${cost}`);
}
travelTime([

    "Bulgaria > Sofia > 500",
    
    "Bulgaria > Sopot > 800",
    
    "France > Paris > 2000",
    
    "Albania > Tirana > 1000",
    
    "Bulgaria > Sofia > 200"
    
    ])