package edu.miu.Lab13.Service;


import edu.miu.Lab13.Entity.Todo;
import edu.miu.Lab13.Repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Override
    public List<Todo> getTodos() {
        return todoRepository.findAll();
    }

    @Override
    public Todo getTodoByIsbn(String isbn) {
        return todoRepository.findById(isbn).get();
    }

    @Override
    public void addTodo(Todo todo) {
        todoRepository.save(todo);
    }

    @Override
    public void updateTodo(Todo todo) {
        todoRepository.save(todo);
    }

    @Override
    public void deleteTodoById(String isbn) {
        todoRepository.deleteById(isbn);
    }

    @Override
    public List<Todo> searchTodoByName(String name) {
        return null;
    }
}
