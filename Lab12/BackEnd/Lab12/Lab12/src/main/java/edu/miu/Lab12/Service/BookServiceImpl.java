package edu.miu.Lab12.Service;

import edu.miu.Lab12.Entity.Book;
import edu.miu.Lab12.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BookServiceImpl implements BookService{

    @Autowired
    private BookRepository bookRepository;


    @Override
    public List<Book> getBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book getBookByIsbn(String isbn) {
        return bookRepository.findById(isbn).get();
    }

    @Override
    public void addBook(Book book) {
        bookRepository.save(book);
    }

    @Override
    public void updateBook(Book book) {
        bookRepository.save(book);
    }

    @Override
    public void deleteBookById(String isbn) {
        bookRepository.deleteById(isbn);
    }

    @Override
    public List<Book> searchBookByAuthor(String author) {
        return bookRepository.findAllByAuthor(author);
    }
}
