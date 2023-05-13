package edu.miu.Lab13.Repository;

import edu.miu.Lab13.Entity.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends MongoRepository<Todo, String> {
    List<Todo> findAll();
    List<Todo> findAllByAuthor(String author);
}
