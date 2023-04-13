package com.example.bookmanagement.controller;
import com.example.bookmanagement.dto.BookDTO;
import com.example.bookmanagement.service.book.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public BookDTO bookDetail(@RequestParam(required = false) int id) {
        return bookService.findById(id);
    }


}
