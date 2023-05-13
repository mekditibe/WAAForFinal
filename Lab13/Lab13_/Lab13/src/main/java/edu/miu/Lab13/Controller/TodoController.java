package edu.miu.Lab13.Controller;



import edu.miu.Lab13.Entity.Todo;
import edu.miu.Lab13.Service.TodoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
public class TodoController {
    @Autowired
    private TodoServiceImpl todoService;


    @GetMapping
    public ResponseEntity<?> getTodos() {
        return new ResponseEntity<List<Todo>>(this.todoService.getTodos(), HttpStatus.OK);
    }

    @GetMapping("/{isbn}")
    public ResponseEntity<?> getTodoByIsbn(@PathVariable String isbn) {
        return new ResponseEntity<Todo>(this.todoService.getTodoByIsbn(isbn), HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<?> getTodoByAuthor(@PathVariable String name) {
        return new ResponseEntity<List<Todo>>(this.todoService.searchTodoByName(name), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> addTodo(@RequestBody Todo todo) {
        this.todoService.addTodo(todo);
        return new ResponseEntity<String>("Todo is added successful ", HttpStatus.OK);
    }

    @DeleteMapping("/{isbn}")
    public ResponseEntity<?> deletedTodoByIsbn(@PathVariable String isbn) {
        this.todoService.deleteTodoById(isbn);
        return new ResponseEntity<String>("Todo is deleted successful ", HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> updateContact(@RequestBody Todo todo) {
        this.todoService.updateTodo(todo);
        return new ResponseEntity<String>("Todo is updated successful ", HttpStatus.OK);
    }


}
