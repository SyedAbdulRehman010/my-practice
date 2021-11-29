import React, {useState} from 'react';

function Obj(){
 const myObj = {name:'abc',add:'lkjlkjljk;j'}

const [objstate,setobjstate] = useState( {name:'abc',add:'lkjlkjljk;j'});
const chngObj = ()=>{ setobjstate({...myObj,name:'kkkkkkkk'})};
return (

<>

<h1>{objstate.name}</h1>
<button onClick={chngObj}>Change object values</button>
</>

)
}

export {Obj}