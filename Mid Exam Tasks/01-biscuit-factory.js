function biscuitFactory(arr){
    let biscuitsPerDayPerWorker = arr.shift();
    let workers = arr.shift();
    let competingFactoryProduction = arr.shift();
    let biscuitsFor1Month = 0;

   for(let day = 1; day <= 30; day++){
    if (day % 3 === 0) {
        biscuitsFor1Month += 0.75 * Math.floor(biscuitsPerDayPerWorker) * workers;
      } else {
        biscuitsFor1Month += biscuitsPerDayPerWorker * workers;
      }
    }

    //biscuitsEvery3rdDay = biscuitsPerDayPerWorker * 0.75;
    //biscuitsFor1Month = (biscuitsPerDayPerWorker * workers * 20) + (Math.floor(biscuitsEvery3rdDay) * workers * 10);
    
    console.log(`You have produced ${biscuitsFor1Month} biscuits for the past month.`);

    let difference = ((biscuitsFor1Month - competingFactoryProduction)/competingFactoryProduction) * 100;

    if(biscuitsFor1Month > competingFactoryProduction){
        console.log(`You produce ${Math.abs(difference).toFixed(2)} percent more biscuits.`);
    }else{
        console.log(`You produce ${Math.abs(difference).toFixed(2)} percent less biscuits.`);
    }
    

        
      
    }


biscuitFactory(["78", "8", "16000"]);