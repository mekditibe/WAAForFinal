package edu.miu.Lab13.Controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController("calculat")
public class CalculaterController {

    @GetMapping("/add")
    public ResponseEntity<?> add(@PathVariable Integer num1,@PathVariable Integer num2) {
        Integer result = num1+num2;
        return new ResponseEntity<Integer>(result, HttpStatus.OK);
    }

    @GetMapping("/mul")
    public ResponseEntity<?> multiplication(@PathVariable Integer num1,@PathVariable Integer num2) {
        Integer result = num1*num2;
        return new ResponseEntity<Integer>(result, HttpStatus.OK);
    }

    @GetMapping("/sub")
    public ResponseEntity<?> subtraction(@PathVariable Integer num1,@PathVariable Integer num2) {
        Integer result = num1-num2;
        return new ResponseEntity<Integer>(result, HttpStatus.OK);
    }
}
