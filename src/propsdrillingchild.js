import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

function Child(props){
return (
<>
<h1>{props.name}</h1>
{console.log(props.name)}
</>


)


}
export {Child}