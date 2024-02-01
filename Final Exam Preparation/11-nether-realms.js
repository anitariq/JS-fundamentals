function netherRealms(input){
    let demons = input.split(/[, ]+/);
    let demonStats = {};
    let healthPattern = /[^0-9+\-*\/.]/g;
    let damagePattern = /\-?\+?\d+\.?\d*/g;
    let someSymbolPattern = /[\*\/]/g;

    demons.forEach(demon => {
        let healthParams = demon.match(healthPattern);
        let health = 0;
        healthParams.forEach(param =>{
            let healthPart = param.charCodeAt();
            health += healthPart;
        });

        let damageParams = demon.match(damagePattern);
        let damage = 0;
        if(damageParams){
            let damageSum = damageParams.map(Number).reduce((a, b) => a+b,0);
            let symbols = demon.match(someSymbolPattern);

            if(symbols){
                symbols.forEach(symbol => {
                    if(symbol == `*`){
                        damageSum *= 2;
                    }else {
                        damageSum /= 2;
                    }
                });
            }
            damage = damageSum;
        }

        demonStats[demon] = {};
        demonStats[demon].health = health;
        demonStats[demon].damage = damage;
        
    });

    let sortedDemonsStats = Object.entries(demonStats).sort((a, b) => a[0].localeCompare(b[0]));
    sortedDemonsStats.forEach(demon =>{
        console.log(`${demon[0]} - ${demon[1].health} health, ${demon[1].damage} damage`);
    });
}
netherRealms(`M3ph-0.5s-0.5t0.0**`);