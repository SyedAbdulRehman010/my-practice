import React,{useEffect,useState} from 'react';
import { Button } from 'react-bootstrap';

function Effect(){
    const [data,setData] = useState("React Hooks ")
useEffect(
()=>{alert('hook is changed')},[data]
)
return (
<>
<h1>{data}</h1>
<Button variant="success" onClick={()=>{setData("React HOoks changed")}}>React Hooks</Button>
</>
)
}

function PropswithEffect(props){
return (
<>
<h1>props in hooks function {props.name}</h1>

</>
)
}




export {Effect,PropswithEffect}