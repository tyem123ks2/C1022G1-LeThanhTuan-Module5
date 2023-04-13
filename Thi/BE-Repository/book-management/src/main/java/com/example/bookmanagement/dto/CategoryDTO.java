package com.example.bookmanagement.dto;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.Set;

public class CategoryDTO implements Validator {
    private int id;
    @NotBlank(message = "Mã sách không được để trống!")
    private String name;


    Set<BookDTO> bookSet;

    public CategoryDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<BookDTO> getBookSet() {
        return bookSet;
    }

    public void setBookSet(Set<BookDTO> bookSet) {
        this.bookSet = bookSet;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
