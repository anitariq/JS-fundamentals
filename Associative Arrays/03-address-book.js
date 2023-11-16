function addressBook(input){
    let addresses = {};

    for(let item of input){
        let[name, address] = item.split(`:`);

        addresses[name] = address
    }
    let addressArr = Object.entries(addresses);
    addressArr.sort((a, b) => a[0].localeCompare(b[0]));

    let sorted = {};

    for(let [name, address] of addressArr){
        sorted[name] = address;
    }

    for(let [name, address] of Object.entries(sorted)){
        console.log(name, `->`, address)
    }

}


addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd']);