import React from 'react';

const author = 'book author name';
const title = 'book title name';



const newarray = ['abc','def','xyz'];
const Newname = newarray.map((name)=>{return(<><h1>{name}</h1></>)});

function Names(){
    return (
        <>
        {Newname}
        </>
    )
}

export {Names};