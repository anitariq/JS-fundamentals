function extractFile(path){
    let fileInfo = path.split('\\').pop();
    let lastDotIndex = fileInfo.lastIndexOf('.');

    let fileName = fileInfo.slice(0, lastDotIndex);
    let fileExtension = fileInfo.slice(lastDotIndex+1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');