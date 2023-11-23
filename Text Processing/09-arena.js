function arena(input){
    let arenaTier = {};

    while(input[0] != `Ave Cesar`){
        let line = input.shift();
        let tokens = line.split(` -> `);

        if(tokens.length == 3){
            let name = tokens[0];
            let tech = tokens[1];
            let skill = Number(tokens[2]);

            if(arenaTier.hasOwnProperty(name) == false){
                arenaTier[name] = {};
            }

            let gladiator = arenaTier[name];

            if(gladiator.hasOwnProperty(tech) == false || gladiator[tech] < skill){
                gladiator[tech] = skill;
            }
        }else{
            let [nameA, nameB] = line.split(' vs ');
            let a = arenaTier[nameA];
            let b = arenaTier[nameB];

            if (!a || !b){
                continue;
            }

            let techsA = Object.keys(a);
            let techsB = Object.keys(b);

            let hasMatch = false;

            for (let tech of techsA){
                if(techsB.includes(tech)){
                    hasMatch = true;
                }
            }

            if(!hasMatch){
                continue;
            }

            let totalA = 0;
            let totalB = 0;

            for(let skill of Object.values(a)){
                totalA += skill;
            }
            for(let skill of Object.values(b)){
                totalB += skill;
            }

            if(totalA > totalB){
                delete arenaTier[nameB];
            }else{
                delete arenaTier[nameA];
            }
        }
    }

    let result = Object.entries(arenaTier).sort(compareSkill);
 
    for(let[name, techs] of result){
        let total = 0;

        for(let skill of Object.values(techs)){
            total += skill;
        }

        console.log(`${name}: ${total} skill`);

        let sortedTechs = Object.entries(techs).sort(compareTech);

        for(let[tech, skill] of sortedTechs){
            console.log(`- ${tech} <!> ${skill}`);
        }
    }

    function compareSkill(a,b){
        let totalA = 0;
        let totalB = 0;
        
        for(let skill of Object.values(a[1])){
            totalA += skill;
        }
        for(let skill of Object.values(b[1])){
            totalB += skill;
        }

    return (totalB - totalA) || a[0].localeCompare(b[0]);
    }

    function compareTech(a, b){
        return b[1] - a[1] || a[0].localeCompare(b[0]);
        
    }
}
arena([

    'Peter -> BattleCry -> 400',
    
    'Alex -> PowerPunch -> 300',
    
    'Stefan -> Duck -> 200',
    
    'Stefan -> Tiger -> 250',
    
    'Ave Cesar'
    
    ]);