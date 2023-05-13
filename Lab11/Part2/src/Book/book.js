import React, { useState } from 'react';

export const BookList = () => {
  const [book, setBook] = useState({ isbn: "", title: "", author: "", price: "" });
  const initialList = [
    { isbn: "1", title: "True Love", author: "Jones", price: "9" },
    { isbn: "2", title: "You", author: "Mekdes", price: "77" },
    { isbn: "3", title: "Do you know", author: "Teffera", price: "12" },
  ];
  const [booklist, setBooksList] = useState(initialList);
  const deleteBook = (key) => {
    initialList.remove(key);
  }
  const addBook = () => {
    props.history.push("/addBookPage", {  books: initialList})
  }

  return (
    <div>
      <h1>Books</h1>
      <table>
        <thead>
          <tr><th>isbn</th><th>Title</th><th>Author</th><th>Price</th></tr>
        </thead>
        <tbody>
          {booklist.map(book => (
            <tr key={book.isbn}>
              <td>{book.isbn}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td><button onClick={deleteBook(key)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={addBook()}>AddBook</button>
      </div>
    </div>
  );
};

