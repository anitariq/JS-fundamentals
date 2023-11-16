function phoneBook(input){
    let phone = {};

    for( let item of input){
        let[name, phoneNumber] = item.split(` `);

        phone[name] = phoneNumber;
    }

    for (let [name, phoneNumber] of Object.entries(phone)){
        console.log(name, `->`, phoneNumber);
    }


}
phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);