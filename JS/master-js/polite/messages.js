const data=require('./data.json')
const fs=require("fs")


const output =[];

for (let i=0;i<data.length;i++){
    const info=data[i];


    const {first_name ,last_name, email, gender, phone} = info;
    


    let title=""

    if(info.gender==="Male"){
     title="sir"}
     else{
        title="madam"
     }

     const message=
     `Dear ${title},${info.first_name},${last_name}We regret to inform you that
     we will be unable to proceed with you .`


    output.push({ first_name,last_name,email,gender,phone,message})
}
const outputText=JSON.stringify(output);

fs.writeFile("output.json",outputText,(error)=>{})
