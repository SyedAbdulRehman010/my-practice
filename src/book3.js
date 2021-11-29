import React from 'react';

const author = 'book author name';
const title = 'book title name';

const Books = [{title:'FirstBook', author:'abc'},{title:'SecondBook', author:'abc'}]


const Bookarry = Books.map((book)=>{
    const {title,author}=book
    return (<>
           <h1>{title}</h1>
           <h1>{author}</h1>
            </>)
}

)

function Booklist2(){return (<>{Bookarry}</>)}



export {Booklist2};