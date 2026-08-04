import { useState } from "react";

function ClickMe(){


    const [n, setN]= useState(0);

    const Increment = ()=>{
        setN(n+1);
    }

    const decrement = ()=>{
        setN(n-1);
    }
    const spoil = ()=>{
        setN("Cats and Dogs");
    }
    const reset= ()=>{
        setN(0);
    }

    return(
        <div>
            <h4>clicked {n}</h4>
            <div>
                <button onClick={Increment}>Increment</button>
                <button onClick={decrement}>Decrement</button><br/>
                <button onClick={spoil}>Spoil</button><br/>
                <button onClick={reset}>Reset</button>
            </div>
            <h4>clicked {n}</h4>


        </div>
    )
}
export default ClickMe;