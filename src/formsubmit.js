import React, {useState} from 'react';

function Submitform(){

const [email,setEmail] = useState('')
const [password,setpassword] = useState('')
const [allentry,setallentry] = useState([])
let emailfield = (e)=>{setEmail(e.target.value); console.log(e.target.value)}
let passwordfield = (e)=>{setpassword(e.target.value); console.log(e.target.value)}
function AllEntries(e){
e.preventDefault();
const newEntry = {email:email, passoword:password}
setallentry([...allentry,newEntry])
console.log(allentry)
}
return (
<>
            <form action="" onSubmit={AllEntries}>
           <label htmlFor="email" >Email</label>
           <input type="text" name="email" value={email} onChange={emailfield}/>
           <label htmlFor="password">Password</label>
           <input type="text" name="password" value={password} onChange={passwordfield}/>
           <input type="submit" value="Please Submit"/>
           </form>
</>
)
}
export {Submitform}