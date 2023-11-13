function requiredLiterature(pageNumber, pagesFor1Hour, days){
   
    let hoursPerDay = 0;

    let totalTime = pageNumber / pagesFor1Hour;
    hoursPerDay = totalTime/ days;

    console.log(hoursPerDay);

}
requiredLiterature(212,
    20 ,
    2);