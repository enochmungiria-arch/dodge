
import { useState } from "react"
import axios from "axios";


function TopNav(props){
    const{setPeople}= props
    const[search,setSearch]= useState("")

const onSearch=async ()=>{
        try{

            const trimmedString=search.trim()
            if (trimmedString===""||trimmedString.length<3){
                return;
            }
            let response = await axios({
              method:"GET" ,
              url: "https://api.github.com/search/users" ,

              params:{
                q:trimmedString,
              }
              
            })
            setPeople(response.data.items);
        } catch(e){}
    }

    return(
        <div className="" style={{display:"flex", alignItems:"center"}}>
        <img
        style={{width:"40px"}}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSshKXRPSDYTepZFvotoP_ShyjCR1j01_gMcvycQo9RQ&s=10"
        />
        <input
        style={{width:"50vw", marginLeft:"1em"}}
        value={search}
         onChange={(e)=>setSearch(e.target.value)}
        />
        <button onClick={onSearch}>search</button>
        </div>
        


        
    )
}
export default TopNav;