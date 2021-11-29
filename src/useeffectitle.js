import React , {useState, useEffect} from 'react';

function ChangeTitle(){
const [count,setCount] = useState(0);
useEffect(()=>{
if (count >0) {document.title = `message ${count}`}
else
{document.title = 'no messages'}

}



)
return(
<>
<h1>{count}</h1>
<button onClick={()=>{return setCount(count+1)}}>Click Me</button>
</>

)

}
export {ChangeTitle}