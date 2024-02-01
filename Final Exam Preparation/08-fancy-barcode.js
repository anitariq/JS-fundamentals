function fancyBarcodes(input){
    let barcodeCount = Number(input.shift());
    let barcodesToCheck = input.slice(0, barcodeCount);
    let barcodePattern = /@#+[A-Z][A-Za-z\d]{4,}[A-Z]@#+/;
    let digitPattern = /\d/g;

    

    barcodesToCheck.forEach(barcode =>{
        if(!barcode.match(barcodePattern)){
            console.log(`Invalid barcode`);
        }else{
            let currentBarcode = barcode.match(digitPattern)
            if(currentBarcode == null){
                console.log(`Product group: 00`)
            }else{
                console.log(`Product group: ${currentBarcode.join(``)}`);
            }
        }





    })


}
fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]);