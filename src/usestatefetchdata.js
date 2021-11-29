import React, {useEffect,useState} from 'react';
const url = 'https://api.github.com/users';

function FetchData (){
    const [users,setusers] = useState([])
const getData = async()=>{
    
    const response = await fetch(url)
    const userlist = await response.json()
    setusers(userlist)
    console.log(userlist)
    console.log(users);
}
useEffect(()=>{
    getData();
},[])

return(
users.map((user)=>{
const {id,login,avatar_url,html_url}=user
return (
<><h1>{id}</h1>
<h1>{login}</h1>
<h1>{avatar_url}</h1><h1>{html_url}</h1>
</>
)


})



)
}




















/*
function FetchData(){

const [users,setusers] = useState([]);
const getUsers = async()=>{
  const response =   await fetch(url)
  const user = await response.json();
  console.log(user)
}
useEffect(()=>{
    getUsers();
},[])
return (
    <><h1>hello</h1></>
)

}
*/
export {FetchData}