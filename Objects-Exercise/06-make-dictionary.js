function makeDictionary(arr){
    let obj = {};
    let newObj = {};

    for(let text of arr){
        obj = JSON.parse(text);

        let key = Object.keys(obj);
        let value = Object.values(obj);
        newObj[key] = value;
    }

    let sorted = Object.entries(newObj).sort((a, b) => a[0].localeCompare(b[0]));

    for(let item of sorted){
        let[term, definition] = Object.entries(item);

        console.log(`Term: ${term[1]} => Definition: ${definition[1]}`);
    }

}
makeDictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    
    ]);