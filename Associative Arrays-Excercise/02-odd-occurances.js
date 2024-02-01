
      
function oddOccurances(arr) {
  let words = arr.toLowerCase().split(' ');
  let object = {};
 
  for (let word of words) {
    if (object[word] !== undefined) {
      object[word]+= 1;
    } else {
      object[word] = 1;
    }
  }
  let oddOccur = Object.keys(object)
    .filter((word) => object[word] % 2 !== 0)
    //.sort((a, b) => a.localeCompare(b))
    //.sort((a, b) => a - b);
 
  console.log(oddOccur.join(' '));
}
oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')