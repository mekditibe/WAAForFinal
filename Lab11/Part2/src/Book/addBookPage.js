import React, { useState } from 'react';

export const AddBookPage = (props) => {
  const [book, setBook] = useState({ isbn: "", title: "", author: "", price: "" });
  const [books] = useState(props.books);
  const initialList=[...books];
  const saveBook = (book) => {
    initialList.push(book);
  }
  let page2 = (
    <div>
      <div>Book</div>
      <form>
        <h3>Please enter book info</h3>
        <div>
        isbn
          <input
          type="text"
          placeholder="isbn"
          name="isbn"
          onChange={e => setUser({...book,[e.target.name]: e.target.value })} />
      </div>
      <div>
      Title
          <input
          type="text"
          placeholder="title"
          name="title"
          onChange={e => setUser({...book,[e.target.name]: e.target.value })} />
      </div>
      <div>
      Author
          <input
          type="text"
          placeholder="author"
          name="author"
          onChange={e => setUser({...book,[e.target.name]: e.target.value })} />
      </div>
      <div>
      Price
          <input
          type="text"
          placeholder="price"
          name="price"
          onChange={e => setUser({...book,[e.target.name]: e.target.value })} />
      </div>
      <button onClick={saveBook(book)}>Save</button>
      </form>
    </div>
  );
  return AddBookPage;
}