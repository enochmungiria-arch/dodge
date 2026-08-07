import {useState, useEffect} from "react"

import axios from "axios"
function RepositoryList(props){
const{ isVisible, setVisible, repos_url}=props;
const{repos, setRepos}=useState([])
const getRepos= async()=>{
    let response = await axios({
        method:"GET" ,
              url: repos_url,
    })
    console.log(response)
    setRepos(response.data)
}
 useEffect(()=>{
        if(!isVisible){
            return;
        }
        getRepos()
    },[isVisible]);

    if(!isVisible){
        return null;
    }


    return(
        <div
        style={{
            position:"fixed",
            top:0,
            left:0,
            width:"100px",
            height:"100px",
            display:"flex",
            justifyContent:"center",
            backgroundColor:" rgba(0,0,0,0.1)",
            alignItems:"center",
            


        }}>
            
        
            
                <div
                    style={{
                        padding:"20px",
                        backgroundColor:"white",
                        borderRadius:"80px",
                        overflow:"auto",
                        minWidth:"350px"
                        
                        }}
                >
                <h2>
                    Repository List {""}
                    <button onClick={()=> setIsVisible(false)}>close</button>
                </h2>
                <div>
                    <ol>
                        {repos.map((repo)=>{
                            <li key={repo.id}>
                            <div>
                                <b>{repo.name}</b>
                            </div>
                            <div>
                                <span>{repo.description}</span>
                            </div>
                            </li>
                        })}
                    </ol>
                </div>
                
            </div>
            </div>
            

            
        
    )
}

export default RepositoryList