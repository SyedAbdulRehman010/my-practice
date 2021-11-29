import React, {useState} from 'react';

function Hideandshow(){
    const [state,jjjj] = useState(true);
        return(
<>
    {
      state ? <h1>helloooooooooo</h1> : null
      
    }

    
     <button onClick={()=>{jjjj(true)}}>Show State</button>
     <button onClick={()=>{jjjj(false)}}>Hide State</button>

</>



        )


}
export {Hideandshow};