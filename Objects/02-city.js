function city(cityInfo){
    let keys = Object.keys(cityInfo);

    for(let key of keys){
        console.log(key, `->`, cityInfo[key]);
    }

}
city({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })