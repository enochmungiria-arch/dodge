
import { useState ,useEffect} from "react";
import TopNav from "./TopNav";
import InfoSection from "./InfoSection"
import PersonCard from "./PersonCard"
import axios from "axios";

function GitHubProject(){
    const [people, setPeople]=useState([])

    const getUserData= async ()=>{
        try{
            let response= await axios({
            method: "GET",
            url: "https://api.github.com/users",
            
            
            })
         setPeople(response.data)
    }catch (e){
        console.log("Error is ",e)
    }
        }
        
        useEffect(()=>{
            getUserData();

        },[])
    


    return (
        <div>
            <TopNav setPeople= {setPeople}/>
            <InfoSection people={people}/>
            {people.map((person)=>(
            <PersonCard key={person.id} person={person}/>
            ))}
        </div>
    )
}
export default GitHubProject;