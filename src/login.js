import react, {useState} from 'react';
import {auth} from './firebase';
function LoginDetails(){
    const [email,setemail]  = useState("");
    const [password,setpassword] = useState("");
   
 
async function getformdata(e){
    e.preventDefault()
    console.log(email,password)
try{
  const result = await auth.createUserWithEmailAndPassword(email,password)
   alert (`User Created ${email}`)
}
catch(err){
   alert (err.message)

}
}
return(
<> 
<form onSubmit={getformdata}>
Name:    
<input type="email" onChange={(e)=>{ setemail(e.target.value);
    console.log(e.target.value)}} /> <br/><br/>
Password :    
<input type="password" onChange={(e)=>{ setpassword(e.target.value);
    console.log(e.target.value)}} />


<input type="submit"/>
</form>
</>
)
}
export default LoginDetails;