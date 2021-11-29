const names = [
    {firstName:'abc',title:"author"},   {firstName:'abdefc',title:"author"}
]

function NamesDisplay(){
    const arriter = names.map((namescount)=>{
    return(<><Namescollection title={namescount}/></>)

    })
    return (<>{arriter}</>)
}
 


function Namescollection(props){
    console.log(props.title)
    return(  
<>

      <h1>{props.title.firstName}</h1> <h1>{props.title.title}</h1>
    
</>    )}

export {NamesDisplay}