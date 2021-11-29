import { render } from '@testing-library/react';
import {useState, useEffect} from 'react';



function Effect(){
    const [value,setValue] = useState(0);
    const addvalue = ()=>{setValue(value+1)}
    useEffect(()=>{
                    console.log('use effect hello');
                    document.title = `new messages ${value}`

                  },[value]
                  )
    useEffect(()=>{console.log('use effect without dependancy value')},[])
   
    return(
      
                <>
                  <h1>useEffect {value}</h1>
                   <button onClick={addvalue}>Click Me again</button> 
                </>

    )
}

export {Effect}