import React,{useState,useEffect} from 'react';
import {Loading} from './loading';

function Api(){
const [users,setusers] = useState([])
const [loading,setloading] = useState(true)
const greetusers =async ()=>{
    try{
       const response = await fetch("https://jsonplaceholder.typicode.com/users")
       const userlist = await response.json();
       setusers(userlist);
       console.log(setusers);
    }
    catch(error){console.log(error)}
}



useEffect(
    ()=>{return greetusers},[]
)


return(
<>
{
users.map((currElm)=>{ 
return <h1>{currElm.name}</h1>
})}  <h1>hello api</h1>
</>)}

export {Api}