import React,{useRef,useState} from 'react';

import { Button } from 'antd';

function Ref(){
const [user,setuser] = useState('')
const Luckyname = useRef(null)

const forhandle = (e)=>{ e.preventDefault(); console.log(Luckyname.current.value)}
    return (
<>     
         <form onSubmit={forhandle}>
         <input type="text" ref={Luckyname}></input>
         <input type="submit"/>
         <Button type="primary">Primary Button</Button>
         </form>
</>)}

export {Ref}