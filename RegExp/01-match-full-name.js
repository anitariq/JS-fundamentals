function matchAllNames(input){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let result = input.match(pattern);

    console.log(result.join(` `));

}
matchAllNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")