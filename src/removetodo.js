import React, {useState} from 'react';

const myArray = [{id:0, name:'abc1'},
                {id:1, name:'abc2'} ,
                {id:2, name:'abc3'}
                ]

function Arrayremove(){
const [arryval,setarrayval] = useState(myArray)

const removedata= (id)=>{
                const newArry = arryval.filter((currelment)=>{return currelment.id !== id})
                      setarrayval(newArry)


}

return (
            <>
{    arryval.map((currElm)=>{ return (<><h1>{currElm.id}</h1><h1>{currElm.name}</h1>
    <button onClick={()=>removedata(currElm.id)}>Remove</button> 
                                       <button>Change</button>
                                       </>)})   }

                
            </>
)
}

export {Arrayremove}