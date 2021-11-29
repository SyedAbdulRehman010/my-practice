import React,{useState} from 'react';

const arr= [
{id:1, add: 'kjdlj'},
{id:2, add: 'lkjljlk'},
{id:3, add:'lkjlkj;ljwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'}
]


function Arrrender(){
    const [myarr, setArr] = useState(arr)
   function removearr(){ setArr([])}
    return (
        <>
          {myarr.map((currElm)=>{return <h1>{currElm.add}</h1>}) }
          <button onClick={removearr}>Remove Data</button>
        </>
    )
}
export {Arrrender}