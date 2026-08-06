
import { useState}from "react";
import {useEffect} from "react";

function LifeCycle(){
const [n, setN] = useState(0);


useEffect(()=>{
    console.log("n has changed ")
}, [n]);


    return(
        <div>
            <div>
                <button onClick={()=>setN(n+1)}>+</button>
                <b>{n}</b>
                <button onClick={()=>setN(n-1)}>-</button>
            </div>
            <EvenOrOdd n={n} />
        </div>
    )

}
function EvenOrOdd(props){
    const {n}=props
    if(n%2===0){
        return <EvenComponent/>
    }else{
        return <OddComponent/>
    }
}
function EvenComponent(){
    useEffect(()=>{
        return()=>{
        console.log ("Even component rendered")
    };
},[])
return(
    <div>
        <h3>Even</h3>
    </div>
)
}
function OddComponent(){
    useEffect(()=>{
        return()=>{
    console.log ("Odd component died")
        }
    },[]);
    return(
        <div>
            <h3>Odd</h3>
        </div>
    )
}
export default LifeCycle;