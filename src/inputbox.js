import React, {useState} from 'react';

function InputBox(){

const [data,setData] = useState(null);
function updateData(val){
    setData(val.target.value);
}

    
return(
<>
<h1>{data}</h1>
<input type="text" onChange={updateData}/>

</>

)


}
export {InputBox};