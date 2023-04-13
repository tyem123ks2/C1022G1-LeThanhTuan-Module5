package com.example.bookmanagement.repository;

import com.example.bookmanagement.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IBookRepository extends JpaRepository<Book, Integer> {
    @Query(value = "SELECT * FROM Book where name like %:name% and is_deleted = false", nativeQuery = true)
    Page<Book> searchBook(@Param("name") String name, Pageable pageable);

    Book findById(int id);
}
