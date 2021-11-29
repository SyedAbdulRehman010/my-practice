const names = [
    {id:1,firstName:'abc',title:"author"},   {id:2,firstName:'abdefc',title:"author"}
]

function NamesDisplay2(){
    const arriter = names.map((namescount,index)=>{
    return(<><Namescollection key={namescount.id} {...namescount}/></>)

    })
    return (<>{arriter}</>)
}
 


function Namescollection(props){
    console.log(props.title)
    return(  
<>

      <h1>{props.firstName}</h1> <h1>{props.title}</h1>
    
</>    )}

export {NamesDisplay2}