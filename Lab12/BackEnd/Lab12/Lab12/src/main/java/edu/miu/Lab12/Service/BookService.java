package edu.miu.Lab12.Service;


import edu.miu.Lab12.Entity.Book;

import java.util.List;

public interface BookService {

   List<Book> getBooks();
   Book getBookByIsbn(String isbn);
   void addBook(Book book);
   void updateBook(Book book);
   void deleteBookById(String isbn);
   List<Book> searchBookByAuthor(String author);

}
