 import {useState} from "react"
 
function Form2(){
       const [input, setInput]=useState(["","","",""])
       

       const onSubmit=()=>{
    console.log('submitted successfully')
    console.log(`name is  ${name}`)
    console.log(`email is ${email}`)
    console.log (`phone is ${phone}`)
    console.log (`password is ${password}`)
       }

    return(
    <div>
        <p>
            <div>
                <label>Name</label>
            </div>
        </p>
        <p>
            <div>
                <input  value={input.name} onChange={nameOnChange}/>
            </div>
        </p>
        <p>
            <div>
                <label>Email</label>

            </div>
        </p>
        <p>
            <div>
                <input value={input.name} onChange={{emailOnChange}}/>
            </div>
        </p>
        <p>
            <div>
                <label>Phone</label>
                
            </div>
        </p>
        <p>
            <div>
                <input type="tel" onChange={phoneOnChange}/>
            </div>
        </p>

        <p>
            <div>
                <label>Password</label>
                
            </div>
        </p>
        <p>
            <div>
                <input type="password" onChange={passwordOnChange}/>
            </div>
        </p>
        <button onClick={onSubmit}>Submit</button>
      <ul>
        <li>Name {name}</li>
        <li>Email {email}</li>
        <li>Password {password}</li>
    </ul>
 
</div>
    )
}
export default Form2;