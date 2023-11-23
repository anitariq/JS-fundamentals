function cutAndReverse(str){
    let middleInd = str.length /2;

    let firstHalf = str.slice(0, middleInd).split('').reverse().join('');
    let secondHalf = str.slice(middleInd).split('').reverse().join('');

    console.log(firstHalf);
    console.log(secondHalf);



}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')