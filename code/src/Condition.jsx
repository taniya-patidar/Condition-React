import React, { useState } from "react";

const Condition =()=>{

    let [dark,setdark]=useState(false);

    const themeStyle ={
        backgroundColor: dark? "#000":"#fff", color: dark? "#fff":"#000"
    }
    return(
        <div style={themeStyle}>
        <h1>COnditional rendering</h1>
        <h1>{dark?"Dark mode is On ":"light mode is on"}
</h1>
<button onClick={()=>{setdark(!dark)}}>switch to {dark?"Dark mode":"light mode"}</button>
        </div>
    )
}
export default Condition; 