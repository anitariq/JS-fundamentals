function computerStore(arr){
    let command = arr.shift();
    let netPrice = 0;

    while(command != `special` && command != `regular`){
        let price = Number(command);

        if(price <= 0){
            console.log(`Invalid price!`);
              command = arr.shift();
              continue;
        }
        netPrice += price;

        command = arr.shift();

       
    }
    
    if(netPrice == 0){
        console.log(`Invalid order!`);
    }else{
        
        let tax = netPrice * 0.20;
        let priceWithTax = netPrice + tax;

        if (command == `special`){
            priceWithTax *= 0.90;
        }
        console.log(`Congratulations you\'ve just bought a new computer!`);
        console.log(`Price without taxes: ${netPrice.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log(`-----------`)
        console.log(`Total price: ${priceWithTax.toFixed(2)}$`)
    }

    

   

}
computerStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ]))