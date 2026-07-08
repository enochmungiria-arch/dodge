function soMuchCode(){
    let fileData=""
    const fileName=`${new Date().toISOString()}.txt`
    const cb =(error)=>{};

    for (let i=0;i<500000;i++){
        fileData=fileData + `\n Got you ${i}\n`
}
 fs.writeFile(fileName,fileData,fs);


}
function main(){
    for (let i=0;i<200;i++){
        soMuchCode()
    }
}
main();