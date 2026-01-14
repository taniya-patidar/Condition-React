
import {useState} from "react";

const Hook=()=>{
    let [count, setcount]=useState(0)
    // let count=0
    let temp=count;

    let Dec=()=>{
        setcount(count+1)     
    }

    let Inc=()=>{
        // setcount(count+1)
        if(count>0){
            setcount(count-1)
        }
        
    }
    let Reset=()=>{
        setcount(0)     
    }

    
        console.log(count);

    return(
        <>
        <h1>{count}</h1>
        <button onClick={Inc}>decrement</button>
        <button onClick={Dec}>increment</button>
        <button onClick={Reset}>reset</button>
        </>
    
    )
}
export default Hook;