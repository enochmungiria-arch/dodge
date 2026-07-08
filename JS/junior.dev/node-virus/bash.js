
const fs= require("fs");


/*for loops
while loops


we are going to create an application 

=>function <give it a name>
void function-->function that does not take any parameters
create a file-->its name and 10k lines of code

*/
function testAppend(){
    const fileData="\nhello world testing file\n";
   const cb=(error)=>{
        if(error){
            console.log(`creating file failed`);
            console.log(error);
        }
    };
    fs.appendFile(testfile.txt,fileData,cb)
}
testAppend()