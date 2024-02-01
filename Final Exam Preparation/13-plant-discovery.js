function plantDiscovery(arr){
    let numberPlants = arr.shift();
    let plants = {};
    

    for(let i = 0; i < numberPlants; i++){
        let plants = arr.shift();
        let [plantName, rarity] = plants.split('<->');

        plants[plantName] = {rarity, rating: 0, rateCount: 0};
    }
    
    let command = arr.shift();

    while(command != 'Exhibition'){
        let tokens = command.split(':').join(' ').split(' - ');
        let action = tokens.shift();
        let flowerAndParts = tokens.shift().split(' ');

       if(plants.hasOwnProperty(flowerAndParts[0])){
            if(action == 'Rate'){
                let counter = 1;
                let [plantName, pts] = flowerAndParts;
                pts = Number(pts);
                plants[plantName]['rating'] += pts;
                plants[plantName]['rateCount'] += counter;
            } 
            if(action == 'Update'){
                let [plant, newRarity] = flowerAndParts;
                newRarity = Number(newRarity);
                plants[plant]['rarity'] = newRarity;
            }
            if(action == 'Reset'){
               let resetPlant = flowerAndParts[0];
               plants[resetPlant]['rating'] = 0;
               plants[resetPlant]['rateCount'] = 0; 
            }
        }else{
            console.log('error');
        }
    
        command = arr.shift();
    }
    console.log('Plants for the exhibition:');

    for(let key in plants){
        let averageCount = plants[key]['rating']/ plants[key]['rateCount'] || 0;
        console.log(
            '- ${key}; Rarity: ${plants[key][`rarity`]}; Rating: ${averageCount.toFixed(2)}');
    }

}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])