import { useNavigate, useLocation} from "react-router";


function Navigation2(){
    const navigate= useNavigate();
    const location= useLocation()

    console.log("Current location->", location)

    const isActive = (btnLocation)=>{
        if (location.pathname === btnLocation){
            return{backgroundColor:"green", color:"white"}
        }
        return{}
    }

    return(
        <div>
            <button onClick={()=> navigate("/")}>Home</button>
             <button onClick={()=> navigate("/About")}>About</button>
              <button onClick={()=> navigate("/crazy/route/23333")}>CrazyRoute</button>
               <button onClick={()=> navigate("-1")}>Go back</button>


        </div>
    )
}
export default Navigation2;