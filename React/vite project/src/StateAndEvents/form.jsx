
function Form(){

const nameOnChange=(e)=>{
    console.log(`Name is ${e.target.value}`)
}
const emailOnChange=(e)=>{
    console.log(`Email has changed to ${e.target.value}`)
}
const passwordOnChange=(e)=>{
    console.log(`Password has changed to ${e.target.value}`)
}
const onSubmit=()=>{
    console.log('submitted successfully')
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
                <input  type="text" onChange={nameOnChange}/>
            </div>
        </p>
        <p>
            <div>
                <label>Email</label>

            </div>
        </p>
        <p>
            <div>
                <input type="email" onChange={{emailOnChange}}/>
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
        <p onClick={onSubmit}>Submit</p>
    </div>
   ) 
}
export default Form;