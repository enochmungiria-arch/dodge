 import {useEffect, useState } from "react"
 function Stopwatch(){
    const {isStopped, setIsStopped}=useState(true)
    const {k, setK}=useState(0)
    useEffect(()=>{
        if (isStopped===false){
            setK(k+1)

        }
 },[isStopped])

 return(
    <div>
        <div>
            <button onClick={()=>setIsStopped(false)}>Start</button>
            <button onClick={()=>setIsStopped(true)}>Stop</button>
            <button onClick={()=>setK(0)}>Reset</button>
        </div>
        {showtimer({isStopped, k})}
    </div>
 )
} 
function showtimer({isStopped, k}){
if (isStopped)
{
    return null;

}
return <Timer k={k}/>


}
function timer({k}){
    const [time, setTime]=useState(0)
    
}
useEffect(()=>{
    const interval=setInterval(()=>{
        console.log("for k is", k ,"time is", time);
        setTime((c)=> c+1);
    }, 1000);
    return()=>{
        clearInterval(interval);
    },[];
    return (
        <div>
            time is {time}
        </div>
    )
});


export default Stopwatch;
        
    