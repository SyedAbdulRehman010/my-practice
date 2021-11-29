import React from 'react';
import {useState} from 'react';

const arr = [{id:1, name:"abc1"},{id:2, name:"abc2"},{id:3, name:"abc3"}];

function Arry(){
const [personname, setname]= useState(arr)

const arryite = personname.map((person)=>{
 const removedata = (id)=>{console.log('helo')
let newpeople = personname.filter((a)=>a.id !== id)
setname(newpeople)
}
   

   const {id,name} = person
return (
        <><h1>{name}</h1> <button onClick={()=>removedata(id)}>Remove Data</button></>

)})

return (<><h1>{arryite}</h1></>)
}
export {Arry}