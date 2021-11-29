import React from 'react';

const author = 'book author name';
const title = 'book title name';

const firstBook = {title:'FirstBook', author:'abc'}


const Book = (props)=>{
    return (
              <>
              <h1>{props.title}</h1>
              <h1>{props.author}</h1>
              </>
            )
}

function BookList(){
  return(
<>
<Book title={firstBook.title} author={firstBook.author}/>
<Book/>
</>

  )
}


export {BookList};