import React, {useState} from 'react';

function ChangeTheName(){
const[name,setName] = useState('firstName');
let changename = ()=>{
    if (name==="firstname"){setName('secondName')}
    else (setName("firstname"))
    
}

return(
<>
     <h1>{name}</h1>
     <button onClick={changename}>Click Me  </button>
</>


)


}

export {ChangeTheName}