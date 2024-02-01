function dictionary(input) {
    let notebook = {};
    let wordPairs = input[0].split(" | ");
  
    for (let word of wordPairs) {
      let currentWord = word.split(":")[0];
      let def = word.split(":")[1];
  
      if (currentWord in notebook) {
        notebook[currentWord].push(def);
      } else {
        notebook[currentWord] = [def];
      }
    }
  
    if (input[2] == "Test") {
      let words = input[1].split(" | ");
      for (let word of words) {
        if (word in notebook) {
          let values = Object.values(notebook[word]);
          console.log(`${word}:`);
          values.forEach((definition) => {
            console.log(`-${definition.trimStart()}`);
          });
        }
      }
    } else {
      let keys = Object.keys(notebook);
  
      console.log(keys.join(" "));
    }
  }
    

    
    
dictionary(["programmer: an animal, which turns coffee into code | developer: a magician", "fish | domino", "Hand Over"]);