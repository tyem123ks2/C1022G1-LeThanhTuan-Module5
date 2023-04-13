package com.example.bookmanagement.controller;

import com.example.bookmanagement.model.Category;
import com.example.bookmanagement.service.category.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/category")
public class CategoryController {
    @Autowired
    private ICategoryService categoryService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<Category> showEmployeeType(){
        return categoryService.getAllCategory();
    }

}
