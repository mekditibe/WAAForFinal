package edu.miu.Lab13.Service;



import edu.miu.Lab13.Entity.Todo;

import java.util.List;

public interface TodoService {

   List<Todo> getTodos();
   Todo getTodoByIsbn(String isbn);
   void addTodo(Todo todo);
   void updateTodo(Todo todo);
   void deleteTodoById(String isbn);
   List<Todo> searchTodoByName(String name);

}
