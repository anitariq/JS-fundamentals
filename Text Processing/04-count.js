function count(input, str){
   let words = input.split(` `);

   let count = 0;

   for(let word of words){
    if(word == str){
        count ++;
    }
   }

   console.log(count)

}
count(`This is a word and it also is a sentence`, `is`);