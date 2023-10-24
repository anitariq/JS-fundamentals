function shootForWin(arr){
    let sequence = arr.shift().split(` `).map(Number);

    let shot = arr.shift();
    let shootTarget = 0;

    while(shot != `End`){
        let index = Number(shot);

        if(index >= 0 && index < sequence.length){
            let takeValue = sequence[index];
            sequence[index] = -1;
            shootTarget++;

            for(let i = 0;i < sequence.length; i++){
                if(shot[i] > 0){
                    if(sequence[i] > takeValue){
                        sequence[i] -= takeValue;
                    }else if(shot[i] <= takeValue){
                        sequence[i]+= takeValue;
                    }
                }
            }

        }
        command = arr.shift();
    }

console.log(`Shot targets: ${shootTarget} -> ${sequence.join(` `)}`);

}
shootForWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])