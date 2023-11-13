function bitcoin(arr){
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let boughtBitcoins = 0;
    let totalMoneyLeft = 0;
    let firstDayWithBitcoins = 0;
    let confirmFirstDay = 0;

    for(let i = 1; i < arr.length; i++){
        let dailyGold = arr[i];

        if(i % 3 === 0){
            dailyGold *= 0.70;
        }

        dailyGold *= goldPrice;
        totalMoneyLeft += dailyGold;

        while(totalMoneyLeft >= bitcoinPrice){
            totalMoneyLeft -= bitcoinPrice;
            boughtBitcoins++;
            confirmFirstDay++;
            if(confirmFirstDay == 1){
                firstDayWithBitcoins = i;
            }
        }
    }
    console.log(`Bought bitcoins: ${boughtBitcoins}`);

    if(boughtBitcoins > 0){
        console.log(`Day of the first purchased bitcoin: ${firstDayWithBitcoins}`);
    }
    
    console.log(`Left money: ${totalMoneyLeft.toFixed(2)} lv.`);


}
    
    
   


bitcoin([100, 200, 300]);