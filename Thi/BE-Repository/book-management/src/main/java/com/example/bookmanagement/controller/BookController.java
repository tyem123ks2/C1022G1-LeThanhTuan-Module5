package com.example.bookmanagement.controller;
import com.example.bookmanagement.dto.BookDTO;
import com.example.bookmanagement.model.Book;
import com.example.bookmanagement.model.Category;
import com.example.bookmanagement.service.book.IBookService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/books")
public class BookController {
    @Autowired
    private IBookService bookService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Page<BookDTO> showList(@RequestParam(required = false, defaultValue = "") String name,
                                  @PageableDefault(sort = {"id"}, direction = Sort.Direction.DESC, size = 5)Pageable pageable){
        return bookService.findByName(name, pageable);
    }

    @PostMapping("")
    public ResponseEntity<Map<String, String>> create(@Validated @RequestBody BookDTO bookDTO, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> errors = bindingResult.getFieldErrors();
            for (FieldError error : errors) {
                if (!map.containsKey(error.getField())) {
                    map.put(error.getField(), error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        } else {
            Book book = new Book();
            book.setCategory(new Category(bookDTO.getCategory().getId()));
            BeanUtils.copyProperties(bookDTO.getCategory(), book.getCategory());
            BeanUtils.copyProperties(bookDTO, book);
            bookService.save(book);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/detail")
    public BookDTO bookDetail(@RequestParam(required = false) int id) {
        return bookService.findById(id);
    }

    @DeleteMapping("")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@RequestParam(required = false) Integer id) {
        bookService.deleteBook(id);
    }

}
