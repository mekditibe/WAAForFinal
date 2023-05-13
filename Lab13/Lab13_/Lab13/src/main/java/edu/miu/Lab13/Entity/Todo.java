package edu.miu.Lab13.Entity;


import org.jetbrains.annotations.NotNull;

public class Todo {
    @NotNull
    private String isbn;
    @NotNull
    private String name;
    private String title;
    private Double price;

    public Todo(String isbn, String name, String title, Double price){
        this.isbn=isbn;
        this.name=name;
        this.title=title;
        this.price=price;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getAuthor() {
        return name;
    }

    public void setAuthor(String author) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
