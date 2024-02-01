function solve(catsAsStrings){
class Cat {
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
    let cats = [];
    for(let catsAsString of catsAsStrings){
        let tokens = (catsAsString.split(` `));
        let name = tokens[0];
        let age = Number(tokens[1]);

        let cat = new Cat(name, age);

       
    }

    for(let cat of cats){
        cat.meow();
    }

}
let cat = new Cat('Tom', 7);
console.log(cat);
cat.meow();