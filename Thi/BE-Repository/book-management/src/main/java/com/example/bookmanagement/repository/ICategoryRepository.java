package com.example.bookmanagement.repository;

import com.example.bookmanagement.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICategoryRepository extends JpaRepository<Category, Integer> {

}
