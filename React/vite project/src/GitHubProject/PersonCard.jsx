import { useEffect, useState } from "react"
import axios from "axios";
import RepositoryList from "./RepositoryList";

function PersonCard(props){
    const {person}=props;
    const [followers,setFollowers]=useState([])
    const [isVisible, setIsVisible] = useState(false);
    const {login, repos_url, followers_url, avatar_url, html_url}=person;

    const getFollowers=async ()=>{
        try{
            let response = await axios({
              method:"GET" ,
              url: followers_url, 

headers:{Authorization: `Bearer YOUR_TOKEN_HERE`,
Accept: "application/vnd.github+json",


              headers:{
                Authorization://private ,
                Accept://private
 7a0382a (github project)
              }
              
            })
            setFollowers(response.data);
        } catch(e){}
    }

    useEffect(()=>{
        getFollowers()
    },[]);

    const toGitHubProfile = () => {
        window.open(html_url, "_blank",);
    };

    

    return(
        <div
        style={{
            display:"flex",
            justifyContent:"space-between",
            marginTop:"20px",
            marginBottom:"20px",
            border:"2px solid rgba(0,0,0,0.1)",
            padding:"10px",
            borderRadius:"10px"


        }}>
            <img src={avatar_url} style={{height: "100px"}}/>
            <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-evenly",

            }}>
            
                <div>
                    <b style={{fontSize:"20px"}}>{login}</b>
                </div>
                <div>followers:{followers.length}</div>
                <button onClick={toGitHubProfile}>Github profile</button>
                <button onClick={() => setIsVisible(true)}>View Repositories</button>
                
            </div>

             <RepositoryList
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            repos_url={repos_url}
            />

            
        </div>
    )
}
export default PersonCard;
