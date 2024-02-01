function inventory(arr){
    let heroes = [];

    for(let char of arr){
        let [heroName, level, items] = char.split(' / ');
        level = Number(level);

        let hero = {name: heroName, level: level, items: items};
        heroes.push(hero);
    }
    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach((hero) =>{
        console.log(
            `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`
        );
    });

}
inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])