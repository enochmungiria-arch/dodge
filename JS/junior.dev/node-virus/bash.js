
const fs= require("fs");


/*for loops
while loops


we are going to create an application 

=>function <give it a name>
void function-->function that does not take any parameters
create a file-->its name and 10k lines of code

*/
function testAppend(){
    let fileData="";
   
   const fileName =` ${Date.now()}.txt`
    const cb=(error)=>{}
    
    for (let i=0;i<10000; i++){
        fileData=fileData+`\nGot you ${i}\n`
    }

    fs.writeFile(fileName,fileData,cb)
}
testAppend()