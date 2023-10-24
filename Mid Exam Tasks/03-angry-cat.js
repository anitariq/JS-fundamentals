function angryCat(prices, entryPoint, itemType){
   
     let leftItems = prices.slice(0, entryPoint);
     let rightItems = prices.slice(entryPoint + 1);
   
     let leftDamage = 0;
     let rightDamage = 0;
   
     if (itemType === 'cheap') {
       let entryItemPrice = prices[entryPoint];
       leftDamage = leftItems.reduce((sum, price) => (price < entryItemPrice ? sum + price : sum), 0);
       rightDamage = rightItems.reduce((sum, price) => (price < entryItemPrice ? sum + price : sum), 0);
     } else if (itemType === 'expensive') {
      let entryItemPrice = prices[entryPoint];
       leftDamage = leftItems.reduce((sum, price) => (price >= entryItemPrice ? sum + price : sum), 0);
       rightDamage = rightItems.reduce((sum, price) => (price >= entryItemPrice ? sum + price : sum), 0);
     }
   
    let position = leftDamage >= rightDamage ? 'Left' : 'Right';
     let sumOfPriceRatings = Math.max(leftDamage, rightDamage);
   
     console.log(`${position} - ${sumOfPriceRatings}`);
   }




angryCat([1, 5, 1], 1, "cheap") 