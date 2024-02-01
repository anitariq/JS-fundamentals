function messageTranslator(input) {
    let book = {};
    let wordsAndDefinitions = input[0].split(" | ");
  
    for (let word of wordsAndDefinitions) {
      let curWord = word.split(":")[0];
      let definitions = word.split(":")[1];
  
      if (curWord in book) {
        book[curWord].push(definitions);
      } else {
        book[curWord] = [definitions];
      }
    }
  
    if (input[2] == "Test") {
      let words = input[1].split(" | ");
      for (let word of words) {
        if (word in book) {
          let values = Object.values(book[word]);
          console.log(`${word}:`);
          values.forEach((definition) => {
            console.log(`-${definition.trimStart()}`);
          });
        }
      }
    } else {
      let keys = Object.keys(book);
  
      console.log(keys.join(" "));
    }
  }
messageTranslator(["2",

"!Send!:[IvanisHere]",

"*Time@:[Itis5amAlready"])