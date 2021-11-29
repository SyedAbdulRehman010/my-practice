import {useState} from 'react';

function ChangeData (){
const a="the value before set state update "
const[data,setData] = useState(a);
function updateData(){
    setData("the value is changed from state update")
}
return (
<>
<h1>{data}</h1>
<button onClick={updateData}>Change Value</button>
</>
)
}
export {ChangeData}