function destinationMapper(str){
    let validDetination = [];
    let travelPoints = 0;
    let pattern = /([=\/])(?<place>[A-Z][a-zA-Z]{2,})\1/g;

   
   let match;

   while((match = pattern.exec(str)) != null){
    let place  = match.groups.place;
        
    travelPoints += place.length;
    validDetination.push(place);
   }
   
       
    console.log(`Destinations: ${validDetination.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);

    

}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");